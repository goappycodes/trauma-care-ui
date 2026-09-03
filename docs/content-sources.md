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
| "Watch CPD webinars" (CTA) | ✏️ | Ours. Previously "Watch free CPD webinars" — see the withheld-claims section |
| "Registered charity 1078780" | ✅ | Footer, every page |
| "Founded 1996" | ❓ | About text says 1996; the live footer says "© 1994 – 2025" |
| "200+ CPD recordings" | ✅ | "There are over 200 more webinars available in the Member's Portal" |
| Hero photograph | ✅ | Their own image, from the events page, where it is captioned "The 2024 Faculty" — the Foundations in Trauma Course faculty. Renamed `fit-course-faculty-2024.jpg` once that was established, and reused in the FIT section of `events.html` |

---

## Shared template parts

### Header

| Content | Status | Source / note |
|---|---|---|
| Utility bar: phone, charity no. | ✅ | Contact page |
| Nav labels (Events, Support Us, About Us, Our Partners, Webinars, Membership) | ✅ | Live nav — labels, order and children taken verbatim, including About Us → Events repeating the Events section |
| Submenu one-line descriptions | ✏️ | Ours, but every fact in them is from the live site |
| "Conferences, courses and CPD events" (Events Overview, and About Us → Events) | ✅ | Events page — "Learn more about our many CPD events" |
| "Widening access to trauma education with universities" | ✅ | Academic Partners page |
| Partner sub-lines: slatergordon.co.uk, galen-pharma.com, bbaconference.org | ✅ | The link destinations themselves — they mark the three items that leave the site |
| Account menu items (My membership, My details, Payment method, My bookings, Video library, TRAUMA journal, Log out) | ✏️ | Ours, mapped directly to the member self-service list in requirements §3 |
| "Annual report 2023/24" | ✅ | Fundraising page — the 23/24 report is downloadable |
| Webinars panel feature: "CPD Poster — Edition 30", "Free to download and updated regularly" | ✅ | CPD Posters page |
| Events panel feature: "The 29th Annual Conference" | ✅ | Conference page heading. Previously carried the "Linking the Chain of Survival" strapline — withdrawn, see the conference section below |
| "Day tickets £115 … from £60" | ✅ | Conference page |

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
| "You will get our event announcements, new webinar dates and the latest CPD poster, and nothing else." | ✏️ | Rewritten from "Subscribing to Trauma Care is completely free, and means you will always receive the latest news and event notifications!" — the "completely free" opening is withheld, see below |
| Consent wording | ✏️ | Ours. The live site collects subscribers with **no** consent statement — a PECR gap |

### Sponsor strip

| Content | Status | Source / note |
|---|---|---|
| Slater + Gordon — Platinum partner | ✅ | Named as Platinum Partner on the conference page |
| Galen — Corporate partner | ✅ | Live homepage |
| Academic partners | ✅ | Live nav |
| Six partner logos — Slater + Gordon, Galen, Qualsafe, University of Plymouth, University of Gloucestershire, TCAR Education Programs | ✅ | Downloaded from the charity's own CDN (homepage and conference pages). Placeholder tiles replaced |
| Tier captions ("Platinum partner" etc.) | 🚫 | **Withheld from the strip.** Only Slater + Gordon's Platinum status is sourced (conference page); the other five tiers are unknown. Asserting them would be invention. Tiers belong on partners.html |

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
| "Free CPD webinars" (nav, footer) | "CPD webinars" — the header item has since taken the live label, "Upcoming Webinars" |
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

---

## index.html — Welcome and Donate sections

