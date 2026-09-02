# Content provenance

Every piece of copy in the prototype, and where it came from. Update this as
pages are built — it is what tells the WordPress build which fields still need
real content, and it stops invented copy surviving to launch.

**Source documents.** `Trauma Care – Website Requirements.docx` (referenced as
§n) and `Trauma Care - Technical Specification & Recommendation.docx`, June 2026
(referenced as "spec §n" and by requirement ref, e.g. M1, W3).

**Status key**

| | |
|---|---|
| ✅ **Live** | Verbatim, or a trivial reformat, from traumacare.org.uk |
| 🚫 **Withheld** | True on the live site, but withheld from the prototype pending client confirmation |
| ✏️ **Rewritten** | Written for the prototype, grounded in their own facts. **Needs client approval** |
| ⚠️ **Invented** | Written to demonstrate a component. **Must be replaced before launch** |
| ❓ **Disputed** | The live site contradicts itself. Needs a client ruling |

---

## index.html — Homepage

### Hero

| Content | Status | Source / note |
|---|---|---|
| "The UK's largest trauma network" | ✏️ | From "Become a member of the UK's largest trauma network" (membership page) |
| "Improving the outcome of the trauma victim" | ✏️ | Compressed from "We aim to improve the outcome of the trauma victim by establishing best practice throughout the whole chain of care" |
| Lead paragraph | ✏️ | Synthesised from the mission statement. **"From the roadside to rehabilitation" is our phrase** — theirs is "from the moment of injury, to the return to active life" |
| "Join Trauma Care" (CTA) | ✏️ | Live site uses "JOIN TODAY!" |
| "Watch free CPD webinars" (CTA) | ✏️ | Live site: "All of our CPD webinars are completely free to attend" |
| "Registered charity 1078780" | ✅ | Footer, every page |
| "Founded 1996" | ❓ | About text says 1996; the live footer says "© 1994 – 2025" |
| "200+ CPD recordings" | ✅ | "There are over 200 more webinars available in the Member's Portal" |
| Hero photograph | ✅ | Their own image, from the events page. Only genuine photograph on the live site |

---

## Shared template parts

### Header

| Content | Status | Source / note |
|---|---|---|
| Utility bar: phone, charity no. | ✅ | Contact page |
| Nav labels (About, Education, Events, Membership, News, Support us) | ✏️ | Restructured IA. Live nav is Events / Support Us / About Us / Our Partners / Webinars / Membership |
| Submenu one-line descriptions | ✏️ | Ours, but every fact in them is from the live site |
| Account menu items (My membership, My details, Payment method, My bookings, Video library, TRAUMA journal, Log out) | ✏️ | Ours, mapped directly to the member self-service list in requirements §3 |
| "Annual report 2023/24" | ✅ | Fundraising page — the 23/24 report is downloadable |
| "CPD Poster — Edition 30" | ✅ | CPD Posters page |
| Events panel feature: "The 29th Annual Conference" | ✅ | Conference page heading. Previously carried the "Linking the Chain of Survival" strapline — withdrawn, see the conference section below |
| "Day tickets £115 … from £60" | ✅ | Conference page |
| "From £3 a month" | ✅ | Membership page |

### Footer

| Content | Status | Source / note |
|---|---|---|
| Mission paragraph | ✏️ | Compressed from their four-sentence About text |
| admin@traumacare.org.uk · 0121 271 0380 | ✅ | Contact page |
| Office hours incl. "Closed Wednesday" | ✅ | Contact page |
| Office 5:19, 156 Great Charles Street Queensway, Birmingham B3 3HN | ✅ | Contact page |
| Social URLs (Facebook, X, LinkedIn, Instagram) | ✅ | Live footer |
| "© 1996–2026" | ❓ | See founding year above |
| Footer column link labels | ✏️ | Follow the new sitemap |

### Newsletter band

| Content | Status | Source / note |
|---|---|---|
| "Subscribing is completely free…" | ✏️ | Close paraphrase of "Subscribing to Trauma Care is completely free, and means you will always receive the latest news and event notifications!" |
| Consent wording | ✏️ | Ours. The live site collects subscribers with **no** consent statement — a PECR gap |

### Sponsor strip

| Content | Status | Source / note |
|---|---|---|
| Slater + Gordon — Platinum partner | ✅ | Named as Platinum Partner on the conference page |
| Galen — Corporate partner | ✅ | Live homepage |
| Academic partners | ✅ | Live nav |
| Two "Partner logo" tiles | ⚠️ | Placeholders. Real logo files outstanding |

