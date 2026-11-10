/* VikingGOLD – közös viselkedés */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  // telefon / érintőképernyő: a nehéz effekteket (szikrák, parallax) kihagyjuk, hogy ne laggoljon
  var LITE = matchMedia('(max-width:900px), (hover:none) and (pointer:coarse)').matches;
  if (LITE) document.documentElement.classList.add('lite');

  // felhasználói menü
  var uic = $('#uic'), um = $('#umenu');
  if (uic && um) {
    uic.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var open = um.hidden;
      um.hidden = !open;
      uic.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (ev) {
      if (!um.hidden && !um.contains(ev.target)) { um.hidden = true; uic.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') um.hidden = true; });
  }

  // mobil menü
  var bg = $('#burger'), nav = $('#nav');
  if (bg && nav) bg.addEventListener('click', function () {
    var o = nav.classList.toggle('open');
    bg.setAttribute('aria-expanded', o ? 'true' : 'false');
  });

  // megjelenési animáció görgetéskor
  var rv = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && rv.length) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  // számlálók
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var to = parseFloat(el.dataset.count), suf = el.dataset.suf || '', dec = +(el.dataset.dec || 0);
    if (isNaN(to)) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = to.toFixed(dec) + suf; return; }
    var t0 = performance.now(), d = 1400;
    (function f(t) {
      var k = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - k, 3);
      el.textContent = (to * e).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  });
})();

/* ===== Tartalomvédelem: nem kijelölhető / másolható szöveg (egér, érintés, billentyűzet) ===== */
(function () {
  var isField = function (t) { return !!(t && t.closest && t.closest('input,textarea,select,[contenteditable="true"]')); };
  var stop = function (e) { if (!isField(e.target)) { e.preventDefault(); return false; } };
  ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart'].forEach(function (n) { document.addEventListener(n, stop, true); });
  // hosszú nyomás / kijelölés telefonon: ha mégis lenne kijelölés, azonnal megszűnik
  document.addEventListener('selectionchange', function () {
    var a = document.activeElement;
    if (a && /^(INPUT|TEXTAREA)$/.test(a.tagName)) return;
    var s = window.getSelection && window.getSelection();
    if (s && s.rangeCount && !s.isCollapsed) s.removeAllRanges();
  });
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase(), c = e.ctrlKey || e.metaKey;
    var blockCombo = c && ['c', 'x', 'a', 'u', 's', 'p'].indexOf(k) > -1 && !isField(e.target);
    var devtools = e.key === 'F12' || (c && e.shiftKey && ['i', 'j', 'c'].indexOf(k) > -1) || (e.metaKey && e.altKey && ['i', 'j', 'u'].indexOf(k) > -1);
    if (blockCombo || devtools) { e.preventDefault(); e.stopPropagation(); return false; }
  }, true);
})();
