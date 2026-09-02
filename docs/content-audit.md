# Trauma Care — Content & Brand Audit

Source: live review of traumacare.org.uk (Kartra), plus "Trauma Care – Website Requirements.docx",
"Trauma Care Website.docx" (members-area map) and "Technical Specification & Recommendation.docx".
Date of audit: 2026-09-02

---

## 1. Organisation facts (must carry over verbatim)

| Item | Value |
|---|---|
| Registered charity no. | 1078780 |
| Founded | 1996 (footer currently says "© 1994 – 2025" — inconsistent, needs client ruling) |
| Email | admin@traumacare.org.uk |
| Phone | 0121 271 0380 |
| Office hours | Mon–Tue 09:00–17:00 · Wed closed · Thu–Fri 09:00–17:00 |
| Address | Trauma Care UK, Office 5:19, 156 Great Charles Street Queensway, Birmingham, B3 3HN |
| Social | Facebook, X, LinkedIn, Instagram (all live) |
| Chairman / Co-founder | Professor Colonel Ian Greaves |
| Founding chair | Professor Jim Ryan OBE |

**Mission statement (reusable copy):** "Trauma Care was founded in 1996 to address the need for commonly
agreed standards of the best clinical practice in the management of trauma. We aim to improve the outcome
of the trauma victim by establishing best practice throughout the whole chain of care. We achieve this
through education, research and publishing."

---

## 2. Current information architecture

Top-level nav — every dropdown parent is `javascript: void(0);`, so it is neither a link nor keyboard operable:

- **Events** → Annual Trauma Care Conference · Events Overview · British Burn Association Conference (external)
- **Support Us** → Merchandise & Books · Corporate Sponsorship · Fundraising Opportunities
- **About Us** → Trauma Care Fellowship · Our People · The Ryan Lecture · Contact Us · Events
- **Our Partners** → Slater + Gordon (external) · Galen (external) · Academic Partners
- **Webinars** → Upcoming Webinars · Webinar Recordings · CPD Posters
- **Membership** (single page)
- **LOGIN** (Kartra member portal)

Footer: About Us · Contact Us · Privacy Policy · Cancellation Policy · Terms of Use

**Members' portal** (from the members-area doc), most of which the charity has marked for deletion:
Journal access (SAGE link) · Recorded Webinars · Recorded Classic Webinars · Recorded Hot Off The Press
Webinars · Conference Recordings 2017/2018 *(delete)* · AGM · Annual Report & Register *(delete)* ·
Support contact *(move to public Contact page)* · Portal front page *(delete)* · My Profile *(moves to Beacon)*.

---

## 3. Content inventory worth keeping

### Membership

The live site offers **three** tiers, not the two named in the requirements doc:

| Tier | Audience | Price | Benefits |
|---|---|---|---|
| Student | Studying to become practitioners, nurses, paramedics or associated practitioners | £3/month | TRAUMA digital · Video library · Ticket discounts · Free automated CPD certificates |
| Registered Healthcare Professional (RHP) | Registered practitioners, nurses, paramedics | £8/month | As above, plus **full** video library access |
| Non-Registered Healthcare Professional (NRHP) | Non-registered practitioners, nurses, paramedics | £3/month | As Student |

> **Open question:** the requirements doc specifies two tiers (RHP / NRHP); the live site has three. Only
> monthly pricing is published, but the doc requires monthly **and** annual options. Needs client
> confirmation before the pricing component is designed.

Membership pull-quote: *"The key to a successful future for Trauma Care lies in its members."*

### TRAUMA Journal

Peer-reviewed quarterly scholarly journal covering prevention, prehospital management, A&E medicine,
surgery, anaesthetics, intensive care, and physical and psychiatric rehabilitation. Delivered digitally or
in print. Online access is via **SAGE** (external) — and must become a public page per the members-area doc.

### Events & Conference

- **Annual Trauma Care Conference**, Yarnfield Park Training & Conference Centre. Four days, multidisciplinary.
- Strapline: *"Linking the Chain of Survival"*
- Standard day ticket **£115**; members −£25; early bird −£15; students / unpaid responders / volunteers −£15.
  Discounts combine, from **£60**. Group bookings by email.
- Included: all sessions on the chosen day, lunch and refreshments, exhibition access, networking time,
  free onsite parking, CPD certificate of attendance.
- Programme streams: Pre-Hospital Emergency Medicine · HEMS · Paramedic Practice · Critical Care · Nursing ·
  Military & Austere Medicine · Paediatrics · Older People & Trauma · Allied Health Professionals ·
  Community First Responders · Major Trauma · practical and immersive sessions.
- **Foundations in Trauma (FIT) Course** — two-day practical course following the patient journey from major
  incident scene to rehabilitation, aimed at medical students and recent graduates. Postponed 2025, returning.
- A live countdown timer to the conference is a current feature.

> **Content inconsistency:** the conference page headlines "The 28th Annual … March 9–12 2026" while the nav
> links "The 29th Annual …", and the same page separately shows "29th … March 8–11 2027" and refers to "our
> 2027 programme". Needs clarification before prototype copy is written.

### Webinars & CPD

- All CPD webinars are **free to attend**; membership is not required.
- Members receive an automatic free CPD certificate within 24 hours; non-members can buy one during the session.
- **200+ recorded webinars** in the member portal; a subset is public on YouTube.
- Recording categories: standard, "Classic", and "Hot Off The Press".
- **CPD Posters** — free downloadable PDF listing upcoming presentations, currently Edition 30, with an archive.

### Honours

