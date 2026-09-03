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
| "All of our CPD webinars are **completely free to attend**" | Dropped; the access statement around it is kept |
| "members will receive a **free** CPD Certificate" | "members receive a CPD certificate" |
| "Catch-up with previous recordings **for free**" | "Catch up with previous recordings" |
| "Download the latest poster **FOR FREE!**" | "The latest CPD poster" |
| "our posters are completely **free** to download" | "our posters are updated regularly" |
| "your upcoming **free** CPD presentations / events" (×2) | "your upcoming CPD presentations / events" |
| "Download the latest poster **FOR FREE!**" (posters page) | "The latest poster" |
| "our webinar posters are **free** to download" | "our webinar posters are updated regularly" |
| "Catch-up with previous recordings **FOR FREE!**" | "Catch up with previous recordings" |
| "**There are no fees** and you can opt-out at any time" | "You can opt out at any time" |
| "**Free** CPD Certificates" (membership benefits) | "CPD certificates" |
| "**Free** Automated CPD Certificates" (each membership tier) | "Automated CPD certificates" |

**Access statements are kept.** "Open to all" and "public recordings" describe
who may attend, not what it costs — a separate fact, and one both documents
support through the non-member YouTube route (spec §2.3, §17).

**`webinars.html` is the page this ruling costs the most.** Its live `<title>`
is *Trauma Care Free CPD Webinars* and the word recurs in six places on the
page. Worse, the poster PDF the page links to — and the preview image we ship
with it — carry *Free CPD Webinars* in the artwork itself, so the page and its
own download currently disagree. **Settle this before that page is signed off.**

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
landing pages named in requirements §1 (Membership, Courses, Donations) &mdash;
all three are now built, leaving only Campaign &mdash; and
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

---

## about-ryan-lecture.html — The Ryan Lecture

Source page: `traumacare.org.uk/ryanlecture`, read 3 September 2026. Nothing on
this page is hidden. Coverage checked line by line: 47 of 47 distinct pieces of
copy are present, including all twenty-one lecturers.

| Content | Status | Source / note |
|---|---|---|
| "The Ryan Lecture" | ✅ | Live page heading and `<title>` |
| "Given annually at the Trauma Care conference by a distinguished speaker invited by the Trauma Care Council." | ✅ | Live, verbatim, promoted to the hero as the lead |
| Opening paragraph — "established to mark the lifetime contribution…" | ✅ | Live, verbatim |
| Professor Ryan's military career | ✅ | Live, verbatim. "included services in" → "included service in" |
| Leonard Cheshire professorship, 1995–2007 | ✅ | Live, verbatim |
| Maryland and St George's appointments | ✅ | Live, verbatim |
| Society of Apothecaries, RSM, OBE 2011 | ✅ | Live, verbatim. Quotation marks around the diploma title dropped |
| Portrait of Professor Ryan | ✅ | Their own image, already in the prototype from the events page |
| "The Ryan Lecturers", 2005–2025 | ✅ | Live, verbatim — all twenty-one, in year order |
| "The need" quote | ✅ | The same block the sponsorship and team pages carry |
| "Named for a founding chairperson" (section heading) | ✏️ | Ours. The live page repeats "The Ryan Lecture" as its only heading |
| Section eyebrows — "About us", "The lecture", "Every year since 2005" | ✏️ | Ours |
| Hero CTAs — "See every lecturer", "The 29th Annual Conference" | ✏️ | Ours. The live page has no actions |

**❓ The live meta description says the lecture is "in memory of" Jim Ryan.**
The full line is *"…in memory of one of Trauma Care's founders - Professor Jim
Ryan"*. **Professor Ryan is alive**: he is listed as a current patron on the Our
People page, and he gave the first Ryan Lecture himself in 2005. The page body
gets it right — the lecture marks his *lifetime contribution* — so that is the
wording used here, and the meta description is not reproduced. **The live
description needs correcting.**

**Two spellings of the same lecturer.** The roll lists "Mr Steve Mannion" for
2006 and "Mr Steven Mannion" for 2008. Both are reproduced as published; one of
them is presumably wrong.

**Not carried over.** Two decorative stock backgrounds behind the live intro and
lecturers bands. Sections are told apart by ground colour, as everywhere else.

---

## contact.html — Contact us

