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

**Pages this adds**, not yet built: `shop.html`, `video-library.html`.
`conference.html`, `events.html`, `corporate-sponsorship.html`,
`fundraise.html`, `about-fellowship.html`, `about-team.html`,
`about-ryan-lecture.html`, `contact.html`, `academic-partners.html`,
`webinars.html`, `cpd-posters.html`, `membership.html`, `courses.html` and
`donate.html` are **built**, so links to them are real `href`s rather than
stubs.

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
| `.tc-media-row` | ACF layout: heading, body, image, optional link, reverse toggle | Prose beside a picture. Merged from `.tc-event-row` (events) and `.tc-award` (fellowship) when the Ryan Lecture page became the third user |
| `.tc-roll` | ACF repeater: year + name | The list of Ryan Lecturers. A description list, two columns above 720px |
| `.tc-faq` | ACF repeater: question + answer | Native details/summary, made exclusive with a shared `name` so only one panel is open at a time. No script, keyboard-operable for free, and answers stay in the document so they are findable while collapsed |
| `.tc-hours` | Options-page group, shared with the footer | Opening hours as a description list |
| `.tc-map` | Options-page field: embed URL | Google Maps iframe. Sized by CSS, not by the width/height the embed ships with, and given a title the embed code omits. **Third-party cookies — needs consent gating** |
| `.tc-cta-band` | ACF group: heading, body, two CTAs | Centred closing call to action. Promoted out of `conference.css` when the fundraising page needed it |
| `.tc-page-hero` | ACF group: eyebrow, heading, intro, two CTAs | The inner-page hero. Promoted out of `events.css` when the sponsorship page needed it; the conference page keeps its own, which carries a facts panel |
| `.tc-form-row` | — | Two fields side by side above 640px. Promoted into `form.css` when a second form needed it |
| `.tc-tier__flag` | The tier's own name field | Badge above the name on the sponsorship packages; membership tiers do not use it |
| `.tc-sponsor-credit` | ACF group: label, logo, name, URL | The headline-sponsor lockup at the foot of a page hero. Promoted out of `conference.css` into `04-components/sponsors.css` when the events hero needed it |
| `.tc-featured-event` | A `webinar` or `event` post: title, subtitle, date, time, registration URL, optional banner image | Promoted out of `events.css` into `04-components/` when the webinars page needed it. `__banner` is capped at 280px so the picture stays supporting and the date and CTA read first |
| `.tc-topics` | ACF repeater of one text field, or a `topic` taxonomy | A wrapped row of `.tc-tag`. Promoted out of `events.css` into `04-components/` when the courses page needed it — which emptied `events.css`, so it was deleted. Same shell as `.tc-specialisms` on the conference page |
| `.tc-subscribe-form` | Beacon CRM later | Replaces the newsletter template part on `events.html` and `webinars.html` — the live subscribe modal collects six fields and two consents, not one. Promoted out of `events.css` when the webinars page needed it; the heading and lead are per-page fields, because the live site varies them |
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
| `05-templates/sponsorship.css` | `corporate-sponsorship.html` | same, guarded by the page template, depends on `tc-main` |
| `05-templates/ryan-lecture.css` | `about-ryan-lecture.html` | same, guarded by the page template, depends on `tc-main` |
| `05-templates/contact.css` | `contact.html` | same, guarded by the page template, depends on `tc-main` |
| `05-templates/cpd-posters.css` | `cpd-posters.html` | same, guarded by the page template, depends on `tc-main`. Holds only the poster archive grid |
| — | `fundraise.html`, `events.html`, `about-team.html`, `about-fellowship.html`, `academic-partners.html`, `webinars.html`, `membership.html`, `courses.html`, `donate.html` | **No template stylesheet.** Every block on those pages is a shared component. `fellowship.css` and `events.css` were both deleted once their last rule was promoted |
| `05-templates/styleguide.css` | prototype docs only | not enqueued — never ships |

A rule in a template stylesheet that a second template later needs gets
promoted to `04-components/` rather than copied.

## External links open in a new tab

Every link that leaves the site — **145 of them across the fourteen content
pages** — carries `target="_blank" rel="noopener noreferrer"`. Internal links
never do; the rule is applied by protocol, so `mailto:` and `tel:` links are
untouched and open in the mail or phone app as before.