| Content | Status | Source / note |
|---|---|---|
| Welcome heading and body | ✅ | Live homepage welcome note. Wording verbatim; the "exclusive section for Members" and "we hope you'll find something" paragraphs are **merged into one**, at the client's request |
| Signature — Professor Ian Greaves, Co-Founder | ✅ | As it appears on the live homepage. The fuller "Professor Colonel … Chairman" form is from the membership page and is not used here |
| "Donate to Trauma Care" + body | ✅ | Live homepage donate block. **"quality free education" → "quality education"** — see the withheld-claims section |
| "Add Gift Aid and we receive 25% more, at no extra cost to you" | ✏️ | The 25% uplift is the standard HMRC rate. Covers D3 |
| "Other ways to give" | ✏️ | Ours. Routes to the fundraising page |

**Earlier rewrite withdrawn.** The welcome copy was briefly replaced with a
heading drawn from the membership page and the member professions shown as
tags. The client asked for the live section content, so the original copy is
restored verbatim — including its references to the site's own navigation.

---|---|---|
| "Welcome to Trauma Care" | ✅ | Live homepage section heading |
| "We are delighted that membership is growing at a very healthy rate… doctors, nurses, paramedics, first responders, physiotherapists, remote environmental medics, military medical personnel…" | ✅ | Membership page, verbatim |
| "Our aims are clear: to improve patient care through education, publishing and research" | ✅ | Membership page, verbatim |
| "consider becoming part of the Trauma Care family" | ✅ | Live homepage welcome note |
| Signature — Professor Colonel Ian Greaves, Chairman and Co-Founder | ✅ | He signs the membership passage as Chairman; the homepage note as Co-Founder |
| "Donate to Trauma Care" + body | ✅ | Live homepage donate block. **"quality free education" → "quality education"** — see the withheld-claims section |
| "Other ways to give" CTA | ✏️ | Ours. Routes to the fundraising page |

**Welcome copy deliberately differs from the live original.** The live note is
largely a description of the site's own navigation — "you can find out how to
become one… by clicking on Membership at the top of this page". The route cards
above it already do that job. The sentiment and the signature are kept; the
navigation-in-prose is replaced with the membership-page passage, which says
something about the organisation instead.

---

## conference.html — The 29th Annual Trauma Care Conference

Source page: `traumacare.org.uk/Yarnfield2027`, read 3 September 2026. Where the
live page and the ticket checkout disagree, the checkout is treated as the
harder fact — it is the thing a delegate actually pays against.

