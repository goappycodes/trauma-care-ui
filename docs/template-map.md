# Template map

Prototype → WordPress. Updated as each component is built.

## Template parts

| Prototype markup | WordPress file | Data source |
|---|---|---|
| `<!-- template-part: header -->` | `template-parts/header.php` | `primary` menu location + options page |
| `<!-- template-part: sponsors -->` | `template-parts/sponsors.php` | ACF repeater (options page) |
| `<!-- template-part: newsletter -->` | `template-parts/newsletter.php` | Beacon CRM (later) |
| `<!-- template-part: footer -->` | `footer.php` | 4 menu locations + options page |

## Primary navigation

The menu mirrors the live site — labels, order and children — so the client can
compare the prototype against traumacare.org.uk item for item. Action buttons
(Join, Donate) and panel promo CTAs may repeat a nav destination; that is a call
to action, not a second nav entry.

| Section | Landing | Children |
|---|---|---|
| Events | — | The 29th Annual Trauma Care Conference · Events Overview · British Burn Association Annual Conference ↗ |
| Support Us | — | Merchandise & Books · Corporate Sponsorship · Fundraising Opportunities |
| About Us | — | Trauma Care Fellowship · Our People · The Ryan Lecture · Contact Us · Events |
| Our Partners | — | Slater + Gordon ↗ · Galen ↗ · Academic Partners |
| Webinars | — | Upcoming Webinars · Webinar Recordings · CPD Posters |
| Membership | `membership.html` | — |

**Five of the six parents have no landing page.** On the live site they are
`javascript: void(0);` dropdown triggers; here they are `href="#"` with no
`data-page`. Only Membership resolves to a page. In WordPress these are menu
items of type **Custom Link** with URL `#`.

**Three children leave the site** — the British Burn Association conference and
the two partner websites. They carry their real URLs, with the domain as the
sub-line so the jump is visible before the click.

**Two repeats come from the live site and are reproduced deliberately.**
About Us → *Events* is the same page as Events → *Events Overview*, and the
Events parent has no page of its own. The earlier IA removed repeats like this;
raise both with the client rather than assuming the live nav is intentional.

**Gap against the spec.** §2.1 describes the current Events area as "28th Annual
Trauma Care Conference… ; **regional events**". Neither the live dropdown nor
this one has a regional events entry. Confirm whether these continue before the
events templates are built.

**Pages this adds**, not yet built: `academic-partners.html`,
`cpd-posters.html`, `shop.html`, `video-library.html`, `webinars.html`.
`conference.html`, `events.html`, `corporate-sponsorship.html`,
`fundraise.html`, `about-fellowship.html` and `about-team.html` are **built**,
so links to them are real `href`s rather than stubs.

**Dropped out of the header** when it moved to the live IA, and now reachable
only from the footer: `about.html`, `education.html`, `news.html`, `cpd.html`,
`resources.html`, `courses.html`, `membership-tiers.html`, `journal.html`,
`volunteer.html`, `exhibit-sponsor.html`, `partners.html`. `support-us.html` is
no longer referenced anywhere — the live site has no Support Us landing page.

`partners.html` (relationship) and `exhibit-sponsor.html` (commercial) are
deliberately separate. Previously one page carried three different nav labels.
The header's *Corporate Sponsorship* item is a third thing again — the live
site's own sponsorship page — so it gets `corporate-sponsorship.html`.

### Video library: one page, gated per item

The spec describes **three** access levels, not two: live webinars, the full
recording library in the member portal, and "non-member versions on YouTube"
(§2.3 — and §17 lists YouTube as "non-member video access", retained).

An earlier version of this navigation had only public webinars plus a padlocked
`members/video-library.html`, which left the public YouTube recordings with
**no route at all** — a non-member looking for a past webinar hit a padlock.

`video-library.html` is therefore a **public page** listing every recording,
with members-only items gated inline using `.tc-gate`. One URL for both
audiences, and the padlock explains the upgrade in context.

This matches W4's wording exactly — "member-gated **where required**" — gating
at item level rather than page level. It also keeps the public recordings
indexable, which page-level gating would not.

The header now carries the live site's label for it, *Webinar Recordings*, but
the page and the item-level gating are unchanged.