- **Trauma Care Fellowship** — established 2020; recognises an exceptional lifetime contribution, or a
  singular act of significance, in trauma care. International in scope. Each fellow receives a bronze Wound
  Man statuette cast by Louis Lejeune Ltd. 2025 recipient: Dr Roderick MacKenzie.
- **The Ryan Lecture** — annual lecture at the conference marking Professor Jim Ryan's lifetime contribution;
  the speaker is invited by the Trauma Care Council. 2025: Dr Stephen Hearns.

### People

Patrons: Dr John Etherington CBE · Major General Tim Hodgetts CB CBE KHS DL (Surgeon General, ex-officio) ·
Dame Julie Moore DBE · Professor Jim Ryan OBE · Mark Ormrod MBE.
Also Council, trustees and team — full list to be pulled during content migration.

### Partners

Slater + Gordon Lawyers (Platinum Partner) · Galen · academic partners. The sponsor logo strip appears on
almost every page and is a recurring component.

### Support Us

Merchandise and books catalogue · corporate sponsorship · fundraising (London Marathon Gold Bond places) ·
AGM information (members and invited guests only; the report is published publicly three months later —
the 2023/24 report is currently downloadable).

---

## 4. Brand assets

**Logo:** a green rounded-square mark containing three linked figures — two white, one red at the centre —
whose bodies form interlocking chain links. This is the "chain of care" metaphor, which is also the
charity's core mission language and the conference strapline. The wordmark "Trauma Care" is set in a heavy
geometric sans, stacked over two lines, in the same green.
Asset: `872019766801Trauma_Care_Logo-2_clear.png` (2200×880 transparent PNG — no vector is public).

**Colours sampled from the live site:**

| Role | Hex | Note |
|---|---|---|
| Brand green | `#03B732` | Logo and primary buttons |
| Green (hover) | `#12A231` | |
| Accent red | `#DF0000` | Logo centre figure; used loosely for emphasis |
| Dark navy | `#212839` | Hero and section backgrounds |
| Body text | `#333333` | |
| Muted text | `#666666`, `#999999` | `#999` on white is 2.8:1 — fails AA |
| Surfaces | `#FFFFFF`, `#F6F6F6`, `#E7E7E7` | |

> `#03B732` on white measures **2.68:1** — it fails WCAG AA (4.5:1 for text, 3:1 for UI components). The
> brand green cannot be used for links, body copy or small text as-is. Recommendation for the visual
> direction step: keep the bright green as an identity and accent colour, and introduce a deepened green
> (around `#04773A`, 5.7:1 on white) for text, links and interactive states. Reserve red for genuine
> errors and urgency rather than decoration.

**Typography:** currently **six** unrelated families on a single page — Lato, Open Sans, Montserrat, Roboto,
Raleway and Nunito. Heading sizes are also inverted: an H3 renders at 63.9px while H2s render at 46px and
38px. There is no typographic system to preserve, so this is a clean-slate decision.

---

## 5. Problems the redesign must fix

1. **No clean URLs.** Every internal link is `app.kartra.com/redirect_to/?asset=page&id=HFkV8bxegqrK` —
   opaque, unshareable, unindexable. This confirms the requirement for a full 301 redirect map, which will
   have to be built from Kartra asset IDs rather than readable paths.
2. **Inaccessible navigation.** All dropdown parents are `javascript: void(0);` — no href, no keyboard
   access, no screen-reader semantics. This is the specific gap named in the requirements doc.
3. **No news or blog.** Confirmed absent. "Hot Off The Press" exists only as a webinar category.
4. **Donations are a single outbound PayPal Giving Fund link.** No recurring giving, no Gift Aid capture, no
   suggested amounts, no impact framing, no thank-you page.
5. **Third-party cookie banner.** The consent notice is Kartra's and links to *Kartra's* cookie and privacy
   policies rather than the charity's — a UK GDPR and PECR exposure.
6. **"Powered by KARTRA"** and an owner-only editing widget are visible in public page output.
7. **Contrast failures** in the current palette (`#999` text; brand green on white).
8. **Content drift.** Conference numbering and dates contradict themselves across pages, and two different
   founding years are in circulation.
9. **Membership is a flat page, not a journey.** No comparison table, no annual option, no join flow.
10. **Fragmented member experience.** Journal on SAGE, videos on YouTube and in the portal, certificates via
    TypeForm/Accredible, profile in Kartra. The new member area must present these as one place.

---

## 6. Reusable content patterns observed

These recur across the current site and should become components:

- Sponsor / partner logo strip ("Our Sponsors and Partners" plus a logo grid)
- Newsletter subscribe band ("Subscribing to Trauma Care is completely free…")
- Standard mission block, used as a footer prelude on every page
- Pricing / membership tier cards with benefit checklists
- Named-honour blocks (Fellowship, Ryan Lecture) — image, long-form description, "Learn More"
- Person cards with honorifics, role and biography (patrons, faculty, council)
- Countdown timer for the conference
- Accordion FAQs (Contact page)
- Downloadable asset callout (CPD posters, AGM report)
- Cross-sell "Find Out More" card grid on the homepage

---

## 7. Open questions for the client

1. Membership tiers — two (RHP/NRHP) or three (including Student)? Are annual prices confirmed?
2. Conference — which edition number and dates are correct for the next event?
3. Founding year — 1994 or 1996?
4. Is the existing logo fixed, and is a **vector** version available? Only a 2200px PNG is public.
5. Is the bright green fixed as the primary brand colour, or may we deepen it for accessibility?
6. Is the merchandise shop staying, and if so, is it in scope for this prototype?
7. Does the members' AGM / annual report section survive the deletion list?