Source page: `traumacare.org.uk/Contact`, read 3 September 2026. Nothing on this
page is hidden. Coverage checked line by line: 43 of 43 distinct pieces of copy
are present.

| Content | Status | Source / note |
|---|---|---|
| "Contact us" | ✅ | Live page heading and `<title>` |
| "The Trauma Care team is here to support you with all your questions." | ✅ | Live, verbatim; the exclamation mark is dropped |
| "The best way to contact us is via email. We aim to respond to all enquiries within 48 working hours." | ✅ | Live, verbatim |
| admin@traumacare.org.uk | ✅ | Live |
| 0121 271 0380 | ✅ | Live prints it as "0121 2710380"; spaced here as it is everywhere else on the site |
| Opening hours — Mon/Tue 09.00–17.00, Wed closed, Thu/Fri 09.00–17.00 | ✅ | Live, verbatim |
| Postal address — Trauma Care UK, Office 5:19, 156 Great Charles Street Queensway, Birmingham, B3 3HN | ✅ | Live, verbatim. **Not repeated in the page body** — the footer carries it on every page, and the map now stands in its place |
| "FAQs" and the five questions | ✅ | Live, verbatim as questions; numbering dropped because the accordion supplies the order |
| FAQ 1 — previous CPD webinars | ✅ | Live, verbatim |
| FAQ 2 — becoming a member | ✅ | Live. **Live has a typo, "Trauma Carea"**, corrected. The bare URL `traumacare.org.uk/members` becomes a link to the membership page, and the doubled full stops are cleaned up |
| FAQ 3 — another way to support | ✅ | Live, verbatim. "Fundraising page" becomes a real link |
| FAQ 4 — changed postal address | ✅ | Live, verbatim. "MEMBER LOGIN" set as **Member log in**, which is what our header button says |
| FAQ 5 — forgotten password | ✅ | Live, verbatim |
| Card headings — Email, Phone, Opening hours, Postal address | ✏️ | Ours. The live page runs the details together in one block |
| "The quickest way to get an answer…" and "The office is staffed four days a week…" | ✏️ | Ours, restating facts from the copy beside them |
| Hero CTAs — "Email the office", "Read the FAQs" | ✏️ | Ours. The live page has no actions |

**❓ The FAQ intro points at a chat widget that this prototype does not have.**
Live: *"If the answer to your question is not listed below, then please use the
floating chat/support function to the right."* That floating widget is a Kartra
feature, and there is no equivalent in the prototype. The sentence now ends
"please email the office", linked. **If the client wants live chat on the new
site, it has to be specified** — it is not in the requirements or the spec.

**Google Maps embed added.** The contact page carries a Google Maps iframe of
the office, supplied by the client, sitting beside the postal address. Two
things about it:

- It is **third-party content**. The frame loads Google resources and sets
  Google cookies as soon as the page renders, before any consent is given.
  The site already has a cookie policy and a cancellation policy; **this embed
  should be gated behind cookie consent before launch**, or replaced with a
  static map image that loads nothing until clicked.
- The supplied embed code had **no `title`**, which leaves screen-reader users
  with an unnamed frame. One has been added naming the office and street.

**Instructions that describe the old navigation.** Three answers tell the reader
to use the "Membership" tab, the "Support Us" drop-down, or the "MEMBER LOGIN"
option. Those labels still match the new header, so the copy stands — but they
are the kind of instruction that breaks silently when a menu is renamed. Worth
replacing with links at some point; two of the three already carry one here.

---

## academic-partners.html — Academic partners

Source page: `traumacare.org.uk/academicpartners`, read 3 September 2026.
Nothing on this page is hidden. Coverage checked line by line: 28 of 28
distinct pieces of copy are present.