Neither document states that live webinars are free to attend. That claim comes
only from the live site and is marked ✏️ in `content-sources.md`.

### Signed-in state

`.tc-nav__actions` swaps Log in + Join for `.tc-account`; Donate stays.
In WordPress this is an `is_user_logged_in()` branch in the header template
part; membership status in the menu comes from Beacon.

### Constraint for the nav walker

`.tc-nav__item:nth-child(n+4) .tc-nav__panel` right-anchors panels for items
in the right half of the bar, so a wide panel cannot run off the viewport.
**The pivot is tied to the six-item menu.** An editor adding a seventh
top-level item must move it, or the third item's panel will overflow left —
which is exactly what happened during the rebuild.

## Components

| Class | WordPress | Notes |
|---|---|---|
| `.tc-nav` | Custom `Walker_Nav_Menu` | Must emit link **+** sibling `<button aria-controls>` + panel. Core cannot do this — it is the accessibility fix |
| `.tc-nav__sublink span` | Menu item *Description* field | Enable in Screen Options |
| `.tc-nav__feature` | ACF group on nav menu items | Optional per top-level item |
| `.tc-breadcrumb` | `template-parts/breadcrumb.php` | Plus JSON-LD `BreadcrumbList` |
| `.tc-listing` | `template-parts/listing.php` | Shared by all `archive-{post_type}.php` |
| `.tc-filters` | Generated from registered taxonomies | Not hard-coded per post type |
| `.tc-pagination` | `the_posts_pagination()` | Filter markup to match these classes |
| `.tc-card` | `template-parts/card-{post_type}.php` | One shell, per-type slots |
| `.tc-badge--members` | Same access field that gates the content | Badge and gate can never disagree |
| `.tc-tier` | ACF repeater on the membership page | Reused unchanged for the conference ticket card |
| `.tc-conf-facts` | ACF repeater: label + value | The four facts in the event hero |
| `.tc-countdown` | One ACF date-time field → `data-countdown` | Script-driven; hidden entirely without JavaScript, so the date heading carries the content |
| `.tc-discount-list` | ACF repeater: saving + who | |
| `.tc-days` | ACF repeater of days, each with a repeater of themes | Not an image. See *Themes are set as text* below |
| `.tc-posters` | ACF repeater: image + label + booking URL | The booking URL is external (Ticket Tailor), so it is a plain URL field, not a page relationship |
| `.tc-person-row` | A `person` or `fellow` post: portrait, name, post-nominals, role, biography | Row, not a card — the biographies run to several hundred words. Promoted out of `fellowship.css` when the team page needed it |
| `.tc-jumpnav` | ACF repeater: label + link | Promoted out of `events.css` when the team page needed it. **Not** a generated table of contents — on the events page two of its six items are other pages |
| `.tc-need-quote` | ACF group: heading + body | Pull quote on a dark ground. Moved into `card.css` when the team page needed it alongside the sponsorship page |
| `.tc-award` | ACF group: heading, body, image | Text-and-image row on the fellowship page |
| `.tc-cta-band` | ACF group: heading, body, two CTAs | Centred closing call to action. Promoted out of `conference.css` when the fundraising page needed it |
| `.tc-page-hero` | ACF group: eyebrow, heading, intro, two CTAs | The inner-page hero. Promoted out of `events.css` when the sponsorship page needed it; the conference page keeps its own, which carries a facts panel |
| `.tc-form-row` | — | Two fields side by side above 640px. Promoted into `form.css` when a second form needed it |
| `.tc-tier__flag` | The tier's own name field | Badge above the name on the sponsorship packages; membership tiers do not use it |
| `.tc-sponsor-credit` | ACF group: label, logo, name, URL | The headline-sponsor lockup at the foot of a page hero. Promoted out of `conference.css` into `04-components/sponsors.css` when the events hero needed it |
| `.tc-featured-event` | The next event, queried by date, or an ACF post-object override | Only the event with tickets on sale carries a booking CTA |
| `.tc-event-row` | ACF flexible-content layout: heading, body, image, optional link | `--reverse` alternates the columns. Body stays first in the source at every width |
| `.tc-topics` | ACF repeater of one text field | Same shell as `.tc-specialisms` on the conference page |
| `.tc-subscribe-form` | Beacon CRM later | Replaces the newsletter template part on `events.html` — the live subscribe modal collects six fields and two consents, not one |
| `.tc-field` / `.tc-input` | See open decision B | Form plugin output will **not** match these classes |

