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

Every sub-item resolves to exactly one page, and no sub-item repeats its
parent's destination. Action buttons (Join, Donate) and panel promo CTAs may
repeat a nav destination — that is a call to action, not a second nav entry.

| Section | Landing | Children |
|---|---|---|
| About | `about.html` | Our people · Fellowship · Ryan Lecture · Contact us |
| Education | `education.html` | Free CPD webinars · Video library · Courses · CPD certificates · Resource library |
| Events | `events.html` | The Annual Conference · Exhibit & sponsor |
| Membership | `membership.html` | Tiers & pricing · TRAUMA journal |
| News | `news.html` | — |
| Support us | `support-us.html` | Donate · Fundraise · Volunteer · Corporate partners · Shop |

**Gap against the spec.** §2.1 describes the current Events area as "28th Annual
Trauma Care Conference… ; **regional events**". Our Events dropdown has no
regional events entry. Confirm whether these continue before the events
templates are built.

**Pages this adds**, not yet built: `courses.html`, `exhibit-sponsor.html`,
`partners.html`, `fundraise.html`, `volunteer.html`, `support-us.html`,
`video-library.html`, `members/my-details.html`,
`members/payment-method.html`, `members/my-bookings.html`.

`partners.html` (relationship) and `exhibit-sponsor.html` (commercial) are
deliberately separate. Previously one page carried three different nav labels.

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
| `.tc-tier` | ACF repeater on the membership page | |
| `.tc-field` / `.tc-input` | See open decision B | Form plugin output will **not** match these classes |

## Stylesheets

`main.css` is shared by every page. Page-specific CSS lives in
`05-templates/<page>.css` and is linked after it — never imported into
`main.css`, so a page only downloads what it uses.

| File | Loaded by | WordPress |
|---|---|---|
| `main.css` | every page | `wp_enqueue_style('tc-main')` |
| `05-templates/home.css` | `index.html` | same, guarded by `is_front_page()`, depends on `tc-main` |
| `05-templates/styleguide.css` | prototype docs only | not enqueued — never ships |

A rule in a template stylesheet that a second template later needs gets
promoted to `04-components/` rather than copied.

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