---

## components.html — Component library

A documentation page, not client-facing. Invented data is acceptable here
**because the page carries a visible notice saying so**.

| Content | Status | Source / note |
|---|---|---|
| Breadcrumb: "Health in Motorsport: medical lessons from the Isle of Man TT" | ✅ | Upcoming Webinars page |
| Filter options — Pre-hospital, Critical care, Nursing, Military & austere, Paediatrics | ✅ | Real conference stream names |
| Filter options — Upcoming live, Recording, Hot Off The Press | ✅ | Real webinar categories |
| **Four webinar card titles** (pre-hospital blood transfusion, roadside amputation, HEMS tasking, mass casualty triage) | ⚠️ | **Invented.** Clinically plausible but fictional |
| **Filter counts** (48, 31, 27, 19, 14, 3, 211, 22, 96, 118) | ⚠️ | **Invented** |
| "Showing 1–4 of 214 webinars", "Page 1 of 54" | ⚠️ | **Invented** |

## styleguide.html — Design system

| Content | Status | Source / note |
|---|---|---|
| Membership tiers — RHP £8, NRHP £3 + benefit lists | ✅ | Prices from the membership page. **Two tiers only, per requirements §5** — the live Student tier is excluded |
| "Trauma Care is unique. No other organisation brings together such a wide range of professionals." — Prof Col Ian Greaves, Chairman | ✅ | Membership page, verbatim and correctly attributed. **Corrected** — this slot previously carried an unattributed pull-quote credited to Greaves in error |
| Professor Jim Ryan OBE — patron, biography line | ✅ | Our People page |
| "Health in Motorsport…", 16 July 2026 | ✅ | Upcoming Webinars page |
| "The Annual Trauma Care Conference", Yarnfield Park, eleven streams | ✅ | Conference page |
| "CPD Poster — Edition 30" | ✅ | CPD Posters page |
| "200+ CPD recordings" | ✅ | Webinar Recordings page |
| Example form values (name, email, donation amount) | ⚠️ | Illustrative only |

---

## Withheld: the "free" claim

🚫 **Every "free" claim has been stripped from the prototype.** The live site
states plainly that "All of our CPD webinars are **completely free to attend**.
You do not need to become a member to attend" — so the claim is true today and
was correctly sourced. But **neither** the requirements document nor the
technical specification mentions it: "free" appears nowhere in the requirements,
and only in the spec's Beacon pricing notes.

Webinar pricing is therefore an uncommitted commercial policy, and this project
is migrating the entire billing model to Beacon with tier simplification and
gateway consolidation still open in Phase 1 discovery. A navigation label is
structural; it should not encode a policy the brief does not fix.

| Was | Now |
|---|---|
| "Free CPD webinars" (nav, footer) | "CPD webinars" |
| "Watch free CPD webinars" (hero CTA) | "Watch CPD webinars" |
| "Live sessions, free to attend for everyone" | "Upcoming live sessions" |
| "free automated CPD certificates" | "automated CPD certificates" |
| "Free" / "Free to attend" badges | "Open to all" |
| "Free to everyone" filter option | "Open to all" |
| "funds free education" | "funds education" |

**Access statements are kept.** "Open to all" and "public recordings" describe
who may attend, not what it costs — a separate fact, and one both documents
support through the non-member YouTube route (spec §2.3, §17).

**To restore:** confirm with the client that webinars remain free to attend
after the Beacon migration, then reinstate. The wording above is the full list.

---

## Disputed facts awaiting a client ruling

| Question | Conflict |
|---|---|
| Founding year | About text says **1996**; footer says **© 1994** |
| ~~Membership tiers~~ | **Resolved.** Two tiers, RHP and NRHP, per requirements §5 and spec M1. The technical spec §2.5 confirms this is the charity's own plan: "the team plans to simplify from three membership tiers to two", to be confirmed in Phase 1 discovery. Existing Student members will need migrating |
| ~~Annual membership~~ | **Corrected.** An earlier note here said no annual option existed. Spec §2.3 says billing is "handled entirely in Kartra (**monthly or annual**)" — so annual exists today. The gap is that annual **prices are not published** on the public site. Needed before `membership-tiers.html` |
| ~~Conference edition and dates~~ | **Resolved 2026-09-02.** The 2026 block was removed from the live page; it now reads only "29th Annual, 8–11 March 2027" |

---

## Outstanding content the client must supply