## Stylesheets

`main.css` is shared by every page. Page-specific CSS lives in
`05-templates/<page>.css` and is linked after it — never imported into
`main.css`, so a page only downloads what it uses.

| File | Loaded by | WordPress |
|---|---|---|
| `main.css` | every page | `wp_enqueue_style('tc-main')` |
| `05-templates/home.css` | `index.html` | same, guarded by `is_front_page()`, depends on `tc-main` |
| `05-templates/conference.css` | `conference.html` | same, guarded by the event template, depends on `tc-main` |
| `05-templates/events.css` | `events.html` | same, guarded by the events archive/page template, depends on `tc-main` |
| `05-templates/sponsorship.css` | `corporate-sponsorship.html` | same, guarded by the page template, depends on `tc-main` |
| `05-templates/fellowship.css` | `about-fellowship.html` | same, guarded by the page template, depends on `tc-main` |
| — | `fundraise.html`, `about-team.html` | **No template stylesheet.** Every block on those pages is a shared component |
| `05-templates/styleguide.css` | prototype docs only | not enqueued — never ships |

A rule in a template stylesheet that a second template later needs gets
promoted to `04-components/` rather than copied.

## Links to unbuilt pages are stubbed

468 links across the nine pages point at pages that do not exist yet. They are
set to `href="#"` so the prototype can be clicked through without 404s, with
the intended URL kept in **`data-page`**:

```html
<a href="#" data-page="membership-tiers.html">Tiers &amp; pricing</a>
```

Nothing is lost — the IA stays readable in the markup, and restoring a link is
a mechanical swap once its page exists. 34 distinct targets are recorded this
way; they are the same list as *Pages this adds* above plus the legal pages.
`conference.html`, `events.html`, `corporate-sponsorship.html`,
`fundraise.html`, `about-fellowship.html` and `about-team.html` have already
been through that swap: every link to them across the prototype is now a real
`href` with no `data-page`.

### The team page

`about-team.html` has no template stylesheet — every block on it is a shared
component. In WordPress the twenty entries are `person` posts with a group
taxonomy (patron, trustee, management, operations), so one loop renders all
four sections and **a person can appear in two**: Sir Keith Porter is both a
trustee and the Conference Lead, and his second entry links back to the first
rather than repeating a 300-word biography.

**Three of the twenty have no photograph**, and that is the live site's own
state: it serves a generic `person.png` for Claire Burnell, Laura Cottey and
Kelly Philpotts. Those three use `portrait-placeholder.svg`. Sixteen carry the
charity's own portraits, and Lesley Cotterhill's was supplied separately —
the live site shows no image for her.

**Portraits are CSS backgrounds on the live site, not `<img>` elements.** Each
one is a `div.background-item` with the file in a `data-bg` attribute, applied
to `style` by a lazy loader on scroll. Reading the rendered DOM finds nothing;
the attribute has to be read instead — and read whole, because the charity uses
**two CDN prefixes**, `/traumacare/` and `/traumacareuk/`, in the same page.
Taking a filename and assuming one prefix returns 403 for everything under the
other. That mistake was made once during this build and reported as a broken
media library; it was not. Every portrait on the live site loads.

### Images are compressed before they ship

Portraits are displayed in a 200px square and logos at about 150px wide, so
everything over 150 KB is resized and re-encoded on the way in: portraits to a
400 × 400 JPEG (quality 82, mozjpeg), logos to 600px wide in their original
format so transparency survives. The script is `sharp`-based and lives outside
the repo; it is a one-off pass, not a build step.

| File | Was | Now |
|---|---|---|
| `jane-tovey.jpg` | 1765 × 1765, 1731 KB | 400 × 400, 24 KB |
| `keith-porter.jpg` | 4493 × 2995, 1504 KB | 400 × 400, 20 KB |
| `jim-ryan.png` → `.jpg` | 840 × 1057, 915 KB | 400 × 400, 13 KB |
| `timothy-coats.jpg` | 2307 × 2712, 775 KB | 400 × 400, 16 KB |
| `partners/qualsafe.png` | 2500 × 588, 196 KB | 600 × 141, 14 KB |

