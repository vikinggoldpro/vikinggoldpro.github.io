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


  // sportági háttér: kóddal rajzolt, színátmenetes négyzetek sportrajzokkal – nincs külső képfájl
  (function () {
    if (document.querySelector('.bgfx')) return;
    var KEYS = ['labdarugas', 'jegkorong', 'kezilabda', 'kosarlabda', 'tenisz'];
    var w = document.createElement('div');
    w.className = 'bgfx'; w.setAttribute('aria-hidden', 'true');
    var cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;display:block;transition:opacity .4s ease';
    w.appendChild(cv); document.body.insertBefore(w, document.body.firstChild);
    var cur = null, CX = cv.getContext('2d');

    var TH = {
      fooldal:    { a: '#0a1236', b: '#2b4fd8', c: '#ffd24a', d: '#8b5cf6', icons: ['soccer', 'puck', 'handball', 'basket', 'tennis', 'racket', 'hoop', 'stick', 'goal'] },
      labdarugas: { a: '#04260f', b: '#18a24a', c: '#6ee7a0', d: '#065f46', icons: ['soccer', 'goal', 'soccer', 'cone'] },
      jegkorong:  { a: '#05234a', b: '#1f8fe6', c: '#9be1ff', d: '#1e40af', icons: ['puck', 'stick', 'puck', 'flake'] },
      kezilabda:  { a: '#14307d', b: '#f59e0b', c: '#ffd36b', d: '#2563eb', icons: ['handball', 'goal', 'handball'] },
      kosarlabda: { a: '#35120a', b: '#f0791c', c: '#ffc58a', d: '#9a3412', icons: ['basket', 'hoop', 'basket'] },
      tenisz:     { a: '#082b66', b: '#2f7de1', c: '#d9f24a', d: '#1d4ed8', icons: ['tennis', 'racket', 'tennis'] },
      vip:        { a: '#0a0702', b: '#6b4a08', c: '#f5c518', d: '#b45309', icons: ['crown', 'star', 'crown'] }
    };
    function rgba(h, a) { var n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')'; }
    function rng(s) { return function () { s |= 0; s = s + 0x6D2B79F5 | 0; var t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    function circ(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, 6.2832); }
    function pent(c, x, y, r, rot) { c.beginPath(); for (var i = 0; i < 5; i++) { var a = rot + i * 1.2566; c[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r); } c.closePath(); }

    /* ---- sportrajzok (x,y = közép, r = sugár) ---- */
    var IC = {
      soccer: function (c, x, y, r) {
        circ(c, x, y, r); c.fillStyle = '#fff'; c.fill(); c.lineWidth = r * .07; c.strokeStyle = '#0f172a'; c.stroke();
        c.fillStyle = '#0f172a'; pent(c, x, y, r * .36, -1.5708); c.fill();
        c.save(); circ(c, x, y, r); c.clip();
        for (var i = 0; i < 5; i++) { var a = -1.5708 + i * 1.2566; c.beginPath(); c.moveTo(x + Math.cos(a) * r * .36, y + Math.sin(a) * r * .36); c.lineTo(x + Math.cos(a) * r * .72, y + Math.sin(a) * r * .72); c.stroke(); pent(c, x + Math.cos(a) * r * 1.0, y + Math.sin(a) * r * 1.0, r * .34, a + 3.1416); c.fill(); }
        c.restore();
      },
      basket: function (c, x, y, r) {
        circ(c, x, y, r); c.fillStyle = '#f97316'; c.fill(); c.lineWidth = r * .07; c.strokeStyle = '#431407'; c.stroke();
        c.beginPath(); c.moveTo(x, y - r); c.lineTo(x, y + r); c.moveTo(x - r, y); c.lineTo(x + r, y); c.stroke();
        c.save(); circ(c, x, y, r); c.clip(); c.beginPath(); c.arc(x - r * 1.45, y, r * 1.05, -.8, .8); c.stroke(); c.beginPath(); c.arc(x + r * 1.45, y, r * 1.05, Math.PI - .8, Math.PI + .8); c.stroke(); c.restore();
      },
      handball: function (c, x, y, r) {
        circ(c, x, y, r); c.fillStyle = '#f8fafc'; c.fill();
        c.save(); circ(c, x, y, r); c.clip(); c.fillStyle = '#2563eb'; c.beginPath(); c.arc(x - r * .9, y - r * .5, r * .9, 0, 6.3); c.fill(); c.beginPath(); c.arc(x + r * .95, y + r * .6, r * .8, 0, 6.3); c.fill(); c.restore();
        c.lineWidth = r * .07; c.strokeStyle = '#0f172a'; circ(c, x, y, r); c.stroke(); c.beginPath(); c.arc(x, y - r * 1.2, r * 1.1, .6, 2.5); c.stroke(); c.beginPath(); c.arc(x, y + r * 1.2, r * 1.1, 3.7, 5.6); c.stroke();
      },
      tennis: function (c, x, y, r) {
        circ(c, x, y, r); c.fillStyle = '#d9f24a'; c.fill();
        c.save(); circ(c, x, y, r); c.clip(); c.lineWidth = r * .12; c.strokeStyle = '#fff'; c.beginPath(); c.arc(x - r * 1.5, y, r * 1.15, -.8, .8); c.stroke(); c.beginPath(); c.arc(x + r * 1.5, y, r * 1.15, Math.PI - .8, Math.PI + .8); c.stroke(); c.restore();
      },
      puck: function (c, x, y, r) {
        c.fillStyle = '#0b1220'; c.beginPath(); c.ellipse(x, y + r * .22, r, r * .42, 0, 0, 6.3); c.fill(); c.fillRect(x - r, y - r * .2, r * 2, r * .42);
        c.fillStyle = '#1e293b'; c.beginPath(); c.ellipse(x, y - r * .2, r, r * .42, 0, 0, 6.3); c.fill();
        c.fillStyle = 'rgba(255,255,255,.25)'; c.beginPath(); c.ellipse(x - r * .25, y - r * .26, r * .45, r * .12, 0, 0, 6.3); c.fill();
      },
      stick: function (c, x, y, r) {
        c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = '#f8fafc'; c.lineWidth = r * .2; c.beginPath(); c.moveTo(x + r * .7, y - r); c.lineTo(x - r * .2, y + r * .6); c.lineTo(x - r * .85, y + r * .7); c.stroke();
        c.strokeStyle = '#e11d48'; c.lineWidth = r * .1; c.beginPath(); c.moveTo(x + r * .62, y - r * .85); c.lineTo(x + r * .4, y - r * .45); c.stroke();
      },
      flake: function (c, x, y, r) {
        c.lineCap = 'round'; c.strokeStyle = '#fff'; c.lineWidth = r * .12;
        for (var i = 0; i < 3; i++) { var a = i * 1.0472; c.beginPath(); c.moveTo(x - Math.cos(a) * r, y - Math.sin(a) * r); c.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); c.stroke(); }
      },
      goal: function (c, x, y, r) {
        var W = r * 2, H = r * 1.3, l = x - r, t = y - H / 2;
        c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = r * .03;
        for (var i = 1; i < 8; i++) { c.beginPath(); c.moveTo(l + W * i / 8, t); c.lineTo(l + W * i / 8, t + H); c.stroke(); }
        for (i = 1; i < 5; i++) { c.beginPath(); c.moveTo(l, t + H * i / 5); c.lineTo(l + W, t + H * i / 5); c.stroke(); }
        c.strokeStyle = '#fff'; c.lineWidth = r * .1; c.lineJoin = 'round'; c.beginPath(); c.moveTo(l, t + H); c.lineTo(l, t); c.lineTo(l + W, t); c.lineTo(l + W, t + H); c.stroke();
      },
      cone: function (c, x, y, r) {
        c.fillStyle = '#f97316'; c.beginPath(); c.moveTo(x, y - r); c.lineTo(x + r * .75, y + r * .8); c.lineTo(x - r * .75, y + r * .8); c.closePath(); c.fill();
        c.fillStyle = '#fff'; c.beginPath(); c.moveTo(x - r * .2, y - r * .35); c.lineTo(x + r * .2, y - r * .35); c.lineTo(x + r * .32, y + r * .05); c.lineTo(x - r * .32, y + r * .05); c.closePath(); c.fill();
        c.fillStyle = '#c2410c'; rr(c, x - r, y + r * .72, r * 2, r * .28, r * .08); c.fill();
      },
      hoop: function (c, x, y, r) {
        c.strokeStyle = '#fff'; c.lineWidth = r * .1; rr(c, x - r, y - r, r * 2, r * 1.15, r * .1); c.stroke(); rr(c, x - r * .38, y - r * .2, r * .76, r * .55, r * .04); c.stroke();
        c.strokeStyle = '#fb923c'; c.lineWidth = r * .14; c.beginPath(); c.ellipse(x, y + r * .4, r * .5, r * .13, 0, 0, 6.3); c.stroke();
        c.strokeStyle = 'rgba(255,255,255,.8)'; c.lineWidth = r * .04; for (var i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(x + i * r * .22, y + r * .42); c.lineTo(x + i * r * .13, y + r * 1.05); c.stroke(); }
        c.beginPath(); c.moveTo(x - r * .4, y + r * .75); c.lineTo(x + r * .4, y + r * .75); c.stroke();
      },
      racket: function (c, x, y, r) {
        c.save(); c.translate(x, y); c.rotate(-.7);
        c.strokeStyle = '#fff'; c.lineWidth = r * .12; c.beginPath(); c.ellipse(0, -r * .3, r * .55, r * .72, 0, 0, 6.3); c.stroke();
        c.save(); c.beginPath(); c.ellipse(0, -r * .3, r * .55, r * .72, 0, 0, 6.3); c.clip(); c.lineWidth = r * .03; c.strokeStyle = 'rgba(255,255,255,.75)';
        for (var i = -4; i <= 4; i++) { c.beginPath(); c.moveTo(i * r * .14, -r * 1.1); c.lineTo(i * r * .14, r * .5); c.stroke(); c.beginPath(); c.moveTo(-r * .6, -r * .3 + i * r * .17); c.lineTo(r * .6, -r * .3 + i * r * .17); c.stroke(); }
        c.restore(); c.lineWidth = r * .16; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, r * .42); c.lineTo(0, r * 1.05); c.stroke(); c.restore();
      },
      crown: function (c, x, y, r) {
        c.fillStyle = '#f5c518'; c.beginPath(); c.moveTo(x - r, y + r * .6); c.lineTo(x - r, y - r * .5); c.lineTo(x - r * .5, y); c.lineTo(x, y - r * .75); c.lineTo(x + r * .5, y); c.lineTo(x + r, y - r * .5); c.lineTo(x + r, y + r * .6); c.closePath(); c.fill();
        c.fillStyle = '#b45309'; c.fillRect(x - r, y + r * .6, r * 2, r * .22);
      },
      star: function (c, x, y, r) {
        c.fillStyle = '#fde68a'; c.beginPath(); for (var i = 0; i < 10; i++) { var a = -1.5708 + i * .6283, d = i % 2 ? r * .45 : r; c[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * d, y + Math.sin(a) * d); } c.closePath(); c.fill();
      }
    };

    function draw(k) {
      var th = TH[k] || TH.fooldal, D = Math.min(devicePixelRatio || 1, LITE ? 1 : 1.5);
      var W = innerWidth, H = innerHeight;
      cv.width = Math.round(W * D); cv.height = Math.round(H * D); var c = CX; c.setTransform(D, 0, 0, D, 0, 0);
      var R = rng(k.length * 977 + k.charCodeAt(0) * 31);
      /* alap: átlós színátmenet */
      var g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, th.a); g.addColorStop(.5, th.b); g.addColorStop(1, th.a); c.fillStyle = g; c.fillRect(0, 0, W, H);
      /* nagy fényfoltok */
      [[.15, 0, .7, th.c, .42], [.9, .25, .6, th.d, .5], [.5, 1.05, .8, th.c, .3]].forEach(function (s) {
        var rg = c.createRadialGradient(s[0] * W, s[1] * H, 0, s[0] * W, s[1] * H, s[2] * Math.max(W, H)); rg.addColorStop(0, rgba(s[3], s[4])); rg.addColorStop(1, rgba(s[3], 0)); c.fillStyle = rg; c.fillRect(0, 0, W, H);
      });
      /* színátmenetes négyzetek */
      var T = Math.max(88, Math.round(Math.min(W, 1500) / 10)), gap = Math.round(T * .09), cols = Math.ceil(W / T) + 1, rows = Math.ceil(H / T) + 1, ph = R() * 6, spots = [];
      for (var ry = 0; ry < rows; ry++) for (var cx = 0; cx < cols; cx++) {
        var x = cx * T, y = ry * T, u = (x / W + y / H) / 2, wv = (Math.sin(u * 7 + ph) + 1) / 2, rn = R();
        var tg = c.createLinearGradient(x, y, x + T, y + T);
        tg.addColorStop(0, rgba(th.c, .04 + .28 * wv)); tg.addColorStop(1, rgba(th.d, .08 + .3 * wv));
        rr(c, x + gap, y + gap, T - gap * 2, T - gap * 2, T * .16); c.fillStyle = tg; c.fill();
        c.lineWidth = 1.5; c.strokeStyle = 'rgba(255,255,255,' + (.05 + .13 * wv).toFixed(3) + ')'; c.stroke();
        if (rn < .07) { rr(c, x + gap, y + gap, T - gap * 2, T - gap * 2, T * .16); c.fillStyle = rgba(th.c, .35); c.fill(); }
        if (R() < (LITE ? .16 : .22)) spots.push([x + T / 2, y + T / 2]);
      }
      /* rajzok a négyzeteken */
      spots.forEach(function (p, i) {
        var ic = th.icons[(i + (R() * 3 | 0)) % th.icons.length], r = T * (.26 + R() * .1);
        c.save(); c.globalAlpha = .55 + R() * .4; c.translate(p[0], p[1]); c.rotate((R() - .5) * .6);
        c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = r * .4; c.shadowOffsetY = r * .15;
        IC[ic](c, 0, 0, r); c.restore();
      });
    }

    function pick() {
      var pg = document.body.dataset.page, s = new URLSearchParams(location.search).get('s');
      if (/vip/i.test(location.pathname) || pg === 'vip') return 'vip';
      if (pg === 'tippek') {
        if (KEYS.indexOf(s) > -1) return s;
        try { var x = localStorage.getItem('vg_sport'); if (KEYS.indexOf(x) > -1) return x; } catch (e) { }
        return 'jegkorong';
      }
      return 'fooldal';
    }
    window.vgBg = function (k) {
      k = k || pick(); if (k === cur) return;
      var first = cur === null; cur = k; document.body.setAttribute('data-bg', k);
      if (first) { draw(k); return; }
      cv.style.opacity = 0; setTimeout(function () { draw(k); cv.style.opacity = 1; }, 320);
    };
    var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { if (cur) draw(cur); }, 200); });
    vgBg();
  })();

  // háttér: finom szikrák
  var cv = document.getElementById('fx');
  if (cv && LITE) cv.style.display = 'none';
  if (cv && !LITE && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var x = cv.getContext('2d'), W, H, P = [];
    var rs = function () {
      W = cv.width = innerWidth; H = cv.height = innerHeight;
      P = Array.from({ length: Math.min(45, Math.floor(W / 30)) }, function () {
        return { x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.7 + .4, vy: -(Math.random() * .3 + .06), vx: (Math.random() - .5) * .15, a: Math.random() * .5 + .12, c: Math.random() < .5 ? '56,189,248' : '168,85,247' };
      });
    };
    rs(); addEventListener('resize', rs);
    (function f() {
      if (!document.hidden) {
        x.clearRect(0, 0, W, H);
        P.forEach(function (p) {
          p.x += p.vx; p.y += p.vy;
          if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
          x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283);
          x.fillStyle = 'rgba(' + p.c + ',' + p.a + ')'; x.fill();
        });
      }
      requestAnimationFrame(f);
    })();
  }
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