`rel="noopener noreferrer"` is not decoration. `noopener` stops the opened page
reaching back through `window.opener`; `noreferrer` stops it being told which
page sent the visitor. Modern browsers imply `noopener` for `target="_blank"`,
but the attribute is what makes the intent readable and covers the older ones.

**Each of those links also announces itself.** A sighted visitor sees a new tab
appear; a screen-reader user gets no such signal unless the link says so, which
is why every external link ends with a visually hidden "(opens in a new tab)".
Where the link already carried a hidden name — the four social icons in the
footer — the note goes **inside** that span, so it is read as one phrase
("Trauma Care on Facebook, opens in a new tab") rather than as two separate
strings. WCAG 2.1 puts the warning at AAA (3.2.5), not the AA this project
commits to, so this is above the required bar rather than at it.

**In WordPress this is not markup.** Hand-adding two attributes and a span to
every outbound link is exactly the kind of thing an editor forgets. It belongs
in a `the_content` filter, or in the link walker for menu items, keyed on the
href not matching `home_url()` — one rule, applied to every link the editor
ever writes. The prototype's markup shows the intended output, not the
intended authoring workflow.

**The `data-page` stubs are unaffected.** They are internal targets that do not
exist yet, so they stay `href="#"` with no target, and inherit the rule
automatically when they become real internal links.

## Links to unbuilt pages are stubbed

540 links across the seventeen pages point at pages that do not exist yet. They are
set to `href="#"` so the prototype can be clicked through without 404s, with
the intended URL kept in **`data-page`**:

```html
<a href="#" data-page="membership-tiers.html">Tiers &amp; pricing</a>
```

Nothing is lost — the IA stays readable in the markup, and restoring a link is
a mechanical swap once its page exists. 25 distinct targets are recorded this
way; they are the same list as *Pages this adds* above plus the legal pages.
`conference.html`, `events.html`, `corporate-sponsorship.html`,
`fundraise.html`, `about-fellowship.html`, `about-team.html`,
`about-ryan-lecture.html`, `contact.html`, `academic-partners.html`,
`webinars.html`, `cpd-posters.html`, `membership.html`, `courses.html` and
`donate.html` have already been through that swap: every link to them across
the prototype is now a real `href` with no `data-page`.

**`membership-tiers.html` is gone as a target.** The membership page carries
the plan comparison, so all fifteen links that pointed at a separate tiers page
now point at `membership.html#plans`. `membership-join.html` stays a stub: it
is the checkout, which is a third-party embed rather than a page we build.

### The courses page — the flexible landing template

`courses.html` is the second of the four flexible landing pages named in
requirements §1, after `membership.html`. **It has no live equivalent** —
`/courses`, `/education`, `/training`, `/fit` and `/foundations-in-trauma` all
return 404 on traumacare.org.uk. The only course the charity publishes lives in
a section of the events page.

**This is the page that demonstrates what "flexible" means.** It loads
`main.css` and nothing else: every band on it is an existing shared component,
composed in an order this page chose.

| Band | Component | Reused from |
|---|---|---|
| Hero | `.tc-page-hero` | events, sponsorship, webinars, posters, membership |
| Jump nav | `.tc-jumpnav` | events, team |
| Approach | `.tc-section-head` + `.tc-checklist` | membership, sponsorship |
| The course | `.tc-media-row` + `.tc-alert` + `.tc-topics` | events, Ryan Lecture, fellowship |
| Students | `.tc-section-head` + `.tc-btn-group` | everywhere |
| Other ways to learn | `.tc-grid--3` + `.tc-card` | homepage, events |
| Register interest | `.tc-subscribe-form` | events, webinars, posters, membership |
| Sponsors | template part | eight other pages |

Nothing was added to the stylesheets to build it except the promotion below.
That is the deliverable: an editor composes a landing page from patterns, and
a developer is not involved. Under open decision A these become **block
patterns**, so the same set builds `campaign.html` and any future landing page
without new code.