| Content | Status | Source / note |
|---|---|---|
| "The 29th Annual Trauma Care Conference" | ✅ | Live page heading |
| "8–11 March 2027", "Mon 8–Thu 11 March 2027, 9:00am–5:00pm" | ✅ | The live hero reads "March 8th - 11h 2027" — a typo. Times from the ticket checkout, "Mon 8 Mar 2027 9:00 AM – Thu 11 Mar 2027 5:00 PM GMT" |
| "Yarnfield Park Training & Conference Centre, Staffordshire ST15 0NL" | ✅ | Live page names the venue; postcode from the ticket checkout |
| Hero intro, "Whether you are returning… shared experience." | ✅ | Live page, verbatim apart from contractions |
| "Proudly sponsored by our Platinum Partners" + Slater + Gordon logo | ✅ | Live hero. The logo file is the one already in `assets/img/partners/` |
| "Come and spend four days learning from each other…" | ✅ | Live page, verbatim |
| Countdown to 8 March 2027, 09:00 GMT | ✅ | The live page runs the same counter |
| "Standard day ticket £115" | ✅ | Live page |
| Discounts: members −£25, early bird −£15 until 31 December 2026, students / unpaid responders / volunteers −£15 | ✅ | Live page |
| "Eligible discounts can be combined, bringing tickets down to just £60" | ✅ | Live page |
| Included list — sessions, lunch, exhibition, networking time, free parking, CPD certificate | ✅ | Live page, verbatim |
| Member access code and proof-of-eligibility notes | ✅ | Live page. "CFRs and equivalent unpaid responder roles" expanded to "community first responders" on first use |
| Group bookings → admin@traumacare.org.uk | ✅ | Live page |
| "Four days of trauma care" + two paragraphs | ✅ | Live page, verbatim; US spellings anglicised (program → programme, center → centre) |
| Twelve specialisms | ✅ | Live page list, verbatim |
| "Whether you are working on the roadside…" | ✅ | Live page |
| "The full programme and speaker line-up will be announced in the coming months." | ✅ | Live page |
| Day-by-day themes, all four days | ✅ | The two "29th Annual Trauma Care Conference Themes" poster images on the live page, transcribed. Sentence case applied; "AHP" expanded to "Allied health professionals" |
| Poster booking buttons | ✅ | The same two images, saved as `conference-themes-days-1-2.png` and `-3-4.png`, each linking to the booking page |
| Booking URL — `tickettailor.com/events/traumacarecharity/2363521` | ✅ | Every "Buy now" on the live page. One URL for the whole event; Kartra tracking parameters stripped |
| "Buy tickets", "Choose your day or days on Ticket Tailor…", "Book on tickettailor.com" | ✏️ | Ours. Names the destination so an off-site jump is not a surprise, following the header's convention for external links |
| "More than sitting in a lecture theatre" (heading) | ✏️ | Ours. The live heading is "Why Attend Trauma Care 2027?"; its first line — "more than sitting in a lecture theater" — is promoted to the heading and the eyebrow carries "Why attend" |
| Why-attend body, four paragraphs | ✅ | Live page, verbatim apart from contractions |
| Flexible tickets, CPD, venue/parking/accommodation blocks | ✅ | Live page, condensed but with no fact added or dropped |
| Important ticket information, five points | ✅ | Live page, verbatim |
| "Further information about arrival, travel, parking and the programme…" | ✅ | Live page |
| "Join us at Yarnfield Park in March 2027" (closing CTA) | ✏️ | Ours. The live page ends with three unlabelled "Buy now" buttons; this replaces them with one CTA band carrying the price the client already publishes |
| "Join and save £25" (closing CTA, second button) | ✅ | The member saving is the live page's own figure |

**Not carried over.** The live hero runs a 9.9 MB background video. It is not
shipped here: the file is heavier than the rest of the page put together, and
the hero is set typographically instead. If the client wants it, it needs
compressing and a poster frame first.

**Watch the conference number.** The live events page still advertises "The
28th Annual Trauma Care Conference, March 9th – 12th 2026" while this page is
the 29th, 8–11 March 2027. Both are live-site facts; the 2027 page is the newer
one. Worth confirming which the client wants promoted.

---

## events.html — Events and conferences

Source page: `traumacare.org.uk/events`, read 3 September 2026.