| Content | Status | Source / note |
|---|---|---|
| "Academic partners" | ✅ | Live page heading and `<title>` |
| "…dedicated to advancing and providing access to essential trauma education **at the lowest possible cost**" | ✅ | Live reads "either for free or at the lowest possible cost". "For free" removed under the withheld-claims rule |
| "forged partnerships with multiple academic institutions…" through "…undergraduate students" | ✅ | Live, verbatim |
| "Find out more" | ✅ | Live button. Anchors to the benefits section, as it does on the live page |
| "Become an academic partner" | ✅ | Live section heading, set in sentence case |
| "The benefits below are guaranteed for every academic partner…" | ✅ | Live, verbatim; the exclamation mark is dropped |
| Discounted student memberships — £10 per student, free tutor memberships | ✅ | Live, verbatim. **"Free" kept**: these are inclusions in a paid partnership, not a public pricing claim — the same reading applied to the sponsorship packages |
| Educational materials | ✅ | Live, verbatim |
| Automated CPD certificates | ✅ | Live reads "**free**, automated CPD Certificates". "Free" removed — this is the exact phrase already in the withheld-claims table |
| Accredible | ✅ | Live, verbatim |
| Access to 100+ recorded webinars | ✅ | Live, verbatim. "over 100+" corrected to "over 100" |
| "Interested? Please email admin@traumacare.org.uk to find out more" | ✅ | Live closing line, set as a CTA band |
| Section eyebrows — "Our partners", "For institutions" | ✏️ | Ours |
| "Email us" (hero CTA) | ✏️ | Ours. The live hero has only "Find Out More" |
| Four benefit icons | ✏️ | Ours, drawn as inline SVG. They answer the live page's Font Awesome set — `fa-user-plus`, `fa-book`, `fa-certificate`, `fa-laptop` — with the same subjects rather than the same glyphs: person-plus, open book, certificate with a seal, screen with a play button. Decorative, so `aria-hidden` |

**No partner logos on this page.** The live page names no institution and shows
no logo — it is an offer page, not a list of who has taken it up. The sponsors
strip elsewhere in the prototype does carry three universities (Plymouth,
Gloucestershire and, on the live sponsorship page, Wolverhampton and Suffolk).
**Worth asking whether this page should name its academic partners** — a page
about the scheme with no examples is a weaker pitch than it needs to be.

**No sponsors strip.** The live academic partners page does not carry one.

**Not carried over.** Two decorative stock backgrounds. Sections are told apart
by ground colour, as everywhere else.

---

## webinars.html — Trauma Care CPD webinars

Source page: `traumacare.org.uk/webinars-2026`, read 3 September 2026.
Read at DOM level, so the collapsed detail panel and the two subscribe modals
are included. Coverage checked line by line: 40 of 40 distinct pieces of copy
are present.

| Content | Status | Source / note |
|---|---|---|
| "Trauma Care CPD Webinars" | ✅ | Live hero heading. The live `<title>` is "Trauma Care **Free** CPD Webinars" — see the flag below |
| "JOIN TODAY!" | ✅ | Live hero button, set in sentence case |
| "a fantastic way to learn from the comfort of your own home" | ✅ | Live, verbatim |
| "You do not need to become a member to attend, but members will receive a … CPD Certificate, sent automatically to you at the conclusion of the event" | ✅ | Live. "Free" removed before "CPD Certificate" — the exact phrase already in the withheld-claims table |
| "All of our CPD webinars are completely free to attend" | 🚫 | Withheld. The access statement around it is kept; only the pricing claim is dropped |
| "You can sign up for any of our upcoming live events below" | ✅ | Live, verbatim |
| "When you register, please use the same email address you use for your Trauma Care membership" | ✅ | Live, verbatim |
| "Non-members can purchase a certificate during the presentation" | ✅ | Live, verbatim |
| "Members receive a … CPD Certificate automatically within 24 hours after the conclusion of each event" | ✅ | Live. "Free" removed |
| "Health in Motorsport" / "Medical lessons from the Isle of Man TT racing" | ✅ | Live card title and subtitle |
| "Date: 16/07/2026" / "Time: 20:00 GMT" | ✅ | Live. Rendered as "16 July 2026" in a `<time datetime="2026-07-16">` |
| "Motorsport gives a unique opportunity to learn about the hyper-acute phase of injury and to improve treatment. Gareth has been TT medical director for many years, as well as being one of the lead clinicians with the London HEMS service." | ✅ | Live, verbatim, from inside the collapsed *View details* panel |
| "Free CPD Certificate for members" | ✅ | Live card note. "Free" removed |
| Card image | ✅ | Live `12996_17839419226LKIsleofManTT.jpg` → `assets/img/webinars/health-in-motorsport.jpg` |
| "More webinars coming soon - check back regularly" | ✅ | Live, verbatim |
| "Catch-up with previous recordings…" / "There are over 200 more webinars available in the Member's Portal, too!" | ✅ | Live. "For free" removed from the first line |
| "PAST WEBINARS" → YouTube channel | ✅ | Live link, real URL |
| "DOWNLOAD EDITION 30" | ✅ | Live button. The PDF is shipped at `assets/docs/cpd-poster-edition-30.pdf` (3.4 MB) |
| "Download the latest poster FOR FREE!" | 🚫 | Withheld. Replaced by "The latest CPD poster" |
| "Our webinar posters are … updated regularly. Each edition highlights our upcoming … presentations and any events that are soon to be taking place. Download the latest version … and share it with your colleagues and friends, so you all stay in-the-know about our upcoming … CPD events!" | ✅ | Live. Three instances of "free" removed from this paragraph |
| "You can also download previous version of our posters" | ✅ | Live. Typo corrected to "versions" |
| "View Previous Posters" | ✅ | Live button. Stub — `cpd-posters.html` is not built |
| Poster preview image | ✅ | Live `35385327691930_image.png` → `assets/img/webinars/cpd-poster-edition-30.jpg` |
| "Subscribe to Trauma Care" / "Never miss another webinar!" | ✅ | Live, from the hidden subscribe modal `_qpd7i96lo` — this page's own copy, not the events page's |
| "GET IT NOW!" | ✅ | Live modal submit label, set in sentence case |
| Section eyebrows — "Webinars", "Live sessions", "Catch up", "Download", "Newsletter" | ✏️ | Ours |
| "See what is coming up" (hero CTA) | ✏️ | Ours. The live hero has only *JOIN TODAY!* |
| "Browse the video library" | ✏️ | Ours. The live page names the member's portal in prose but gives no link to it |

