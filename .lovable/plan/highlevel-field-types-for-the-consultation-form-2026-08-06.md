# HighLevel field types for the consultation form

## Outcome
No code changes are needed. The consultation webhook already sends both answers as plain text strings, so single-line text fields in HighLevel will capture every possible value.

## What gets sent
For "Current Asset Phase" and "Primary Strategic Challenge", the value is one of:
- The selected option, e.g. `Clinical Trials`
- `Other — <whatever they typed>` when they choose Other (keeping this format, as confirmed)
- `Not provided` when left blank

## Recommended HighLevel setup
| Webhook key | Field name | Type |
| --- | --- | --- |
| `current_asset_phase` | Current Asset Phase | Single line text |
| `primary_strategic_challenge` | Primary Strategic Challenge | Single line text |
| `corporate_title` | Corporate Title | Single line text |
| `consent_to_contact` | Consent to Contact | Single line text / checkbox |
| `case_study_requested` | Case Study Requested | Single line text / checkbox |
| `lead_source` | Lead Source | Single line text |

Single line text is safer than a HighLevel dropdown, because a dropdown rejects incoming values that do not exactly match its option list — which would drop every `Other — ...` answer.

## Next step
Set those fields to single line text in HighLevel and map them to the keys above. Nothing needs to change in the site code.