| Content | Status | Source / note |
|---|---|---|
| "Events and conferences" (h1) | ✅ | The live page's own `<title>`, "Trauma Care Events and Conferences" |
| "Learn more about our many CPD events" | ✅ | Live page heading, demoted to the intro |
| Jump nav: Annual Conference · Webinars · Membership · Fellowship · Ryan Lecture · FIT Course | ✅ | The live secondary nav, same order. **"Leeds Conference" relabelled "Annual Conference"** — see the disputed note below |
| Featured event — 29th conference, 8–11 March 2027, Yarnfield Park, £115 / from £60 | ✅ | The conference page. **The live events page still advertises the 28th, 9–12 March 2026** — see below |
| Featured event summary line | ✏️ | Ours, condensed from the conference page's own "Four days of trauma care" copy |
| Fellowship — "Established in 2020… has been outstanding." | ✅ | Live page, verbatim apart from "is a recognition of" → "recognises" |
| "Each fellow receives a bronze statuette of the Wound Man, cast for us by the distinguished bronze foundry Louis Lejeune Ltd." | ✅ | Live page, verbatim |
| "The Trauma Care Fellowship 2025 was awarded to Dr Roderick MacKenzie." | ✅ | Live page, verbatim |
| Wound Man photograph | ✅ | Their own image from the live events page, saved as `wound-man-statuette.png` |
| Ryan Lecture — both paragraphs | ✅ | Live page, verbatim |
| "The 2025 Ryan Lecture was delivered by Dr Stephen Hearns." | ✅ | Live page, verbatim |
| Professor Jim Ryan portrait | ✅ | Their own image, saved as `professor-jim-ryan.png`. **Needs compressing** — 915 KB PNG |
| FIT Course — postponement notice and course description | ✅ | Live page, verbatim, split so the status reads as a notice rather than as the opening clause of the description |
| Eight course topics | ✅ | Live page topic list, split from one run-on line into separate items |
| "Every aspect of the course is practical or quiz-based." | ✅ | Live: "All aspects are practical or quiz-based" |
| "The 2024 faculty" + photograph | ✅ | Live page caption and image. **This is the same file as the homepage hero** — it was renamed `fit-course-faculty-2024.jpg` once its real subject was identified |
| Section eyebrows ("Awarded annually", "Given at every conference", "Two days, practical") | ✏️ | Ours, each restating a fact from the copy below it |
| Hero: "Proudly sponsored by" + Slater + Gordon logo | ✅ | Live hero credit. Uses the `slater-gordon.png` already in the prototype rather than the live page's blue-background variant |
| "Trauma Care events and conferences" section, all four blocks | ✅ | **From a section the live page has switched off** (`display: none`). Copy is written and current, so it is carried over |
| "Members of Trauma Care receive CPD certificates and large discounts" | ✅ | Live copy reads "receive **free** CPD Certificates and **huge** discounts". "Free" removed under the withheld-claims rule below; "huge" toned to "large" |
| "over 1,000 people to the 27th Annual Trauma Care Conference" | ✅ | Live, verbatim. **Stale** — the site is now advertising the 29th |
| "The Leeds Trauma Care Conference… Weetwood Hall in September" | ✅ | Live, verbatim. This is the Regional Event, and explains the "Leeds Conference" nav label |
| "The Alexander Memorial Lecture" | ✅ | Live. The only mention of this lecture anywhere on the site — it has no page of its own |
| Fellowship opening paragraph, "Through conferences, webinars and publications…" | ✅ | **From a second, switched-off copy of the Fellowship section** that carries one paragraph more than the visible one |
| Subscribe section — heading, intro, all six fields, both consents, "Sign up" | ✅ | The live "Subscribe" modal, reached from the live page's Subscribe buttons. Replaces the shared newsletter band on this page because it collects more |
| Country-code list | ✏️ | Five entries stand in for the live list of ~200. The real list comes from the CRM field, not hand-written markup |
| "You can unsubscribe from any email, or by contacting us. See our privacy policy." | ✏️ | Ours, added to the GDPR consent. Matches the wording already used in the newsletter band |

**No copy from the live page is left out.** Checked line by line, including the
sections the live page hides — 75 of 75 distinct pieces of copy are present.

**Decoration is the exception.** The live page's five background images
(hexagon-and-medical-icon wallpapers and a concrete texture) are not used.
Sections are distinguished by alternating ground colours instead — see
`template-map.md`. No text or fact was lost with them.

**Three sections are hidden on the live site** (`display: none`) and were
missed on the first pass because they never render: the "Trauma Care Events and
Conferences" overview, a fuller Fellowship block, and the Subscribe modal. All
three are now carried over. Worth asking the client whether the overview was
switched off deliberately or by accident.

**Duplication carried over as-is.** The overview's "Foundations in Trauma" block
repeats the FIT section almost word for word. That repetition is the live
page's own; it is reproduced rather than edited away, but it should be resolved
before launch.

**❓ Which conference is current?** The live events page promotes the **28th**
conference, 9–12 March 2026; the live Yarnfield page promotes the **29th**,
8–11 March 2027. This page follows the 2027 date so the prototype is internally
consistent, but the client should confirm and the live site needs correcting.

