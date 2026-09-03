/* ==========================================================================
   TRAUMA CARE — SITE SCRIPT
   --------------------------------------------------------------------------
   Plain ES5-compatible script, no build step, no modules — so every page
   works when opened directly from the file system as well as over HTTP.

   Progressive enhancement is the rule. With this file removed:
     · every submenu opens on hover or focus, so no destination is lost
       (the dropdown parents have no landing page of their own, as on the
       live site, so the panel is the only route to their children)
     · the mobile navigation renders in full, expanded, in the document flow
     · the search form renders inline instead of behind a toggle
     · the listing filter panel renders open
   Nothing becomes unreachable. The `js` class that switches between those
   states is set by an inline script in <head>, not here, so it applies
   before first paint.

   In the WordPress theme this is enqueued as one handle in the footer.
   ========================================================================== */

(function () {
  'use strict';

  var DESKTOP = window.matchMedia('(min-width: 1280px)');
  var HOVER_OPEN_DELAY = 120;
  var HOVER_CLOSE_DELAY = 220;

  /* ------------------------------------------------------------------
     Sticky header — adds a shadow once the page has scrolled.
     ------------------------------------------------------------------ */

  function initStickyHeader() {
    var header = document.querySelector('[data-site-header]');
    if (!header) return;

    var ticking = false;

    function update() {
      header.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ------------------------------------------------------------------
     Primary navigation

     Disclosure pattern (WAI-ARIA APG). Each submenu is owned by its own
     button, which carries aria-expanded and aria-controls. The sibling
     link stays a real link to the section landing page, so the parent
     item is reachable by keyboard and by screen reader — the specific
     failure on the current site.

     Open/closed state lives in the markup, so this script only reacts to
     interaction; it does not normalise the page on load.
     ------------------------------------------------------------------ */

  function initNavigation() {
    var nav = document.querySelector('[data-nav]');
    var navToggle = document.querySelector('[data-nav-toggle]');
    if (!nav) return;

    var toggles = Array.prototype.slice.call(
      nav.querySelectorAll('[data-submenu-toggle]')
    );

    function panelFor(toggle) {
      return document.getElementById(toggle.getAttribute('aria-controls'));
    }

    function isOpen(toggle) {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    function setSubmenu(toggle, open) {
      var panel = panelFor(toggle);
      if (!panel) return;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
    }

    function closeAllSubmenus(except) {
      toggles.forEach(function (toggle) {
        if (toggle !== except) setSubmenu(toggle, false);
      });
    }

    function closeDrawer() {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('tc-nav-open');
      closeAllSubmenus(null);
    }

    toggles.forEach(function (toggle) {
      var item = toggle.closest('.tc-nav__item');
      var openTimer = null;
      var closeTimer = null;

      /* Click / Enter / Space — the canonical interaction, and the only
         one available on touch. */
      toggle.addEventListener('click', function () {
        if (isOpen(toggle)) {
          setSubmenu(toggle, false);
        } else {
          closeAllSubmenus(toggle);
          setSubmenu(toggle, true);
        }
      });

      /* Pointer users on desktop expect hover. Intent delays stop the
         menu flickering as the pointer crosses the bar. */
      item.addEventListener('mouseenter', function () {
        if (!DESKTOP.matches) return;
        window.clearTimeout(closeTimer);
        openTimer = window.setTimeout(function () {
          closeAllSubmenus(toggle);
          setSubmenu(toggle, true);
        }, HOVER_OPEN_DELAY);
      });

      item.addEventListener('mouseleave', function () {
        if (!DESKTOP.matches) return;
        window.clearTimeout(openTimer);
        closeTimer = window.setTimeout(function () {
          setSubmenu(toggle, false);
        }, HOVER_CLOSE_DELAY);
      });

      /* Tabbing out of the item closes it. Without this a keyboard user
         leaves an open panel behind them. */
      item.addEventListener('focusout', function (event) {
        if (!DESKTOP.matches) return;
        if (!item.contains(event.relatedTarget)) setSubmenu(toggle, false);
      });

      /* The chevron is hidden in the markup so that with this script absent
         it is not left as a control that does nothing. */
      toggle.hidden = false;
    });

    /* Escape closes the open submenu and returns focus to its button. */
    nav.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;

      var open = toggles.filter(isOpen)[0];
      if (open) {
        setSubmenu(open, false);
        open.focus();
        return;
      }

      if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
        closeDrawer();
        navToggle.focus();
      }
    });

    /* A click anywhere else dismisses open panels. */
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) closeAllSubmenus(null);
    });

    /* Mobile drawer. Above the breakpoint the stylesheet shows the nav and
       hides this button regardless of these classes, so no resize handling
       is needed to keep the two in step. */
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        if (navToggle.getAttribute('aria-expanded') === 'true') {
          closeDrawer();
        } else {
          nav.classList.add('is-open');
          navToggle.setAttribute('aria-expanded', 'true');
          document.body.classList.add('tc-nav-open');
        }
      });
    }
  }

  /* ------------------------------------------------------------------
     Disclosures — the search panel and the listing filter panel.

     Two modes:

     · Default — shown and hidden with the `hidden` attribute.

     · data-disclosure-open-above="900" — shown and hidden with an
       `is-open` class instead, and its CSS pins it open above that width
       while hiding the toggle. Visibility is therefore owned by the
       stylesheet: the panel is correct at every width even if no resize or
       matchMedia event ever reaches this script, and no `hidden` attribute
       is left contradicting what is on screen.

     data-disclosure-focus moves focus into the panel on open, for the
     search field.
     ------------------------------------------------------------------ */

  function initDisclosures() {
    var toggles = document.querySelectorAll('[data-disclosure-toggle]');

    Array.prototype.forEach.call(toggles, function (toggle) {
      var panel = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!panel) return;

      var usesClass = toggle.hasAttribute('data-disclosure-open-above');
      var focusTarget = toggle.hasAttribute('data-disclosure-focus')
        ? panel.querySelector('input, select, textarea')
        : null;

      function setOpen(open) {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');

        if (usesClass) {
          panel.classList.toggle('is-open', open);
        } else {
          panel.hidden = !open;
        }

        if (open && focusTarget) focusTarget.focus();
      }

      toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });

      panel.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        setOpen(false);
        toggle.focus();
      });
    });
  }

  /* ==================================================================
     Countdown — conference page

     Enhancement only. The heading above it carries the date, and the
     stylesheet hides the counter entirely without this script, so nothing
     is lost. aria-live is off deliberately: a per-second announcement
     would make the page unusable with a screen reader.
     ================================================================== */

  function initCountdown() {
    var root = document.querySelector('[data-countdown]');
    if (!root) return;

    var target = new Date(root.getAttribute('data-countdown')).getTime();
    if (isNaN(target)) return;

    var fields = {
      days: root.querySelector('[data-countdown-days]'),
      hours: root.querySelector('[data-countdown-hours]'),
      minutes: root.querySelector('[data-countdown-minutes]'),
      seconds: root.querySelector('[data-countdown-seconds]')
    };

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function tick() {
      var left = Math.max(0, target - Date.now());
      var seconds = Math.floor(left / 1000);

      fields.days.textContent = String(Math.floor(seconds / 86400));
      fields.hours.textContent = pad(Math.floor(seconds / 3600) % 24);
      fields.minutes.textContent = pad(Math.floor(seconds / 60) % 60);
      fields.seconds.textContent = pad(seconds % 60);

      if (left === 0) window.clearInterval(timer);
    }

    var timer = window.setInterval(tick, 1000);
    tick();
  }

  /* ------------------------------------------------------------------ */

  function init() {
    initStickyHeader();
    initNavigation();
    initDisclosures();
    initCountdown();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
