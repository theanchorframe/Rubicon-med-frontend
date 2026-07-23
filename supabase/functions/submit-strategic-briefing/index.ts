import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  title: z.string().trim().min(1).max(150),
  phase: z.string().trim().max(500).optional().default(''),
  challenge: z.string().trim().max(500).optional().default(''),
  consent: z.boolean(),
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

  const webhookUrl = Deno.env.get('GHL_CONSULTATION_WEBHOOK_URL');
  if (!webhookUrl) {
    console.error('GHL_CONSULTATION_WEBHOOK_URL is not configured');
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

  const { fullName, email, title, phase, challenge, consent } = parsed.data;

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'strategic-briefing-form',
        full_name: fullName,
        email,
        corporate_title: title,
        current_asset_phase: phase || 'Not provided',
        primary_strategic_challenge: challenge || 'Not provided',
        consent_to_contact: consent,
        submitted_at: new Date().toISOString(),
      }),
    });

    const responseText = await ghlRes.text();

    if (!ghlRes.ok) {
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