**`.tc-topics` was promoted, and `events.css` is gone.** The topic tags were
the last rule in `05-templates/events.css`; the courses page is the second
template to need them, so they moved to `04-components/topics.css` and the
template stylesheet was deleted. `events.html` now loads `main.css` only. Two
template stylesheets have now been emptied this way — `fellowship.css` and
`events.css` — which is the promotion rule working as intended.

**One course, honestly presented.** The charity publishes exactly one course
and it is currently postponed. The page says so in a notice rather than
implying it with a disabled button, and instead of padding the catalogue with
invented courses, an *Other ways to learn* band routes people to the
conference, the webinars and the shop. **Every factual claim on the page is
quoted from a page built from the live site** — a provenance script checks all
29 of them and names the source page for each.

**`courses.html` was a footer-only stub** and stays out of the primary
navigation, because the live IA has no Education section. If the client wants
one, that is a change to the live IA — see the note further down this document.

### The membership page

`membership.html` needs **no template stylesheet**. Every block is a shared
component, and `.tc-tier` was built for this page before the page existed — the
sponsorship packages borrowed it first, and its markup comment has said
"reuses `.tc-tier` from the membership page" since then. It needed no changes.

**Two plans, not the live site's three.** The requirements doc names RHP and
NRHP; the live site adds a Student tier at the same £3 as NRHP. The
requirements doc wins, so the Student card is not built — settled 3 September
2026, recorded in `content-audit.md`. The grid stays `.tc-grid--3` inside a
narrow container: `auto-fit` collapses the empty third track, so two cards fill
the row rather than leaving a hole, and they still sit side by side on a tablet
where `--2`'s 420px floor would have stacked them. Adding a third tier back
needs no change at all.

**`.tc-tier__name` now reserves two lines.** "Non-registered healthcare
professional" wraps where "Registered healthcare professional" does not, which
put the two prices, benefit lists and buttons on different baselines. The
reserved height fixes it here and leaves the sponsorship packages aligned as
they already were — their names are all one line, so all three gain the same
space.

**It absorbs `membership-tiers.html`.** The plans are the substance of this
page; a separate comparison page would repeat them. The fifteen links that
pointed at a tiers page now point at `#plans` on this one, and that target is
retired.

**The three plan buttons are third-party checkouts.** On the live site they are
Kartra pay-popups (`data-kt-type="pay"` with a price-point id). Per spec §6.3
they become **embedded Beacon checkouts**, whose markup we do not control — see
the warning at the foot of this document. Here they are stubs to
`membership-join.html`, which is a placeholder for wherever that embed lands,
not a page we intend to build.

**Two other fixes this page forced out:**

`.tc-prose-center` **was defined in `home.css` and used on nine pages.** The
shared sponsors template part carries it, so every page except the homepage was
rendering that caption at full container width — about 110 characters a line.
Promoted into `02-base/typography.css`.

`u-mt-10` **and** `u-mb-8` **did not exist.** Both were used on `cpd-posters.html`
and this page and were silently doing nothing. Added to the utilities file,
which is where the rest of that scale already lives. A class audit script now
exists for this — it compares every `tc-`/`u-` class in the markup against every
selector in the stylesheets. Worth re-running before handover; five wrapper
classes still have no rule, which is fine when they are markup hooks and a bug
when they are not.

### The CPD posters page

**Two live pages become one.** `traumacare.org.uk/CPD-Posters` carries the
current edition; `traumacare.org.uk/past-cpd-posters` carries the archive, and
each links to the other. Neither is complete on its own, and the archive page
is not in the navigation at all — the only routes to it are a button on the
posters page and one on the webinars page. `cpd-posters.html` is both: the
current edition at the top, the back catalogue below it under `#archive`.
**Both live links resolve to it** — the nav item and the *View previous
posters* buttons — which is why the un-stubbing pass swapped 27 links at once.

**`poster` is a post type, not a repeater.** Thirty editions, each with its own
cover and PDF, and the file for an edition does sometimes get replaced. A
repeater row makes that a field edit inside another post; a post makes it an
upload. The archive query is every `poster` except the newest, ordered by
edition number descending.