**❓ "Leeds Conference" — resolved, but still needs a decision.** The live
secondary nav labels the conference link "Leeds Conference" while the
conference itself is at Yarnfield Park. The hidden overview section explains
it: the charity holds **two** conferences a year, the Annual International
Conference and a Regional Event, and the regional one is "The Leeds Trauma Care
Conference… at Weetwood Hall in September". The nav label points at the annual
conference, so it is wrong either way. Relabelled "Annual Conference" here.
**The Leeds regional event has no page and no date in the prototype** — it needs
both, and this is the same gap the spec flagged as "regional events".

**❓ "Return of the FIT Course in 2026".** Written when 2026 was in the future.
As of September 2026 it is nearly expired and there is no announced date. Kept
verbatim, but it needs either a date or a rewrite before launch.

### conference.html — items recovered on a second pass

A line-by-line check against the live page found four pieces of copy that the
first build had paraphrased away. All four are now on the page, and coverage is
77 of 77.

| Content | Status | Source / note |
|---|---|---|
| "Coming soon" | ✅ | The live heading of the countdown band. Set as the band's eyebrow, above the date heading |
| "Included with your ticket" | ✅ | The live label for the benefit list. Set as a small label inside the ticket card |
| "Trauma Care is proudly multidisciplinary." | ✅ | Live, verbatim, restored to the front of the specialisms intro |
| "Why attend Trauma Care 2027?" | ✅ | The live section heading, kept as the eyebrow above our own heading |

---

## corporate-sponsorship.html — Corporate sponsorship

Source page: `traumacare.org.uk/sponsorship`, read 3 September 2026. Coverage
checked line by line, including the section the live page hides: 64 of 64
distinct pieces of copy are present.

| Content | Status | Source / note |
|---|---|---|
| "Sponsorship packages" | ✅ | Live section heading |
| "The support we receive from our corporate sponsors is invaluable…" | ✅ | Live, verbatim |
| "…providing great educational content the world over" | ✅ | Live reads "great **free** educational content". "Free" removed under the withheld-claims rule |
| "If you are interested in joining our Trauma Care community…" | ✅ | Live, verbatim |
| anna.hickling@traumacare.org.uk · 01254 943158 | ✅ | Live. **A different number from the site-wide 0121 271 0380** — see below |
| "Download the full sponsorship brochure…" | ✅ | Live: "Click on the button below to download the full Sponsorship Brochure or continue reading to get the individual packages." Reworded so it does not depend on where the button sits |
| "Each package is a guideline only. Trauma Care will work with each sponsor to try and create a more bespoke offering." | ✅ | Live, verbatim |
| "Download all details" + the brochure PDF | ✅ | Live button and file, saved as `assets/docs/trauma-care-sponsorship-packages.pdf` |
| Platinum £25,000/year + nine benefits | ✅ | Live, verbatim |
| Gold £15,000/year + eight benefits | ✅ | Live, verbatim |
| Silver £5,000/year + four benefits | ✅ | Live, verbatim. "1/2 Page Advert" set as "Half-page advert" |
| "Free stand", "20 free… premium memberships" etc. | ✅ | **Kept as "free".** These are inclusions in a package that costs £5,000–£25,000, not a claim that something is free to the public, so the withheld-claims rule does not apply |
| Further-information paragraph and the two-working-day reply | ✅ | Live, verbatim, minus "click the button below and complete the pop-out form" — the form is now on the page, not in a pop-out |
| "Want to know more?" + form intro | ✅ | **From the pop-out the live page hides** until its button is clicked |
| Form fields: first name, last name, company, website, email, country code, phone | ✅ | The live field set, in the live order |
| Both consents, "Submit details" | ✅ | Live labels and button |
| Country-code list | ✏️ | Five entries stand in for the live list of ~200, as on the events page |
| "The need" quote, both paragraphs | ✅ | Live, verbatim. The live version is wrapped in quotation marks; set as a `blockquote` instead |
| Package eyebrows and section eyebrows | ✏️ | Ours |
| "Enquire about Platinum / Gold / Silver" | ✏️ | Ours. The live cards have no CTA at all — the only route is the shared pop-out button |