### Flags

**Two different Zoom registrations for one webinar.** The visible *Register*
button points at `WN_lQAowwPaQBaQ8vPxkYK0EQ`; the *Register via Zoom* link
inside the collapsed detail panel points at `WN_2bSMuE7MTaKwBYF1pA4CZQ`. The
prototype uses the visible one, on the grounds that it is the link an attendee
actually clicks. **Someone at the charity needs to check which registration has
the sign-ups** — if both have been clicked, the attendee list is split across
two Zoom events.

**The only "upcoming" webinar is in the past.** It is dated 16 July 2026 and
was still listed as upcoming when the page was read on 3 September 2026, seven
weeks later. Nothing in the prototype hides a past event either — a date-ordered
query fixes this on the new site, but until then the live page is telling
visitors to register for something that has already happened.

**This page is the one most affected by the withheld-"free" ruling.** The
word appears in the live `<title>`, the hero, the certificate note, the card,
the catch-up line and four times in the poster paragraph. Every one is stripped
here. **Get the client's ruling before this page is signed off** — if the
webinars genuinely are free to attend, that is the single strongest thing the
page has to say and it is currently unsaid.

**The poster artwork contradicts the ruling.** `cpd-poster-edition-30.pdf` and
the preview image we ship both read *Free CPD Webinars* across the top, and the
poster's own footer reads "become a member of Trauma Care and receive free CPD
Certificates for attending". The page copy and the asset it links to therefore
disagree. Either the ruling is lifted or the poster is re-cut; it cannot stay
as it is.

**Not carried over.** Four decorative stock backgrounds (`AdobeStock_314859869`,
`AdobeStock_309745900`, `AdobeStock_331412577`, `white_concrete_wall`).
Sections are told apart by ground colour, as everywhere else.

**No sponsors strip.** The live webinars page does not carry one.

---

## cpd-posters.html — CPD posters

Source pages: `traumacare.org.uk/CPD-Posters` **and**
`traumacare.org.uk/past-cpd-posters`, both read 3 September 2026. The two are
merged into one page — see `template-map.md`. Coverage checked line by line:
85 of 85 distinct pieces of copy, and all 30 editions, are present.