`assets/img` came down from 4.4 MB to 1.3 MB. Every `width`/`height` attribute
in the markup was corrected to match the new files afterwards — those are the
browser's aspect-ratio hint, and stale numbers describe images that no longer
exist at that size.

**The originals are still on the charity's CDN**, so nothing is lost; if a
larger crop is ever wanted, it can be re-fetched and re-cut.

### The fellowship page

`about-fellowship.html` is a page template plus a list. In WordPress the
fellows are a `fellow` post type — portrait, name, post-nominals, year,
biography — ordered by year, newest first. Making them posts rather than a
repeater matters here: a fellow is a person the site will want to link to, and
the list grows by one every year.

**The list is an `<ol>`.** It is in award order, and the order carries meaning.

**All seven portraits are the charity's own.** Professor Karim Brohi's sits
under the `/traumacare/` CDN prefix rather than `/traumacareuk/` — see the note
on the team page above.

**`assets/img/portrait-placeholder.svg` is the fallback for a missing
portrait** — a neutral silhouette in the ink tokens, used with an empty `alt` so
it is never passed off as a picture of anyone. Four people on the team page use
it. Two things about the file: its colours are hard coded, because an SVG loaded
through an `img` element cannot read the page's custom properties; and its
comment carries no double hyphen, because `--` is illegal inside an XML comment
and stops the file parsing. The first version of it did exactly that and
rendered as a broken image.

**Two portraits need compressing.** `keith-porter.jpg` is 1.5 MB and
`timothy-coats.jpg` is 794 KB, both displayed at 200 px. They ship as supplied
so the build step has the originals, but they must be resized and re-encoded
before launch — as must `professor-jim-ryan.png` on the events page.

**The bronze is shared.** `wound-man-statuette.png` moved from
`assets/img/events/` up to `assets/img/` when this page became its second user.

### The fundraising page

`fundraise.html` is the shortest page in the prototype, and the only one with
**no template stylesheet** — hero, prose, CTA band and download button are all
shared components. In WordPress it is a page template with four ACF blocks.

**It has no sponsors strip.** The live page does not carry one, so neither does
this. That is the live site's decision, not an omission.

**Donations leave the site** to `paypal.com/fundraiser/charity/137537`, the same
PayPal Giving Fund page the live site uses. The destination is named in the
supporting line so the jump is not a surprise.

**The annual report is a Word file.** The live download is
`Annual_Report_of_the_Trustees_of_Trauma_Care_2023-2024.docx`, shipped here as
`assets/docs/trauma-care-annual-report-2023-24.docx` (68 KB). A trustees' report
published as `.docx` downloads rather than opens, has no fixed layout, and can
carry tracked changes and author metadata. **Recommend converting it to PDF
before launch**, and checking the file for comments and revision history first.

**Our URL differs from theirs.** The live page sits at `/support-us` but is
titled and written as a fundraising page, and the nav calls it *Fundraising
Opportunities*. This prototype keeps `fundraise.html`, which matches the nav
label. Confirm the final slug with the client — `/support-us` will need a
redirect either way.

**The nav sub-line for this page is unsupported.** The Support Us menu
describes Fundraising Opportunities as "Including our London Marathon places".
That came from the live page's own meta description — "Four London Marathon
places available" — and its keywords, but **the page body says nothing about
the marathon**. Either the content was removed and the metadata was not, or the
places were never written up. Until the client rules on it, the sub-line is
making a promise the page does not keep.

### The sponsorship page

`corporate-sponsorship.html` is a page template, not an archive. In WordPress:
hero, prose intro with a file field for the brochure, an ACF repeater of
packages (name, price, period, benefit repeater, featured flag), a prose block,
the enquiry form, and the pull quote. It reuses the membership tier card
unchanged apart from a badge above the name.

**The enquiry form is a pop-out on the live site**, hidden until its button is
clicked. It is flattened into the page here, under the paragraph that points at
it. Same field set, same order, both consents.

**The brochure ships with the page** as
`assets/docs/trauma-care-sponsorship-packages.pdf`, 1.7 MB. The live filename
is misspelt (`Pakcage`) and its CDN path is dated 2023 — check it still matches
the packages on the page before launch.