**❓ The live page is titled "Trauma Care - Home"** and opens with the
homepage's hero — "Welcome to TRAUMA CARE" and a "JOIN TODAY!" membership
button — before any sponsorship content. That looks like a page-builder
leftover rather than a decision: the title is wrong for search, and the first
call to action sells memberships on a page about corporate sponsorship. This
page carries a sponsorship hero instead. **Worth raising.**

**❓ The sponsor strip lists different partners on different pages.** This page
shows eight — Iqarus, Galen, Qualsafe, World Extreme Medicine, University of
Wolverhampton, ProTrainings, University of Suffolk and MedTree — while the
homepage, conference and events pages show six, only two of which overlap
(Galen and Qualsafe). The prototype's strip is one shared template part fed by
a single options-page repeater, so it cannot reproduce the divergence, and it
should not: the client needs to confirm one authoritative partner list.

**❓ Two office numbers.** Sponsorship enquiries go to 01254 943158; every other
page gives 0121 271 0380. Both are reproduced where the live site uses them.
Confirm whether the sponsorship number is still current.

**Brochure.** The live file is `Trauma_Care_Sponsorship_Pakcage.pdf` — the
typo is theirs. Saved under a corrected name. It is 1.7 MB and dated 2023 in
the CDN path; check it still reflects the packages above before launch.

---

## fundraise.html — Fundraise for Trauma Care

Source page: `traumacare.org.uk/support-us`, read 3 September 2026. Coverage
checked line by line, including both sections the live page hides: 22 of 22
distinct pieces of copy are present. The two hidden sections turned out to be
exact responsive duplicates of visible ones, not extra content.

| Content | Status | Source / note |
|---|---|---|
| "Fundraise for Trauma Care" | ✅ | Live page heading, and its `<title>` |
| "…and make a difference" | ✅ | Live strapline |
| "Get involved" | ✅ | Live section heading |
| "We have a long-standing, strong commitment…" through "…without your amazing support" | ✅ | Live, verbatim; the exclamation mark is dropped |
| "If you want to get involved, you can either become a member or donate below." | ✅ | Live, verbatim. "Become a member" is made a link, which it is not on the live page |
| "Simply subscribing, watching our live webinars and telling your friends and colleagues about us helps, too" | ✅ | Live, verbatim |
| "Donate today" + "Your donation can make a huge difference to the life of a trauma victim." | ✅ | Live, verbatim |
| "Donate here" → PayPal Giving Fund | ✅ | Live button and URL |
| "Donations are handled by PayPal." | ✏️ | Ours. Names the off-site destination, following the convention set in the header for external links |
| "Trauma Care AGM information" | ✅ | Live heading. **Live spells it "Infomation"** — corrected here |
| "The AGM is held virtually…" through "…download the 23/24 report below." | ✅ | Live, verbatim; "will be made available" set in the present tense |
| "2023/2024 report" + the file | ✅ | Live download, saved as `trauma-care-annual-report-2023-24.docx` |
| Hero CTAs — "Donate now", "Become a member" | ✏️ | Ours. The live hero has no actions at all |
| Section eyebrows — "Support us", "How you can help", "Accountability" | ✏️ | Ours |

**❓ The London Marathon places.** The live page's meta description reads
"Support Trauma Care by fundraising for us or donating through PayPal. **Four
London Marathon places available**", and its keywords include "Free London
Marathon Places". Nothing in the page body mentions the marathon. The header's
sub-line for this page — "Including our London Marathon places" — was written
from that metadata, so it is currently promising something the page does not
deliver. Either the places need writing up, or the sub-line and the metadata
need removing. **Needs a client ruling before launch.**

**Not carried over.** Three decorative backgrounds (a hexagon wallpaper, the
concrete texture, and a gradient) behind the live hero, Get Involved and AGM
bands. Sections are told apart by ground colour, as everywhere else in the
prototype.