| Content | Status | Source / note |
|---|---|---|
| "Trauma Care CPD Posters" | ✅ | Live heading of the first page |
| "Download the latest poster FOR FREE!" | 🚫 | Withheld. Replaced by "The latest poster" |
| "DOWNLOAD EDITION 30" | ✅ | Live button, twice. The PDF ships at `assets/docs/cpd-poster-edition-30.pdf` |
| "Our webinar posters are … updated regularly. Each edition highlights our upcoming … CPD presentations and events. Download the latest version … and share it with your colleagues and friends so you can stay informed!" | ✅ | Live. Two instances of "free" removed |
| "View Previous Posters" | ✅ | Live button. Points at `#archive` on the same page rather than a second page |
| "You can also download previous versions of our posters, and use them as a checklist for CPD catch-up" | ✅ | Live, folded into the archive lead |
| "Don't forget to join our mailing list to stay up-to-date with our latest event announcements and exclusive offers" | ✅ | Live, folded into the subscribe lead |
| "VIEW UPCOMING WEBINARS" | ✅ | Live button, wired to `webinars.html` |
| "Previous CPD Posters" / "Previous CPD Posters are available to download below" | ✅ | Live, from the archive page |
| "You can use these posters as a reminder of which webinars you still need to watch in our video library" | ✅ | Live, verbatim |
| "We have some previous webinars available on our YouTube Channel and our entire back catalogue available in the Members Area!" | ✅ | Live, verbatim |
| "Catch-up with previous recordings FOR FREE!" | ✅ | Live. "For free" removed |
| "PAST WEBINARS" → YouTube channel | ✅ | Live link, real URL |
| Thirty poster editions, their numbers and years | ✅ | Live. Every cover downloaded; Edition 30's PDF shipped, the other 29 linked to the charity's file store |
| "Subscribe to Trauma Care to stay up-to-date with the latest news and details of our upcoming CPD webinars and events." | ✅ | Live, from the hidden subscribe modal |
| "There are no fees and you can opt-out at any time!" | ✅ | Live. "There are no fees" removed under the withheld-claims rule; "you can opt out at any time" kept |
| "Subscribe Now" | ✅ | Live modal submit label, set in sentence case |
| "Our Sponsors and Partners" + blurb | ✅ | Live. The shared sponsors template part; this page carries one, unlike the webinars page |
| Section eyebrows — "Webinars", "Current edition", "The back catalogue", "Newsletter" | ✏️ | Ours |
| "Print one for the mess room, the coffee room or the noticeboard…" | ✏️ | Ours. The live copy says to share the poster but never says how it is meant to be used |
| "Catch up with previous recordings" as a section | ✏️ | Ours in shape only — the heading and both destinations are live copy from the archive page |

### Flags

**Edition 13's download button is dead on the live site.** Its "DOWNLOAD NOW!"
link is `javascript: void(0);`. The PDF exists on the CDN and the card's own
markup contains the correct URL, so the button has simply lost its href. Our
card links the real file.

**Edition 10 is a JPEG, not a PDF.** `…Trauma_Care_Upcoming_Free_CPD_Webinars.jpg`
is served as the download for that edition. Reproduced as-is and labelled PDF
on the live site; ours labels it PDF too, which is wrong for that one card.
**Worth re-cutting that edition as a PDF** rather than papering over it in
markup.

**Edition and file do not always match.** Edition 11 is labelled 2022 but its
file is `Trauma_Care_Monthly_Poster_finished_29.09.20.pdf` — the September 2020
artwork, which is also what Edition 12 and Edition 16 point at variants of.
Edition 15 is labelled 2023 and sits between two 2022 editions. Somebody should
open the back catalogue and check which file belongs to which edition before it
is imported into the media library; the prototype reproduces the live pairings
exactly so the errors stay visible.

**Both CDN prefixes again.** Editions 12–15 and the 2021 covers come from
`/traumacare/`; everything else from `/traumacareuk/`. This is the same split
that produced the earlier false "missing images" report — see the note on the
team page. Any future asset sweep must read the URL from the markup rather than
rebuild it from a filename.

**Every cover carries the withheld claim.** All thirty posters have *Free CPD
Webinars* set across the masthead, and most add "become a member of Trauma Care
and receive free CPD Certificates for attending" at the foot. The page's copy
strips those claims; the artwork it displays thirty times does not. This is the
same contradiction flagged on the webinars page, at thirty times the volume,
and it is the strongest practical argument for **getting the client's ruling on
"free" before either page is signed off**.

**Not carried over.** Four decorative stock backgrounds and the Elfsight logo
showcase widget, which renders the sponsor logos on the live page and leaves
"Panel only seen by widget owner" in the DOM. Our sponsors strip is the shared
template part.

---

## membership.html — Membership

Source page: `traumacare.org.uk/members`, read 3 September 2026. Read at DOM
level, so the hidden subscribe modal is included. Coverage checked line by
line: 57 of 57 distinct pieces of copy are present.