**Ordering is fixed here.** The live archive runs 28, 29, 25, 26, 27, 22, 23,
24, 19, 20, 21, 18, 17, 16, 13, 14, 15, 12, 11, 10, 7, 8, 9, 4, 5, 6, 1, 2, 3 —
rows of three, each row ascending, the rows themselves descending. That is what
a hand-built grid looks like after three years of prepending. Ours is strictly
newest first, because the query orders it.

**Only Edition 30's PDF ships.** The other twenty-nine are linked to the
charity's own file store. The full set is **93 MB** — it would be the largest
thing in the repository by an order of magnitude, and it proves nothing the
grid does not already prove. At migration they become media-library
attachments on their `poster` posts. The covers *are* local, all thirty of
them, because the page cannot be judged without them.

**`.tc-poster-grid` stays in `05-templates/`** until a second template needs
it. Five columns on a laptop, three on a tablet, two on a phone — the phone
case is a fixed two-column rule rather than an `auto-fill` floor, because at
375px the floor gives one poster per row and the archive becomes a very long
scroll.

**Covers are cropped to 3∶4 from the top.** The 2021 editions are a different
shape from the current ones, and a grid of mixed ratios reads as a mistake. The
masthead is at the top of every edition, so that is the part the crop keeps.

### The webinars page

`webinars.html` needs **no template stylesheet**. Every block on it is a shared
component, and building it promoted the last two rules out of `events.css`:
`.tc-featured-event` and `.tc-subscribe-form`. `05-templates/events.css` is now
one rule long (`.tc-topics`) and is a candidate for deletion the next time
anything touches it.

**The upcoming list is one post type, queried by date.** A `webinar` post
carries title, subtitle, date, time, registration URL and an optional banner
image; the page shows the ones still in the future as `.tc-featured-event`
cards. Only one webinar is listed on the live site, so the prototype shows one
card — but nothing about the markup or the CSS assumes that, and a second card
needs no new code.

**The list uses `.tc-featured-event--compact`.** The base card is sized to
carry one conference at the top of a page; a list of webinars needs the same
information in a fraction of the height. The compact variant puts the picture
in a 200px column beside the text and tightens the internal rhythm — 383px tall
against 830px for the same content in the base card. Below 640px it stacks, and
the picture drops to a 16∶7 letterbox so the card still reads in about one
screen. The live card runs its picture full-bleed across the top, which pushes
the date, the time and the register button below the fold on a phone.

**Two registration URLs for one webinar.** The live page's visible *Register*
button and the *Register via Zoom* link inside its collapsed detail panel point
at **different Zoom registrations**. The prototype uses the visible one. This
is a content bug on the live site and someone should check which registration
actually has the attendees — see `content-sources.md`.

**The detail panel is not reproduced as a disclosure.** On the live site the
speaker description sits behind a *View details* toggle. With one webinar on
the page there is nothing to compress, so the description is simply shown. If
the list ever runs long enough to need collapsing, the exclusive
`<details>`/`<summary>` pattern already used by `.tc-faq` is the answer — no
script.