**No sponsors strip.** The live fundraising page does not carry one, so this
page does not either.

---

## about-fellowship.html — The Trauma Care Fellowship Award

Source page: `traumacare.org.uk/fellowship-award`, read 3 September 2026.
Coverage checked line by line, including the three sections the live page
hides: 78 of 78 distinct pieces of copy are present.

| Content | Status | Source / note |
|---|---|---|
| "The Trauma Care Fellowship Award" | ✅ | Live page `<title>` and the heading of its hidden intro |
| "Trauma Care Fellowship" (hero) | ✅ | Live hero |
| "Established in 2020 to recognise exceptional contributions to trauma victim care" | ✅ | Live, verbatim |
| "Criteria include academic and clinical excellence, innovation, and service development." | ✅ | **From the hidden intro.** The visible one reads "The criteria includes…" — the hidden version's grammar is correct, so it is the one used |
| "The award is not limited by borders… truly outstanding." | ✅ | **From the hidden intro only.** The visible intro drops this paragraph entirely |
| "Each fellow will receive a bronze of the famous medieval 'Wound Man', specially commissioned by Trauma Care." | ✅ | Live, verbatim |
| Wound Man photograph | ✅ | Their own image, already in the prototype from the events page |
| "Trauma Care Fellows" | ✅ | Live section heading |
| "Our Trauma Care Fellows, starting from 2020." | ✅ | **From the hidden variant.** The visible one says "Our latest Trauma Care Fellows", which is wrong for a list that goes back to 2020 |
| Dr Roderick MacKenzie, 2025 — four paragraphs | ✅ | Live, verbatim. "the full spectrum presentations" corrected to "the full spectrum **of** presentations" |
| Professor Timothy J Coats, 2024 — three paragraphs | ✅ | Live, verbatim. "Bart and The London" corrected to "Barts and The London"; the run-on "Professor. Timothy J Coats. Professor of Emergency Medicine, University of Leicester. The UK." is set as a role line |
| @tjcoats | ✅ | Live text. Made a link to x.com — the live page leaves it as plain text |
| Mr Martin P Griffiths, 2023 — four paragraphs | ✅ | Live, verbatim. Post-nominals moved out of the first sentence into a role line |
| Professor Sir Keith Porter, 2023 — five paragraphs | ✅ | Live, verbatim |
| Professor Karim Brohi, 2022 — five paragraphs | ✅ | **From a hidden section.** Post-nominals moved to a role line; Aftertrauma.org made a link |
| Professor David A Alexander, 2021 — four paragraphs | ✅ | **From a hidden section.** "Sirkorsky" corrected to "Sikorsky"; "(Hon)FRC Psych" set as "(Hon)FRCPsych" |
| Professor David Nott OBE, 2020 — five paragraphs | ✅ | **From a hidden section** |
| All seven portraits | ✅ | Their own images from the live page, renamed by fellow. Professor Karim Brohi's is served from the `/traumacare/` CDN prefix rather than `/traumacareuk/` — see the note below |
| Section eyebrows — "About us", "The award", "Recipients" | ✏️ | Ours |
| "Meet the fellows" (hero CTA) | ✏️ | Ours. The live hero has no action |

**Three of the seven fellows are only in hidden sections.** Brohi (2022),
Alexander (2021) and Nott (2020) sit in a block the live page sets to
`display: none`, so the live site currently shows four fellows and hides three.
All seven are on this page, newest first. **Ask the client whether the earlier
fellows were hidden deliberately** — losing three award recipients from a page
about the award looks like an accident.

**The intro is stitched from both versions.** The live page has two copies: a
visible one of two paragraphs, and a hidden one of three with a heading and
better grammar. The hidden one is a superset, so it is the one used.

**Portraits come from two CDN prefixes.** Most sit under
`d11n7da8rpqbjy.cloudfront.net/traumacareuk/`, but Professor Karim Brohi's is
under `/traumacare/`. Rebuilding a URL from the filename and assuming one prefix
returns 403 — which happened once during this build and was wrongly reported as
a missing file. **Every portrait on the live site loads.**

