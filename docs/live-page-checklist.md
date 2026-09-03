# Live site → prototype page checklist

Source of truth: **traumacare.org.uk**, crawled 3 September 2026.

## How this was produced

The live site is Kartra and publishes **no `robots.txt` and no sitemap** — both
return a Kartra 404 shell. There is no crawlable index, so the inventory was
built by following links: start at `/`, extract every same-domain `href` **and**
every `app.kartra.com/redirect_to/?asset=page&id=…` link, resolve each id
through its 307 to a real URL, and repeat until nothing new appears. 21 Kartra
page ids resolved; 24 URLs were fetched.

Fifty-six likely paths were then probed directly (`/news`, `/donate`, `/agm`,
`/journal`, `/volunteer`, `/leeds`, `/faq` and so on) to catch pages that exist
but are linked from nowhere. **None were found**, so the link graph is the whole
public site.

**Two hosts are internal.** Most pages sit on `traumacare.org.uk`, but two are
still served from `traumacareuk.kartra.com`, the subdomain the site was migrated
from. They are the charity's own pages, reached from its own navigation, and are
counted as internal.

---

## Totals

| | Count |
|---|---|
| **Distinct internal pages on the live site** | **20** |
| Already built in the prototype | 14 |
| **Still missing** | **6** |
| Prototype pages with no live equivalent (requirements-driven) | 1 |
| URLs excluded as duplicates, errors or non-pages | 6 |

---

## Missing pages, grouped

### Events & conferences

| | |
|---|---|
| **Page title** | The 28th Annual Trauma Care Conference |
| **Live URL** | `https://www.traumacare.org.uk/yarnfield2026` |
| **Suggested route** | `conference-2026.html` |
| **Contains** | The completed March 2026 conference — "Linking the Chain of Survival", 9–12 March 2026, Slater + Gordon platinum credit, a "Thank you to all who attended!" message to delegates, exhibitors, speakers and programme leads, and a save-the-date block for the 29th. |

**This is the same template as `conference.html`, in a past state.** It is not a
separate design: it is an `event` post whose date has passed, so the booking band
is replaced by a thank-you band. Build it as the conference template's *past*
variant, not as a second static page. Reached only from the events page — the
header points at the 2027 conference.

### Shop

| | |
|---|---|
| **Page title** | Trauma Care Online Shop |
| **Live URL** | `https://www.traumacare.org.uk/online-shop` |
| **Suggested route** | `shop.html` *(already a stub target — links across the prototype point at it)* |
| **Contains** | Three in-page categories — Books/Manuals, Clothing, Accessories — with a sub-navigation. **12 distinct products**, each a card with a category label, title, long description, one or more prices and a *Shop now* button. Includes *The Acci* (paperback £18.05 / hardback £23.84), the Trauma Care Pre-Hospital Manual (£43.95) and the Trauma Care Manual 3rd Edition. Prices run £1.00–£49.95, all marked "postage included". One product shows **Sold out**. |

**No individual product pages exist.** Every *Shop now* opens a Kartra checkout
popup keyed to a product id. See the dynamic-types section below.

### CPD / webinars

| | |
|---|---|
| **Page title** | Webinar Recordings |
| **Live URL** | `https://traumacareuk.kartra.com/page/lWH518` |
| **Suggested route** | `video-library.html` *(already a stub target)* |
| **Contains** | The public recordings library. Four YouTube playlist embeds, one per year — **2026, 2025, 2024, 2023** — under a *Webinar recordings* heading, plus the catch-up line ("over 200 more webinars available in the Member's Portal"), a link to the YouTube channel, and the Edition 30 poster download with *View previous posters*. |

Note the mismatch: its `<title>` is "Trauma Care Free CPD Webinars", the same as
the upcoming-webinars page.

### Legal / utility

| | |
|---|---|
| **Page title** | Privacy Statement |
| **Live URL** | `https://www.traumacare.org.uk/privacy` |
| **Suggested route** | `privacy.html` *(already a stub target)* |
| **Contains** | Eleven sections: Who are we · How do we collect your information · What types of information do we hold · Why do we collect it · Who has access · Your choices · How do we protect your data · Use of cookies and automated decision making · Links to other websites · Review of this statement. Long-form legal prose; no interactive elements. |

| | |
|---|---|
| **Page title** | Terms and Conditions |
| **Live URL** | `https://www.traumacare.org.uk/termsandconditions` |
| **Suggested route** | `terms.html` *(already a stub target)* |
| **Contains** | Nine policies on one page: Communications · Purchase, Discounts, Refunds & Cancellation · Environmental · Legal · Social Media · Best Practice · Public Information · Equality, Diversity and Inclusion · Disclaimer. |

| | |
|---|---|
| **Page title** | Ticket Cancellation & Refund Policy |
| **Live URL** | `https://traumacareuk.kartra.com/page/e9b520` |
| **Suggested route** | `cancellation.html` *(already a stub target)* |
| **Contains** | Seven numbered sections: Overview · Attendee-initiated cancellations (donation option, 30-day notice period, late cancellations) · Charity-initiated cancellations · Refund process · Limitation of liability · Communication · Terms of member discounts, plus transferability and non-attendance. |

**Its `<title>` says "Trauma Care - Terms and Conditions"** — wrong, and it makes
the page indistinguishable from `/termsandconditions` in search results and
browser history. Fix on rebuild.

---

## Already built — 14 of 20