**The live page is titled "Trauma Care - Home"** and leads with the homepage
hero and a membership CTA before any sponsorship content. That is reproduced
nowhere: this page has its own title and hero. See `content-sources.md`.

**The sponsor strip disagrees with itself across the live site.** This page
lists eight partners, the homepage and event pages list six, and only two
appear on both. The prototype's strip is one shared template part fed by a
single options-page repeater, which is the right structure — but it needs one
authoritative list from the client before the strip means anything.

### The events page

`events.html` is the section index. In WordPress it is either the `event`
archive or a page template holding ACF flexible-content layouts: hero, jump
nav, featured event, then one media-and-text row per standing event. The
newsletter, sponsors and footer template parts are shared and are not
duplicated in the layout list.

**The featured event is queried, not typed.** It shows the next conference with
tickets on sale, and it is the only block on the page with a booking CTA. Every
other block links to its own page instead, because those events are not
currently bookable.

**Three facts on this page are already stale on the live site**, and are
reproduced here as the client published them. They are flagged in
`content-sources.md` and need a ruling before launch:

- the live events page still advertises the **28th** conference, 9–12 March
  2026, while the conference page advertises the 29th, 8–11 March 2027;
- the live secondary nav calls it the **"Leeds Conference"** while the venue is
  Yarnfield Park in Staffordshire — the label is used here as *Annual
  Conference*;
- the FIT Course copy says the 2025 course was postponed and to watch for its
  return **"in 2026"**, which is nearly out of date as written.

**Three live sections are `display: none`** and were missed on the first build
because they never render: the "Trauma Care Events and Conferences" overview, a
fuller Fellowship block, and the Subscribe modal. All three are now on the page.
When auditing a Kartra page, read the DOM, not the rendered text.

**The page carries its own subscribe form**, not the shared newsletter template
part. The live modal asks for name, email, country code, phone and occupation,
with two separate consents; the shared band asks for an email and one consent.
Keeping the band here would have dropped four fields.

**Sections are told apart by ground colour, not by pattern.** The live page
sits a decorative hexagon or concrete image behind five of its bands. Those
were tried and then dropped: they weighed 3.1 MB between them, and the pattern
ran through the body copy wherever it was strong enough to see. The page now
alternates token grounds instead, and no two adjacent bands share one:

> dark hero → subtle jump nav → white → subtle → white → subtle → white →
> brand → white → dark footer

Nothing but decoration was lost — every piece of copy from those sections is on
the page. Should the client want the artwork back, it is theirs, on their CDN,
and belongs behind a section as a low-opacity layer under the token ground so
contrast stays set by the palette.

**`professor-jim-ryan.png` needs compressing.** It is the charity's own file:
840 × 1057, but 915 KB as a PNG, for a photograph displayed at 340 px. It ships
as-is so the prototype uses their real asset; convert it to a JPEG or WebP at
build time.

### The conference page

`conference.html` is the first inner page. In WordPress it is one event —
`single-event.php`, or a page template if events stay a single page — built
from ACF flexible-content layouts in the order the sections appear: hero,
countdown, tickets, prose band, specialisms, day themes, prose band, the
three-up info grid, terms, closing CTA. The sponsors and footer template parts
are shared and are not duplicated in the layout list.

**Themes are set as text.** The live site publishes the day-by-day themes as
two poster images. Images of text fail WCAG 1.4.5, cannot be searched,
translated or reflowed, and go stale silently, so the themes are marked up as
four day columns. The two poster halves sit beside them as booking buttons —
thumbnail, day range, and the destination domain named in the label. The poster
files stay in `assets/img/conference/` and are named for what they hold, not
for the CMS id they arrived with.

**Booking is off-site.** Tickets are sold through Ticket Tailor at
`tickettailor.com/events/traumacarecharity/2363521` — one URL for the whole
event, not one per day. Every booking CTA in the page body now points at it:
the hero, the ticket card, the why-attend band, the closing CTA and the two
poster buttons. The live URL carries Kartra tracking parameters; they are
stripped here.

The one exception is the Events mega-menu's **Book your place**, which is still
`event-register.html`. It lives in the shared header template part, so changing
it changes every page — and it would be the only nav item leaving the site.
`event-register.html` therefore survives as a stub target for the nav alone.
Decide before launch whether the site keeps its own booking page at all, or
sends every route straight to Ticket Tailor.