| Content | Status | Source / note |
|---|---|---|
| "Trauma Care Membership" | ✅ | Live heading |
| "The key to a successful future for Trauma Care lies in its members" | ✅ | Live strapline. Marked up as the quotation it is; the same line already runs on the homepage |
| "Our members are the backbone of Trauma Care. Without you, we simply wouldn't exist." | ✅ | Live, verbatim |
| "By joining us, not only do you receive some fantastic benefits, but you also actively contribute to our mission of providing affordable education to all healthcare professionals." | ✅ | Live. "Fantastic" toned to "genuinely useful", matching the homepage wording of the same sentence |
| "We aim to help you help those in need." | ✅ | Live, verbatim |
| Four member benefits | ✅ | Live, verbatim, except "**Free** CPD Certificates" — see the note below |
| "Membership Plans" / "Become a member of the UK's largest trauma network." / "We offer a variety of membership plans to suit your educational needs." | ✅ | Live, verbatim. "A variety" reads oddly over two cards — **reword if the two-tier decision stands** |
| Student — audience, four bullets, £3 / month, "Student Membership" | 🚫 | **Dropped.** The requirements doc specifies two tiers, RHP and NRHP; the live site has three. Settled 3 September 2026 in favour of the requirements doc — see `content-audit.md` |
| Registered Healthcare Professional — audience, four bullets, £8 / month, "Standard Membership" | ✅ | Live, verbatim |
| Non-Registered Healthcare Professional — audience, four bullets, £3 / month, "NRHP Membership" | ✅ | Live, verbatim |
| "We are delighted that membership is growing at a very healthy rate…" through "…as members." | ✅ | Live, verbatim |
| "Trauma Care is unique. No other organisation brings together such a wide range of professionals." | ✅ | Live, verbatim, set as the pull quote |
| "Our aims are clear: to improve patient care through education, publishing and research. Trauma Care deserves your support, and we want to support you." | ✅ | Live, verbatim |
| "Professor Colonel Ian Greaves, Trauma Care Chairman" | ✅ | Live attribution |
| "TRAUMA JOURNAL" and its description | ✅ | Live, with the duplicated word repaired — see the note below |
| "Become a Member to receive your quarterly copy…" | ✅ | Live, verbatim |
| "FIND OUT MORE" → `journals.sagepub.com/home/tra` | ✅ | Live link, real URL |
| "JOIN NOW" | ✅ | Live button. Anchors to `#plans`, as it does on the live page |
| Journal cover image | ✅ | Live `Trauma_Care_Journal.png` → `assets/img/membership/trauma-journal-cover.jpg` |
| "Subscribing to Trauma Care is completely free…" | 🚫 | Withheld, as on the events page |
| "By subscribing to Trauma Care, you will stay informed on all the news, latest events, webinars and courses. We will also keep you updated on all important news and services." | ✅ | Live, from the hidden subscribe modal |
| "We respect your privacy. Your data will not be shared or sold." | ✅ | Live, from the same modal. Kept — it is a data statement, not a pricing claim |
| "SIGN UP" | ✅ | Live modal submit label, set in sentence case |
| Section eyebrows — "Membership", "From the chairman", "Included with membership", "Newsletter" | ✏️ | Ours |
| "See the plans" (hero CTA) | ✏️ | Ours. The live hero has no button at all |
| "Not ready to join?" (subscribe lead) | ✏️ | Ours, to explain why a subscribe form sits under three paid plans |

### Flags

**"Free CPD Certificates" is stripped here, and the rule needs a ruling.**
Inside a £3-a-month card, "free" means "included in what you already pay" —
the same reading that **kept** "free stand" and "20 free premium memberships"
in the sponsorship packages. But the sponsorship case is different in a way
that matters: there, "free" marks an item that would otherwise be **charged on
top of** the package. Nothing in a membership tier is charged on top, so the
word adds nothing and the phrase is already in the withheld table. Stripped
here and on `academic-partners.html`, kept on `corporate-sponsorship.html`.
**That distinction is ours, not the client's — get it confirmed.**

**The Student tier is gone, and its members are not.** The page now shows RHP
and NRHP, per the requirements doc. But students are paying £3 a month on the
live site today, and removing a card does not cancel a subscription. Someone
has to decide whether they move to NRHP at the same price or are grandfathered,
**before the Beacon migration runs**, not after.