| Live URL | Prototype |
|---|---|
| `/` | `index.html` |
| `/Yarnfield2027` | `conference.html` |
| `/events` | `events.html` |
| `/sponsorship` | `corporate-sponsorship.html` |
| `/support-us` | `fundraise.html` |
| `/fellowship-award` | `about-fellowship.html` |
| `/ourpeople` | `about-team.html` |
| `/ryanlecture` | `about-ryan-lecture.html` |
| `/Contact` | `contact.html` |
| `/academicpartners` | `academic-partners.html` |
| `/webinars-2026` | `webinars.html` |
| `/CPD-Posters` | `cpd-posters.html` |
| `/past-cpd-posters` | `cpd-posters.html#archive` — **merged**, see `template-map.md` |
| `/members` | `membership.html` |

## Prototype pages with no live equivalent

Requirements-driven, not live-derived. Nobody should go looking for source
content on the live site.

| Prototype | Basis |
|---|---|
| `courses.html` | Requirements §1, flexible landing page. `/courses`, `/education`, `/training`, `/fit` and `/foundations-in-trauma` all 404 |

`components.html` and `styleguide.html` are the internal pattern library and
never ship, so they are outside this count entirely.

---

## Excluded, and why

| URL | Reason |
|---|---|
| `/home`, `/Home` | Byte-identical duplicates of `/` (202 KB each). Same page, three casings — a canonical-URL problem to fix on rebuild, not three pages |
| `/member` | 404. Linked from the contact page — **broken internal link on the live site** |
| `/Sys/Profile` | 404. Kartra member-profile route, linked from the privacy page. Member-only, and not a public page |
| `/shop`, `/webinars` | Return **HTTP 200** with a Kartra "asset does not exist" placeholder, rendered in Hindi. Deleted assets, not pages. Worth noting: they answer 200, so any uptime or SEO check will call them healthy |
| `app.kartra.com/…id=tnRSmpDgKxdT` | Resolves to 404. Linked from the sponsorship page's Platinum benefits list — **a second broken internal link** |
| PDFs (30 CPD poster editions, sponsorship pack, annual report) | Downloads, not pages. Already handled — see `cpd-posters.html` |
| `bbaconference.org`, `slatergordon.co.uk`, `galen-pharma.com`, `journals.sagepub.com`, YouTube, Zoom, Ticket Tailor, PayPal | External |

---

## Dynamic and repeating structures

These need **one template each**, not one page per item. Several are already
built that way; the rest matter for the pages still to come.

| Structure | Where it appears | Status |
|---|---|---|
| **Shop products** | 12 products in 3 categories on one page; no individual product URLs | **Not built.** Needs a `product` post type — category, title, description, one or more price points, sold-out flag, checkout link. Decide whether single-product pages are wanted: the live site has none, but 12 products with descriptions this long are worth indexing |
| **Webinar recordings by year** | 4 YouTube playlist embeds, 2023–2026, one block each | **Not built.** A repeating year block, not four hand-built sections — 2027 must not need a developer |
| **Conference editions** | 28th (past) and 29th (upcoming) — same layout, different state | Partly built. `conference.html` is the upcoming state; the past state is the same template with the booking band swapped for a thank-you band |
| **Legal pages** | Privacy, terms, cancellation | **Not built.** Three pages, one shape: long-form policy prose in numbered sections. **One legal template serves all three**, and `accessibility.html` and `cookies.html` when they arrive |
| **CPD poster editions** | 30 editions | ✅ Built as a `poster` post type on `cpd-posters.html` |
| **Webinars** | One upcoming session; the archive on YouTube | ✅ Built as `.tc-featured-event` on `webinars.html` |
| **People** | Patrons, trustees, management, ops team on one page | ✅ Built as `person` + group taxonomy on `about-team.html` |
| **Fellows** | Fellowship roll | ✅ Built on `about-fellowship.html` |
| **Ryan lecturers** | Year + name roll | ✅ Built as `.tc-roll` |
| **Membership tiers** | 2 tiers after the Student decision | ✅ Built as `.tc-tier` |
| **Sponsorship packages** | 3 packages | ✅ Built as `.tc-tier` |
| **Sponsor / partner logos** | Strip on 9 pages | ✅ Options-page repeater |
| **FAQs** | Contact page | ✅ Native `<details>` repeater |

---

## Stub targets with no live page behind them

The prototype currently stubs **26 targets**. Five of them are missing pages
listed above (`shop`, `video-library`, `privacy`, `terms`, `cancellation`). The
rest have **no live equivalent** — they come from the requirements document and
the members-area map:

`about.html` · `about-impact.html` · `accessibility.html` · `cookies.html`
(and `#settings`) · `cpd.html` · `donate.html` · `education.html` ·
`event-register.html` · `exhibit-sponsor.html` · `journal.html` ·
`membership-join.html` · `news.html` · `partners.html` · `resources.html` ·
`volunteer.html` · and five `members/*` routes (`dashboard`, `login`,
`my-bookings`, `my-details`, `payment-method`).

`conference-2026.html` is **not** currently a stub target and needs adding when
that page is built.

`donate.html` is the third of the four flexible landing pages in requirements §1;
`campaign.html` is the fourth and is not stubbed anywhere yet.

---

## Three live-site defects this crawl surfaced

1. **Two broken internal links.** `/member` (from the contact page) and Kartra
   page `tnRSmpDgKxdT` (from the sponsorship page) both 404.
2. **Deleted assets answer HTTP 200.** `/shop` and `/webinars` return a Kartra
   placeholder with a success status, so monitoring will not catch them.
3. **The home page has three URLs** — `/`, `/home`, `/Home` — with no canonical
   link between them.
