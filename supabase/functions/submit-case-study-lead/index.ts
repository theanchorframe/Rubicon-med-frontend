import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  wantsConsultation: z.boolean().default(false),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const webhookUrl = Deno.env.get('GHL_CASE_STUDY_WEBHOOK_URL');
  if (!webhookUrl) {
    console.error('GHL_CASE_STUDY_WEBHOOK_URL is not configured');
    return new Response(JSON.stringify({ ok: false, error: 'Server misconfigured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const parsed = BodySchema.safeParse(raw);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ ok: false, error: parsed.error.flatten().fieldErrors }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }

  const { fullName, email, wantsConsultation } = parsed.data;

  try {
    const submittedAt = new Date().toISOString();
    const basePayload = {
      full_name: fullName,
      email,
      wants_consultation: wantsConsultation,
      submitted_at: submittedAt,
    };

    const caseStudyReq = fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'epd-case-study-popup', ...basePayload }),
    });

    const consultationWebhookUrl = Deno.env.get('GHL_CONSULTATION_WEBHOOK_URL');
    const consultationReq =
      wantsConsultation && consultationWebhookUrl
        ? fetch(consultationWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              source: 'epd-case-study-consultation',
              ...basePayload,
            }),
          })
        : null;

    const [ghlRes, consultationRes] = await Promise.all([
      caseStudyReq,
      consultationReq ?? Promise.resolve(null),
    ]);

    if (consultationRes && !consultationRes.ok) {
      const text = await consultationRes.text();
      console.error('Consultation webhook failed', consultationRes.status, text);
    } else if (wantsConsultation && !consultationWebhookUrl) {
      console.warn('wantsConsultation true but GHL_CONSULTATION_WEBHOOK_URL not set');
    }

    if (!ghlRes.ok) {
      const responseText = await ghlRes.text();
      console.error('HighLevel webhook failed', ghlRes.status, responseText);
      return new Response(
        JSON.stringify({ ok: false, error: 'Upstream webhook failed' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error forwarding to HighLevel webhook', err);
    return new Response(JSON.stringify({ ok: false, error: 'Network error' }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});