**"Access" versus "Full Access" to the video library.** The £8 tier says "Full
Access to Video Library"; both £3 tiers say "Access to Video Library". Nothing
on the page explains the difference, and it is the only benefit that separates
the tiers apart from the audience each is for. Reproduced exactly. **Either it
is a real restriction and needs stating, or it is a stray word and the £8 tier
is currently unsellable on its own merits.**

**The button labels do not match the cards they sit in.** "Standard Membership"
sits under "Registered Healthcare Professional", and "NRHP Membership" expects
the reader to have kept the acronym from the heading above it. These are
internal product names showing through. Reproduced as-is; **worth renaming to
match the cards**.

**The journal description is garbled on the live site.** It reads "all aspects
of trauma care prevention: prevention through prehospital management, accident
and emergency medicine…". SAGE's own description reads "all aspects of trauma
care are included: prevention, prehospital management, accident and emergency
medicine…". Ours restores the list.

**The journal cover is from July 2020.** Volume 22, issue 3 — six years old, on
a page advertising a quarterly journal. Shipped as-is with the volume and issue
in the caption, so the staleness is visible rather than hidden. In WordPress
the cover is a single image field on the block, replaced each quarter.

**The homepage promises annual payment; this page does not offer it.**
`index.html` says "Pay monthly or annually"; the live membership page shows
only monthly prices and the Kartra checkouts are monthly price points. One of
the two is wrong.

**Not carried over.** Three decorative stock backgrounds. No sponsors strip —
the live membership page does not carry one.

---

## courses.html — Courses

**No source page.** `/courses`, `/education`, `/training`, `/fit` and
`/foundations-in-trauma` all return 404 on traumacare.org.uk, checked
3 September 2026. This page is built to requirements §1, which names Courses as
one of four flexible landing pages.

That makes its provenance rule the opposite of every other page here: instead
of checking that nothing from a source page was left out, the check is that
**nothing on this page was invented**. Every factual claim is quoted from a
page already built from the live site. A script verifies all 29 and names the
source for each.

| Content | Status | Source / note |
|---|---|---|
| Foundations in Trauma Course — status, body, audience, eight topics, faculty photograph | ✅ | The live events page, via `events.html#fit-course`. Reproduced word for word |
| "Trauma Care was founded in 1996 to address the need for commonly agreed standards…" | ✅ | The mission statement, live on every page footer |
| "a universally accepted standard of practice for trauma patients" | ✅ | `academic-partners.html`, live copy |
| "advancing and providing access to essential trauma education at the lowest possible cost" | ✅ | `academic-partners.html`. "Either for free or" already removed under the withheld-claims rule |
| "forged partnerships with multiple academic institutions… more readily available to undergraduate students" / "£10 per student" / tutors join at no charge | ✅ | `academic-partners.html`, live copy |
| "Members of Trauma Care receive CPD certificates and large discounts on ticket prices" | ✅ | `events.html`, live copy |
| "No other organisation brings together such a wide range of professionals" | ✅ | The chairman, on `membership.html` |
| Conference streams named in the *Other ways to learn* card | ✅ | The live conference programme, via `conference.html` |
| Webinar certificate and "over 200 more" | ✅ | `webinars.html`, live copy |
| "We write and publish our own books and manuals" / "copies for their library" | ✅ | `academic-partners.html`, live copy |
| "Every session is practical or quiz-based — no lecture-only days" | ✏️ | Ours, generalised from the FIT line "Every aspect of the course is practical or quiz-based" |
| "The patient journey is the syllabus" | ✏️ | Ours, restating the FIT description |
| Hero lead, section eyebrows, "Tell me when it returns", "Register interest" | ✏️ | Ours |
| Register-interest form | ✅ | The same six fields and two consents as every other subscribe form on the site |

### Flags

**The charity publishes one course, and it is postponed.** A page called
Courses that offers nothing to book is a weak page, and no amount of layout
fixes that. The honest options are: bring the FIT Course back with dates, or
widen the page to cover the education the charity *does* run — which is what
the *Other ways to learn* band does as a stopgap. **This is a content decision,
not a design one, and it needs the client.**

**"Returning in 2026" is running out of road.** The live events page says "keep
an eye out for the return of the FIT Course in 2026", and it is already
September 2026 with no dates published. The same sentence appears on this page
because it is the charity's own. It needs updating or removing before launch.

