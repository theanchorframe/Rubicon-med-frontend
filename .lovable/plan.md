

# Complete Implementation Plan: Website Update (1-28-25 Document)

After thoroughly reviewing the 27-page document and comparing against all current code files, here are ALL remaining changes that need to be implemented:

---

## Step 1: Hero Section Updates
**File:** `src/components/HeroSection.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 29-37 | Pre-headline: "When your next MedTech bet cannot be a guess" | **DELETE this entire pre-headline block** |
| 44-54 | Main headline: "Stop betting R&D budgets on gut feel. Make MedTech moves backed by data." | **Change to:** "Fueling patient outcomes and corporate growth through rigorous data and clinical insight." (single line, no special formatting needed) |
| 56-66 | Subheadline: "Rubicon offers fractional and traditional consulting. We synthesize market research, physician interviews, and medical literature to guide decisions..." | **Change to:** "Rubicon delivers fractional and traditional consulting fueled by clinical and market insights. We provide the strategic roadmap—from product development and market segmentation to revenue forecasting and launch execution." |
| 78-80 | Button text: "Request a Complimentary Consultation" | **Change to:** "Click this Button to Request a Complimentary Consultation" |

---

## Step 2: About Section / Rob's Bio Updates (ProcessSection.tsx - Right Column)
**File:** `src/components/ProcessSection.tsx` (lines 192-218)

| Line | Current | Change To |
|------|---------|-----------|
| 199 | Paragraph 1: "Rob is a medical marketing and strategy consultant who sits at the intersection of clinical insight and commercial reality. He has spent more than 25 years in medtech, pharma, and diagnostics, including management roles at Abbott, Medtronic, 3M, and Integer, helping teams decide which ideas are worth funding." | **Change to:** "Rob turns clinical promise into commercial growth. With over 25 years of leadership at Abbott, Medtronic, Integer, and 3M, he helps teams validate high-stakes investments, develop products, and turn medical innovation into market growth." |
| 208 | Paragraph 2: "His work focuses on one thing: turning clinical promise into growth. Rob partners with Executives and clinical leaders to clarify real-world problems, collaborate with R&D, and bring innovative products to market. He has engaged over 100 KOLs, evaluated over 20 markets, supported 40+ product and marketing initiatives, and helped companies avoid at least $2 million in non-viable investment." | **Change to:** "With expertise spanning 20+ markets and 100+ KOL engagements, Rob specializes in identifying high-growth opportunities. His strategic guidance ensures funding goes to the right ideas for commercial growth and risk mitigation." |
| 210-218 | Paragraph 3: "When the stakes are high and missteps are expensive, Rob gives teams a clear path from idea to launch so they can commit resources with confidence." | **DELETE this entire paragraph** |

---

## Step 3: IDEA Process Section - All Four Stages
**File:** `src/components/ProcessSection.tsx`

### "I" Section (lines 23-40 and accordion display line 256):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 24) | "I – Immerse in your reality" | "Immersion and Inquiry" |
| subtitle (line 25) | "(Initial Meeting / Discovery)" | "(Initial Meeting)" |
| summary (line 26) | "Start with the world you actually operate in, not a generic template." | "Project Objective(s)" |
| deliverable (line 39) | "A clear initial picture of your real-world environment..." | "Every engagement begins with a deep-dive into your real-world environment and project constraints. To guide the IDEA process, we deliver a Statement of Understanding and a Statement of Work—a clear-eyed blueprint that transforms high-level goals into a validated, executable plan for your product." |
| accordion display (line 256) | "– Immerse in your reality" | "Immersion and Inquiry" |

### "D" Section (lines 41-57 and accordion display line 257):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 42) | "D – Design the strategy" | "Delineate Project Roadmap" |
| accordion display (line 257) | "– Design the strategy" | "Delineate Project Roadmap" |

### "E" Section (lines 58-75 and accordion display line 258):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 59) | "E – Execute the evidence plan" | "Engage Full Team for Plan Execution" |
| subtitle (line 60) | "(Execute Plan: internal, external, and quantitative work)" | "(Team Kickoff)" |
| accordion display (line 258) | "– Execute the evidence plan" | "Engage Full Team for Plan Execution" |

### "A" Section (lines 76-119 and accordion display line 259):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 77) | "A – Advise on the decision" | "Alignment and Action Plans" |
| subtitle (line 78) | "(Advise / Concept, Targeting, Positioning, and Messaging)" | "(Next Steps)" |
| accordion display (line 259) | "– Advise on the decision" | "Alignment and Action Plans" |

---

## Step 4: Case Studies Section Updates
**File:** `src/components/CaseStudiesSection.tsx`

### Card 1 (lines 17-26):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 20) | "Mitigate Seven-Figure Capital Risks through Upstream Strategy and Cross-Functional Synchronicity" | "Validate product licensing and acquisitions" |

### Card 2 (lines 27-36):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 30) | "Crystallize Clinical Intelligence into High-Yield Commercial Strategies that Capture and Defend Market Share" | "Commercial Growth from Clinical and Market Insight" |

### Card 3 (lines 37-46):
| Field | Current | Change To |
|-------|---------|-----------|
| title (line 40) | "De-Risk Every Product Bet With Proven Market Insight" | "New Product Risk Mitigation" |
| description (lines 41-42) | "Robert applies data-driven segmentation and VoC analysis so that your roadmap reflects real market demand, not assumptions." | "We apply data-driven segmentation and VoC analysis so that your roadmap reflects true market demand." |

### Card 4 (lines 47-56):
| Action |
|--------|
| **DELETE entire Card 4** ("Align Teams Quickly with Patient and Clinician Roundtables") |

---

## Step 5: Stats Section Update
**File:** `src/components/StatsSection.tsx`

| Line | Current | Change To |
|------|---------|-----------|
| 23 | "$1.5M" | "$2M" |

---

## Step 6: FAQ Section Updates
**File:** `src/components/FAQSection.tsx`

### FAQ 1 - Types of companies (lines 13-17):
| Field | Current | Change To |
|-------|---------|-----------|
| question (line 14) | "What types of companies do you typically work with?" | "With what types of companies do you typically work?" |
| answer (lines 15-16) | "I primarily work with medical device companies. This includes early-stage startups preparing for their first product launch as well as established global manufacturers looking to refine their commercial strategy. Whether you're entering the market or scaling an existing portfolio, I help teams find the clearest path forward and avoid costly missteps." | "We partner with medical device and pharmaceutical organizations across the entire growth spectrum. Our expertise spans from guiding early-stage startups through their inaugural product launches to supporting established global manufacturers in product development and strategic licensing or acquisitions." |

### FAQ 2 - Launch experience (lines 18-22):
| Field | Current | Change To |
|-------|---------|-----------|
| answer (lines 20-21) | "I've led or supported over 40 medical projects across product categories including vascular intervention, multiple pharmaceuticals, and diagnostics. I concentrate on the front end: defining the problem, selecting the right opportunities, and building the evidence story that unlocks adoption at launch." | "With a legacy of orchestrating 40+ high-stakes launches across vascular intervention, pharmaceuticals, and diagnostics, Rob specializes in the critical 'Front-End of Innovation.' By applying a comprehensive launch framework, we identify high-value opportunities and architect the clinical evidence stories that drive adoption. We don't just plan; we equip and train your launch teams to ensure a seamless, high-ROI transition from R&D to global commercialization." |

### FAQ 4 - Process (lines 28-32):
| Field | Current | Change To |
|-------|---------|-----------|
| answer (lines 30-31) | "Every engagement starts with a discovery phase to understand your goals, team structure, timelines, and where friction may be slowing you down. From there, I deliver a formal Statement of Work that defines a tailored scope, priorities, and milestones, along with a short set of upstream recommendations shaped in discovery for your team. I stay focused on speed, fit, and return on investment." | "Every engagement begins with a deep-dive into your real-world environment and project constraints. To guide the IDEA process, we deliver a Statement of Understanding and a Statement of Work—a clear-eyed blueprint that transforms high-level goals into a validated, executable plan for your device." |

### FAQ 5 - Investment payoff (lines 33-37):
| Field | Current | Change To |
|-------|---------|-----------|
| answer (lines 35-36) | "My work has helped clients avoid $10M+ in wasted spend and reduce time-to-launch by 30% or more. If you're making decisions that affect regulatory risk, market share, or product adoption, the cost of misalignment is far greater than the cost of getting it right." | "Our work has helped companies avoid $2M+ in wasted spend and helped bring >$10M in new product revenue. While innovation inherently carries uncertainty, our risk-mitigation frameworks provide the clinical and commercial confidence necessary for a successful launch." |

---

## Summary: All Files to Modify

| File | Number of Changes |
|------|-------------------|
| `src/components/HeroSection.tsx` | 4 changes (delete pre-headline, update headline, update subheadline, update button text) |
| `src/components/ProcessSection.tsx` | 11 changes (3 bio paragraph changes + 8 IDEA section updates) |
| `src/components/CaseStudiesSection.tsx` | 4 changes (Card 1 title, Card 2 title, Card 3 title + description, delete Card 4) |
| `src/components/StatsSection.tsx` | 1 change ($1.5M to $2M) |
| `src/components/FAQSection.tsx` | 5 changes (4 Q&A updates including question wording change) |

---

## Implementation Order

1. **Hero Section** - Delete pre-headline, update headline, subheadline, and button text
2. **ProcessSection - Bio** - Update 2 paragraphs, delete 3rd paragraph about "When the stakes are high..."
3. **ProcessSection - IDEA** - Update all 4 stage titles, subtitles, and "I" section content
4. **Case Studies** - Update titles/descriptions for Cards 1-3, delete Card 4
5. **Stats Section** - Change $1.5M to $2M
6. **FAQ Section** - Update 4 Q&A pairs (including the question wording change)

---

## Notes

- The document pages 24-27 contain sales cadence information (not website changes)
- All "I/Rob" first-person language is being updated to "We" professional voice
- The word "Complementary" in the document appears to be a typo for "Complimentary" - we'll use "Complimentary" as it's already correctly implemented on the site