**Not carried over.** Two decorative stock backgrounds behind the live hero and
fellows band. Sections are told apart by ground colour, as everywhere else.

**No sponsors strip.** The live fellowship page does not carry one.

---

## about-team.html — The Trauma Care Team

Source page: `traumacare.org.uk/ourpeople`, read 3 September 2026. Nothing on
this page is hidden — every section renders. Coverage checked line by line:
93 of 93 distinct pieces of copy are present, across twenty people.

| Content | Status | Source / note |
|---|---|---|
| "The Trauma Care team" | ✅ | Live page heading and `<title>` |
| "Find out who makes up the team behind Trauma Care, and how their backgrounds contribute to our mission." | ✅ | The live page's own meta description; "impressive" dropped as self-praise |
| Section nav — Patrons, Trustees, Management, Ops Team | ✅ | The live secondary nav, same labels and order |
| Five patrons: Etherington, Hodgetts, Moore, Ryan, Ormrod | ✅ | Live, verbatim |
| Nine trustees: Greaves, Porter, Coats, Tovey, Ledbury, Griffiths, Burnell, Cottey, Willis | ✅ | Live, verbatim |
| Five on the management board: Surendra Kumar, Garner, Philpotts, Porter, Lote | ✅ | Live, verbatim |
| Lesley Cotterhill, Administration Assistant | ✅ | Live, verbatim |
| Office contact — admin@traumacare.org.uk, 0121 271 0380 | ✅ | Live. The number is spaced as it is elsewhere on the site; live prints "0121 2710380" |
| Dr Surendra Kumar's four current roles | ✅ | Live, set as a list rather than a run of hyphenated lines |
| "The need" quote | ✅ | The same block as the sponsorship page; live runs it on both |
| Section eyebrows — "Our supporters", "Governance", "Running the charity", "The office" | ✏️ | Ours |
| "Sir Keith is also a co-founder of the charity and a trustee — see his biography above." | ✏️ | Ours. Sir Keith appears twice on the live page with the biography printed once and the second entry left empty |

**Spelling and grammar corrected**, all logged here rather than silently:
"Middlesborough" → Middlesbrough; "Brimingham" → Birmingham; "Bart and The
London" → Barts and The London; "St. Bartholomew's" → St Bartholomew's;
"Scottish Veterans Residents" → Scottish Veterans Residences; "citizenAID"
capitalised as the charity styles it; "Queens Commendation" → Queen's
Commendation. Post-nominals and job titles moved out of first sentences into a
role line, as on the fellowship page.

**Portraits are CSS backgrounds, and the CDN has two prefixes.** Each portrait
is a `div.background-item` carrying its file in a `data-bg` attribute, applied
to `style` by a lazy loader — the rendered DOM contains no `<img>` for them at
all. Seven of them (Etherington, Hodgetts, Moore, Ormrod, Greaves, Ledbury and
Garner) sit under `/traumacare/`, while the rest are under `/traumacareuk/`.
Rebuilding those URLs against the wrong prefix returns 403, which happened once
during this build and was wrongly recorded here as seven broken images. **They
are not broken.** All sixteen real portraits are in place.

**Three people have no photograph**, and that is the live site's own state: it
shows a generic `person.png` for Claire Burnell, Laura Cottey and Kelly
Philpotts. Those three use the prototype's `portrait-placeholder.svg`, with an
empty `alt` so nothing is passed off as a picture of them.

**Lesley Cotterhill's portrait was supplied separately** and is not on the live
site, which shows no image for her at all. Saved as `lesley-cotterhill.jpg`
(200 × 200, 10 KB — small enough to ship untouched). ✏️ **Confirm its source
and that it is cleared for use before launch.**

**"Profile will be available soon"** is live copy for two trustees, kept
verbatim. It has been on the site long enough to be worth chasing.
