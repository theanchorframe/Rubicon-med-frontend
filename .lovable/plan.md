
## Goal

Replace the embedded GoHighLevel iframe inside the Case Study popup with a native, fully controllable form. Rebuild the popup layout so it fits on a mobile viewport without scrolling. Post submissions to a HighLevel webhook via a Lovable Cloud edge function proxy.

## Popup layout (mobile-first redesign)

New vertical order inside the modal:

```text
┌────────────────────────────────┐
│ [X]                            │
│ Get Our Complimentary          │  ← headline (smaller, tighter)
│ EPD Case Study                 │
│ ──────────────────────────     │
│ [ small banner image ~64px ]   │  ← subline dropped on mobile
│                                │
│ Full Name         [__________] │
│ Company Email     [__________] │
│                                │
│ ☐  Please contact me to        │  ← unchecked, left-aligned checkbox
│    schedule a complimentary    │
│    consultation                │
│                                │
│ [   Send me the case study   ] │  ← primary CTA, full width
└────────────────────────────────┘
```

Specifics:
- Headline shrinks on mobile (`text-xl md:text-2xl`) and moves above the banner.
- Banner image: `h-16 md:h-32` (down from `h-40 md:h-48`), still `object-contain`.
- Subline "How one MedTech team unlocked $35M..." shown on `md+` only.
- Inputs: shadcn `Input` + `Label`, stacked, comfortable touch targets (`h-11`).
- Checkbox: shadcn `Checkbox`, unchecked by default, label to the right of the box, entire label clickable.
- Submit button: primary navy, full-width, min height `h-12`.
- Whole modal caps at `max-h-[90vh]` (already there) but the goal is to make internal scrolling unnecessary on a 390×844 viewport.

## Form behavior

Fields captured:
- `fullName` (required, 1–100 chars, trimmed)
- `email` (required, valid email, ≤255 chars, trimmed)
- `wantsConsultation` (boolean, default false)

Validation with `zod` client-side. Inline error text under each field on failure. Submit is disabled while a request is in-flight.

Post-submit UX — success state replaces the form inside the modal, and the copy branches on the checkbox:

- If `wantsConsultation === false`:
  > **You're all set.** We just emailed the EPD case study to `{email}`. Didn't get it in ~2 minutes? Check spam or [view it now](#).
  >
  > [ View the case study now ] (secondary link/button; opens the PDF in a new tab)

- If `wantsConsultation === true`:
  > **You're all set — and we've been notified.** The EPD case study is on its way to `{email}`. Want to move faster? [ Pick a time now ] — opens the existing consultation dialog / Calendly flow so they don't have to wait for us to reach out.
  >
  > [ View the case study now ] (same secondary link)

The "view now" link addresses your concern about people being sketched out by random downloads: it's optional, not the primary action; the email is still positioned as the main delivery channel.

No auto-close. User closes with X or backdrop click (existing behavior).

## Backend: webhook proxy edge function

Why a proxy rather than posting to the HighLevel webhook directly from the browser:
- Hides the webhook URL from page source.
- Avoids CORS issues (HighLevel inbound webhooks don't always send permissive CORS headers).
- Gives us one place to add basic rate-limiting / spam guards later.

New edge function: `submit-case-study-lead`
- Accepts `POST` with JSON `{ fullName, email, wantsConsultation }`.
- Re-validates with zod server-side (defense in depth).
- Forwards to `GHL_CASE_STUDY_WEBHOOK_URL` (stored as a Cloud secret) with the same JSON body plus a `source: "epd-case-study-popup"` tag.
- Returns `{ ok: true }` on 2xx from HighLevel, `{ ok: false, error }` otherwise.
- Standard CORS headers, handles `OPTIONS` preflight.
- `verify_jwt = false` (public form).

Secret to add: `GHL_CASE_STUDY_WEBHOOK_URL` — you'll paste the HighLevel inbound webhook URL into the secure form.

## Files touched

- `src/components/CaseStudyPopup.tsx` — full rewrite of the modal body: new layout, native form, success state, submission handler calling `supabase.functions.invoke("submit-case-study-lead", ...)`. Removes the iframe entirely.
- `supabase/functions/submit-case-study-lead/index.ts` — new edge function (proxy to HighLevel webhook).
- Secret `GHL_CASE_STUDY_WEBHOOK_URL` added via secure form.

No other components change. Triggers for opening the popup stay exactly as they are (button in `CTABanner.tsx`).

## Open item to confirm during build

- The "View the case study now" link needs a URL — either an existing hosted PDF or a route on the site. I'll stub it as `#` and ask you for the final URL right after the popup redesign is in place so the rest doesn't block on it.