**The five dropdown parents are a different case.** They have no `data-page`
because they have no page — that is the live site's structure, not a stub, and
building the pages will not change it. A nav parent that goes nowhere is the
fault §4 calls out, so the panels must stay reachable without the script: at
1280px and up `header.css` opens them on `:hover` and `:focus-within` for
`html:not(.js)`, and below that the drawer renders every panel in the flow.
**If the client wants section landing pages, that is a change to the live IA
and needs their sign-off** — it is not something to add silently.

Regenerating the header or footer reinstates real URLs, so re-run the stubbing
pass afterwards.

## Still to build

**`campaign.html`** — the fourth flexible landing page named in requirements
§1. Deferred, not dropped. It belongs as a page *template* rather than a
navigation section: campaign pages are reached from email, social and print.

## Footer legal links

Audited against the requirements doc.

| Link | Basis |
|---|---|
| Privacy policy | §12 UK GDPR / PECR |
| Cookie policy | §13 |
| **Cookie settings** | §12 'preference management' + §13. Becomes the consent plugin's re-open trigger |
| Terms of use | Not in the doc. Necessary because the site takes payment |
| Cancellation policy | Not in the doc. Same reason; also on the live site |
| Accessibility statement | Not named, but §9 makes WCAG 2.1 AA contractual — the statement evidences it |

**Removed: Sitemap.** §8's "new sitemap submission" is an **XML** sitemap for
Search Console, not an HTML page. Different thing.

**Shop: confirmed in scope.** It is absent from the requirements document, but
the technical specification settles it — §2.5 lists "merchandise sales (a
link-out to a dropshipping shop is acceptable in future)" under *functionality
that must be retained after migration*. The link stays. Note the "link-out"
allowance: the shop may end up an external destination rather than a section of
this site, so build it as a link, not a template.

## Options page fields

`utility_phone`, `utility_links` (repeater), `charity_number`, `mission`,
`contact_email`, `contact_phone`, `office_hours`, `address`,
`sponsors` (repeater: logo, name, tier, url), `social` (repeater: network, url).

## Post types & taxonomies

- **Post types:** `event`, `webinar`, `resource`, `course`, plus core `post` for news
- **Taxonomies:** `topic`, `format`, `access` — shared across `webinar` and `resource`

## Tokens → theme.json

`assets/css/01-settings/tokens.css` maps 1:1. Expose the colour ramp as a
**named palette only** — no free colour picker, or editors can break the AA
contrast guarantee (brand green is 2.68:1 and fails as text).

## Open decisions

Checked against *Trauma Care — Technical Specification & Platform Recommendation*
(June 2026). Two are now settled by that document.

| | Decision | Status |
|---|---|---|
| A | ACF Flexible Content vs native blocks | **Steer: native blocks.** §6.3 gives the CMS as "WordPress (block editor)", and §5.1 sells the "familiar block editor… colour and text changes without a developer". Components still convert, but as **block patterns / custom blocks** rather than ACF flexible-content layouts. The ACF notes through this document need rereading in that light |
| B | Form plugin vs custom forms | **Settled.** §6.3: "CRM-native embedded forms + Gravity Forms / Fluent Forms for contact". See the warning below |
| C | Faceted filter counts vs global term counts | **Open.** §6.3 covers search only ("Native WordPress search, upgrade to SearchWP if needed"); it says nothing about facet counts |
| D | Editor colour control vs the AA guarantee | **Reconciled.** §5.1 explicitly wants "colour changes without a developer"; §4 requires WCAG 2.1 AA. A named `theme.json` palette satisfies both — editors choose freely, but only from accessible tokens |

### Warning: transactional forms are not ours

§6.3 puts join, donation and event-booking forms in **embedded CRM widgets**.
We do not control their markup. The accessible form components in the
styleguide — `.tc-field`, `.tc-input`, `.tc-error-summary`, the fieldset and
consent patterns — therefore apply to **contact and enquiry forms only**
(W6, built with Gravity or Fluent).

This is a live risk against §4's "WCAG 2.1 AA across the public site **and
member area**": the highest-value journeys will run on third-party embeds
whose accessibility we inherit. **Test Beacon's embedded forms against AA
during Phase 1 discovery**, not at the Phase 5 audit.