**The subscribe form is per-page copy over a shared component.** `events.html`
and `webinars.html` carry the same six fields and two consents; the heading and
the lead differ, because the live site varies them ("Never miss another
webinar" here). Those two are ACF fields on the block, not hard-coded strings.

**This is the page most affected by the withheld-"free" ruling.** Its live
`<title>` is literally *Trauma Care Free CPD Webinars*, and the phrase recurs
in the hero, the card, the poster block and the poster artwork itself. The
prototype strips the public pricing claims and keeps the access statements. If
the client confirms the webinars are free to attend, this page is where the
wording goes back first — and the poster PDF needs re-cutting, because the
artwork we ship says *Free CPD Webinars* across the top.

### The contact page

`contact.html` carries the office details and the five FAQs. The details are the
**same options-page fields the footer already reads**, so the address, phone,
email and opening hours are entered once and rendered in both places.

**The FAQs are native `<details>`/`<summary>`**, not a scripted accordion. They
open and close with no JavaScript, are keyboard-operable without any ARIA, and
every answer stays in the document — so a browser's find-in-page and a search
engine both see it while the panel is collapsed. `main.js` contains no reference
to them at all.

**Only one panel opens at a time.** Every `<details>` carries `name="faqs"`,
which makes the browser treat them as one exclusive group and close whichever
panel is open when another is opened — still with no script. Shipped in Chrome
and Edge 120, Safari 17.2 and Firefox 130, so it is broadly available; anywhere
older the attribute is ignored and the panels open independently, which is a
readable fallback rather than a breakage.

**The live FAQ intro points at a floating chat widget** that is a Kartra feature
with no equivalent here. It now points at the office email instead. If live chat
is wanted on the new site it needs specifying — it is in neither the
requirements nor the spec. See `content-sources.md`.

### The Ryan Lecture page

`about-ryan-lecture.html` is a page template with three blocks: a media row
for the lecture and the man it is named for, the roll of lecturers, and the
shared pull quote. Its only bespoke CSS is `.tc-roll`.

**The roll is a description list**, not a table: each year is a term and each
lecturer its description. It flows in two columns above 720px and reads row by
row, so DOM order and reading order stay the same.

**The live meta description says the lecture is "in memory of" Professor Jim
Ryan.** He is a current patron and gave the first lecture himself. The page
body has it right — it marks his lifetime contribution — so that wording is
used here and the description is not reproduced. See `content-sources.md`.

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

Every image is cut to the size it is actually displayed at, times two for a
retina screen, and re-encoded. Portraits are displayed in a 200px square and
logos at about 150px wide, so everything over 150 KB is resized on the way in: portraits to a
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
| `posters/cpd-poster-edition-30.png` → `.jpg` | 1533 × 2000, 2145 KB | 760 × 992, 124 KB |
| `webinars/health-in-motorsport.jpg` | 1920 × 1194, 211 KB | 1200 × 746, 86 KB |
| `posters/` × 29 archive covers | 1587 × 2245 typical, 38.7 MB the set | 420 px wide, **1.4 MB the set** |

`assets/img` came down from 4.4 MB to 1.3 MB, and stands at 2.6 MB now the
thirty poster covers are in it. Every `width`/`height` attribute
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

### The donate page — the third flexible landing page

`donate.html` is the third of the four flexible landing pages named in
requirements §1, after Membership and Courses. Like Courses, **it has no live
equivalent** — the live site's only donation route is a single outbound PayPal
Giving Fund button, reused on `fundraise.html`. Every factual claim on the page
is quoted or lightly paraphrased from a page already built from the live site;
a provenance script verifies 16 of them by source. The only page-specific
writing is structural: eyebrows, headings, and the CTA labels.

**It closes the five gaps content-audit finding #4 named** — "no recurring
giving, no Gift Aid capture, no suggested amounts, no impact framing, no
thank-you page" — as far as a static page honestly can:

| Gap | How this page addresses it |
|---|---|
| No recurring giving | A *Monthly gift* card, alongside *One-off* |
| No Gift Aid capture | A *Gift Aid* card explaining the 25% HMRC uplift |
| No suggested amounts | **Not built.** See the flag below |
| No impact framing | *Why it matters* section, built entirely from mission lines already live elsewhere |
| No thank-you page | **Not built.** Depends on a real payment integration — see below |

**All three *Ways to give* cards point at the same PayPal URL.** Per the
transactional-forms warning earlier in this document, a real amount/frequency/
Gift Aid capture form is a Beacon-embedded widget this project does not
control. Building three different fake forms would invent a payment
experience nobody has specified. Instead, every card's CTA is honest about
where it actually goes today: PayPal's own checkout, which already lets a UK
donor choose the amount, frequency and Gift Aid. A footnote under the grid
says so. **When Beacon's donation widget exists, the three cards collapse into
one embedded form and stop being three separate external links.**

**No suggested-amount tiles.** A real donation page typically pairs amounts
with what they fund ("£25 covers a CPD certificate for a student nurse"). No
such unit-cost figures exist anywhere in the source material, and inventing
them would fabricate the charity's own operational data — the same discipline
this document applies to every other page. Flagged for the client rather than
guessed at.

**No thank-you page.** It depends on the real payment flow completing, which
this prototype cannot do — PayPal's own thank-you page is what a live donor
currently sees. Worth specifying for the Beacon integration; not something a
static prototype can meaningfully mock.

**One invented figure was caught and corrected before this went live.** A
first draft of the *Corporate sponsorship* cross-sell card said "from £2,500 a
year" — nowhere in the source material. The real floor is £5,000, the Silver
tier price on `corporate-sponsorship.html`. Caught in review, not by a script;
the class audit and coverage scripts check that content is *present*, not that
invented numbers are *absent*. Worth building a check for stray currency
figures with no source before the next number-bearing page.

## Still to build

Checked against *Trauma Care — Technical Specification & Recommendation*
(June 2026), §3.1–3.6 and §2.5. Nine of the ten functional-requirement areas
(Donations D1–D5, Memberships M1–M5, Events E1–E5, Communications C1–C5,
Reporting R1–R5) describe **CRM and payment behaviour**, not pages — they are
satisfied by the Beacon/Stripe/GoCardless integration this document already
defers to (see the transactional-forms warning below), not by static markup.
Only §3.1 **Website** names actual pages, and this is the complete list of
what it asks for that has no file yet.

| Ref | Requirement | Priority | Status |
|---|---|---|---|
| W2 | Flexible landing pages: membership, courses, donations, **campaigns** | M | Three of four built (`membership.html`, `courses.html`, `donate.html`). **`campaign.html` is the one gap.** Deferred, not dropped — see below |
| W3 | News / blog and Hot off the Press section | S | **Not built.** `news.html` is a stub with no live equivalent — confirmed absent in `content-audit.md` ("Hot Off The Press" exists only as a webinar category, no page behind it) |
| W4 | Resource / downloads library, member-gated where required (CPD posters, recordings) | M | **Half built.** CPD posters ✅ (`cpd-posters.html`). Recordings — `video-library.html` — is designed (see *Video library: one page, gated per item* above) but **not built**. `resources.html`, the library's own index page, is also not built |
| W6 | Contact and enquiry forms | M | ✅ Built — `contact.html` |
| W1, W5, W7 | Content management, site search, clean URLs / redirect map | M/S/M | Not pages — platform, plugin and migration concerns for the WordPress build, not the static prototype |

**`campaign.html`** is the fourth flexible landing page named in W2. Deferred,
not dropped. It belongs as a page *template* rather than a navigation section:
campaign pages are reached from email, social and print, so there is no nav
item to build it against — the other three landing pages all have one.

**`video-library.html` and `resources.html` are also confirmed by the live
crawl**, independently of the spec — see `live-page-checklist.md`. The live
site's Webinar Recordings page (`traumacareuk.kartra.com/page/lWH518`) is the
direct source for `video-library.html`'s content; `resources.html` has no live
source, since W4 asks for a library the live site never built.

**Merchandise gets a scope note, not a page requirement.** §2.5 lists
"merchandise sales (a link-out to a dropshipping shop is acceptable in
future)" among what must be retained — the spec itself treats a full shop
build as optional, with an off-site link as a legitimate fallback. That
changes `shop.html`'s shape: it may not need the 12-product catalogue the live
site currently runs (see `live-page-checklist.md`), only a routing page to
wherever merchandise ends up.

**Member self-service (M2–M4: online join and payment, renewal handling,
login/update-details/payment-method/status) is correctly out of scope for this
prototype**, not missing from it. Per the transactional-forms warning above,
these are Beacon-embedded flows this project does not control the markup for.
The five `members/*` stub targets (`login`, `dashboard`, `my-details`,
`payment-method`, `my-bookings`) stay stubs until that integration exists,
the same treatment `membership-join.html` already gets.

**One quiet confirmation.** M1 — "Two membership tiers (RHP, NRHP)" — is
exactly the decision already made on `membership.html` when the Student tier
was dropped, at the time working only from a summarised note in
`content-audit.md`. Reading the primary spec confirms that decision was
right, independent of the live site having three tiers.

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

- **Post types:** `event`, `webinar`, `poster`, `resource`, `course`, plus core `post` for news
- `course` carries title, status, audience, body, topics and an image. `courses.html` renders the full post and `events.html` a summary of the same one, so the two pages cannot drift apart
- `poster` carries edition number, year, cover image and PDF. One post per edition, not a repeater — the file has to be replaceable without editing a row, and the newest is queried by edition number for the webinars page and the top of the posters page
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