- **Photography.** The live site publishes one genuine photograph. The rest is logos, small headshots, and four off-brand abstract stock banners (blue, teal, pink)
- **Vector logo.** Only a 2200px PNG is public
- **Partner logo files** for the sponsor strip
- **News articles.** No conventional news/blog section exists. Spec §2.1 notes the nearest equivalent is "a footer **Hot off the Press page**" — check what is on it before assuming nothing can be migrated. Note W3 (news/blog) is priority **S**, not M
- **Annual membership prices.** Annual billing already runs in Kartra (spec §2.3); the prices are simply not published

---

## index.html — "Where to start" section

| Content | Status | Source / note |
|---|---|---|
| "Where to start" / "Education, membership and support" | ✏️ | Section heading, ours |
| Membership card — "From £3 a month… journal, video library, discounted tickets, free automated CPD certificates" | ✅ | Membership page benefit list |
| Courses card — "Foundations in Trauma follows the patient from the scene of a major incident to rehabilitation" | ✅ | Events page FIT description |
| Events card — "Four days of education at the annual conference" | ✅ | Conference page |
| Events card — "CPD webinars that are free for anyone to attend" | ✅ | Webinars page: "completely free to attend… You do not need to become a member" |
| Donate card — "funds free education for the people who treat trauma patients" | ✅ | Homepage donate block, paraphrased |
| Donate card — "Give once or monthly, and add Gift Aid" | ✏️ | Requirements §4, not yet true of the live site |

**Note on section choice.** The four routes cover three of the four flexible
landing pages named in requirements §1 (Membership, Courses, Donations) and
raise the donation route, per §2. Webinars are folded into Events, matching
§6 "Events & webinars". The word "free" appears nowhere in the requirements —
that framing comes from the live site.


---

## index.html — Annual Conference section

Every figure sourced from the live conference page. No invented content.

| Content | Status | Source / note |
|---|---|---|
| "The 29th Annual Trauma Care Conference" | ✅ | Conference page heading |
| "8–11 March 2027 · Yarnfield Park" | ✅ | Conference page |
| ~~"Linking the Chain of Survival"~~ | ⚠️ | **Withdrawn from the prototype.** Captured verbatim from the conference page earlier in this project, but a re-check found it no longer appears anywhere on the live site — the page was edited mid-build. Ask the client whether it is still the conference strapline before reusing it |
| "Four days at Yarnfield Park" | ✅ | "Taking place at Yarnfield Park Training & Conference Center" |
| "from the point of injury and pre-hospital care through emergency medicine, critical care and definitive treatment, to rehabilitation" | ✅ | Conference page, near-verbatim |
| "Day tickets are £115. Members save £25, early bird saves £15… from £60" | ✅ | Conference page |
| Eleven specialist streams | ✅ | Conference page list, verbatim |
| "lunch and refreshments, full exhibition access… free onsite parking and a CPD certificate" | ✅ | Conference page "Included with your ticket" |
**Note.** Earlier in this project the conference page carried *both* "28th
Annual, 9–12 March 2026" and "29th Annual, 8–11 March 2027". A re-check on
2026-09-02 found the 2026 block gone, leaving only the 29th / March 2027 — so
that contradiction is resolved and the dates are now safe to publish. The
strapline disappeared in the same edit.

---

## index.html — Membership section

| Content | Status | Source / note |
|---|---|---|
| "Our members are the backbone of Trauma Care" | ✅ | Membership page, verbatim |
| "you actively contribute to our mission of providing affordable education to all healthcare professionals" | ✅ | Membership page, near-verbatim |
| Four benefit lines (video catalogue · event and shop discounts · free CPD certificates · quarterly *TRAUMA* journal) | ✅ | Membership page "Why become a member?" list, verbatim |
| "£3 a month for student and non-registered membership. £8 a month for registered healthcare professionals." | ✅ | Membership page tier prices |
| "Trauma Care is unique. No other organisation brings together such a wide range of professionals." — Professor Colonel Ian Greaves, Trauma Care Chairman | ✅ | Membership page, verbatim and **correctly attributed** — this passage is the one signed by Greaves |

**Attribution correction.** The prototype previously used *"The key to a successful
future for Trauma Care lies in its members"* attributed to Ian Greaves, in the
styleguide. Re-checking the source: that line is an **unattributed pull-quote** at
the top of the membership page. Greaves signs a different passage further down.
The attributed passage is now used in both places, and the pull-quote is only
safe to use unattributed.
