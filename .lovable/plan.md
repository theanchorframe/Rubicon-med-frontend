## Goal

When someone submits the EPD case study popup with the "Please contact me to schedule a complimentary consultation" checkbox checked, also fire a separate HighLevel webhook so it can be mapped to its own workflow in HighLevel. The existing case-study webhook keeps firing exactly as it does today.

## Behavior

- Every submission continues to POST to `GHL_CASE_STUDY_WEBHOOK_URL` (unchanged payload).
- If `wantsConsultation === true`, the edge function additionally POSTs to a new webhook, `GHL_CONSULTATION_WEBHOOK_URL`, with the same lead fields plus `source: "epd-case-study-consultation"` so you can distinguish it in HighLevel.
- Both requests fire in parallel. If the consultation webhook fails, we log it but still return `{ ok: true }` to the browser as long as the primary case-study webhook succeeded — the user experience is unchanged.

## Sample consultation payload

```json
{
  "source": "epd-case-study-consultation",
  "full_name": "Jane Doe",
  "email": "jane@company.com",
  "wants_consultation": true,
  "submitted_at": "2026-07-23T..."
}
```

## Files touched

- `supabase/functions/submit-case-study-lead/index.ts` — after validation, when `wantsConsultation` is true, also POST to `GHL_CONSULTATION_WEBHOOK_URL` alongside the existing case-study webhook.

## Secret to add

- `GHL_CONSULTATION_WEBHOOK_URL` — the new HighLevel inbound webhook URL for consultation requests. Requested via the secure form; no changes to the existing `GHL_CASE_STUDY_WEBHOOK_URL`.

## Verify

After the secret is saved, send a test submission with `wantsConsultation: true` via the edge function and confirm both webhooks receive it in HighLevel.