**No pricing.** The live site never states what the FIT Course costs, so
neither does this page. If the course returns, the page needs a price, an
audience-specific discount line, and a booking route — probably the same
Ticket Tailor path the conference uses.

**Courses is not in the primary navigation.** It was, and is, a footer-only
link, because the live IA has no Education section. If the requirements' four
landing pages are meant to be reachable, the header needs an Education parent —
which is a change to the live IA and needs raising with the client.

---

## donate.html — Donate

**No source page.** The live site has no dedicated donation page — its only
donation route is a single outbound PayPal Giving Fund link, reused on
`fundraise.html`. This page is built to requirements §1, which names Donate as
one of four flexible landing pages, and closes the specific gaps content-audit
finding #4 named: "no recurring giving, no Gift Aid capture, no suggested
amounts, no impact framing, no thank-you page".

As with `courses.html`, the provenance rule is inverted: instead of checking
that nothing from a source page was left out, the check is that **nothing on
this page was invented**. A script verifies 16 factual phrases against the
page each is quoted from.

| Content | Status | Source / note |
|---|---|---|
| "Every donation funds education for the people who treat trauma patients" | ✅ | `index.html`, the homepage donate cross-sell card, live copy |
| "We know you might not always be able to commit to a regular payment… any donation is gratefully received, and each one contributes directly to our mission of providing quality education" | ✅ | `index.html` donate band. "Quality free education" already reads "quality education" there under the withheld-claims rule |
| "Give once or monthly" | ✅ | `index.html` donate card and band, live copy |
| "Add Gift Aid and we receive 25% more, at no extra cost to you" | ✅ | `index.html` donate band. The 25% figure is the standard HMRC rate, not the charity's own claim |
| PayPal Giving Fund URL and "Donations are handled by PayPal" | ✅ | `fundraise.html`, live link and copy |
| "Essential trauma education at the lowest possible cost" | ✅ | `academic-partners.html`, live copy |
| "High-quality, affordable learning events" | ✅ | `events.html`, live copy |
| "CPD certificates and large discounts on ticket prices" | ✅ | `events.html`, live copy |
| "We have forged partnerships with multiple academic institutions to make trauma education more readily available to undergraduate students" | ✅ | `academic-partners.html` / `courses.html`, live copy, verbatim |
| "No other organisation brings together such a wide range of professionals" | ✅ | `membership.html` (the chairman's statement), live copy |
| "£3 a month" (membership cross-sell) | ✅ | `membership.html`, live tier price |
| "£5,000 a year" (sponsorship cross-sell) | ✅ | `corporate-sponsorship.html`, live Silver tier price |
| Section eyebrows, "Give a one-off gift" / "Set up a monthly gift" / "Give with Gift Aid" button labels, "Other ways to support us" | ✏️ | Ours |

### Flags

**Three cards, one destination.** *One-off*, *Monthly* and *Gift Aid* each get
their own explanatory card, but every button goes to the same PayPal Giving
Fund URL — because that is the only destination that actually processes a
payment today. Per the transactional-forms warning in `template-map.md`, the
real amount/frequency/Gift Aid form is a Beacon-embedded widget this project
does not control; building three different fake forms would invent a payment
experience nobody has specified. A footnote under the grid says the choice is
made on PayPal's own checkout. **When Beacon's donation widget exists, this
becomes one embedded form and the three cards stop being three links.**

**No suggested-amount tiles.** Real donation pages typically pair amounts with
what they fund — "£25 covers a CPD certificate". No unit-cost figures exist
anywhere in the source material for Trauma Care's own costs, and inventing
them would fabricate the charity's operational data. **This needs the client**,
not a guess.

**No thank-you page.** It depends on a real payment flow completing, which a
static prototype cannot do — PayPal's own confirmation is what a donor
currently sees. Worth specifying for the Beacon integration.

**A fabricated figure was caught in review, not by a script.** A first draft of
the *Corporate sponsorship* cross-sell card invented "from £2,500 a year" —
no such figure exists anywhere in the source material. The real floor is
£5,000, `corporate-sponsorship.html`'s Silver tier. The coverage scripts check
that sourced content is *present*; they do not check that unsourced numbers
are *absent*. Treat this as a warning about every number in every page still
to be written, not just this one.

**Not carried over.** No decorative stock backgrounds — none were sourced for
a page with no live original to inherit them from.
