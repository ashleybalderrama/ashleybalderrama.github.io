/* Ashley Balderrama portfolio: shared behavior for every page. No need to edit. */
(function () {
  var params = new URLSearchParams(location.search);
  var guide = params.has('guide');
  if (guide) document.body.classList.add('guide');

  // Preview other accent colors by adding ?accent=sand (or peach, clay, olive) to the address.
  var ACCENTS = { sand: '#E3D5C0', peach: '#EBCBB5', clay: '#DDBDB4', olive: '#D2D1B2', sky: '#B8D8F0' };
  if (ACCENTS[params.get('accent')]) document.documentElement.style.setProperty('--accent', ACCENTS[params.get('accent')]);

  // Load <dir>/<file> (dir is images unless stated); otherwise mark the slot empty.
  function loadInto(el, file, remote, alt, lazy, dir) {
    var img = new Image(), triedRemote = false;
    if (lazy) img.loading = 'lazy';
    img.alt = alt || '';
    img.decoding = 'async';
    img.onload = function () { el.classList.add('is-filled'); el.classList.remove('is-empty'); el.style.aspectRatio = ''; };
    img.onerror = function () {
      if (remote && !triedRemote) { triedRemote = true; img.src = remote; }
      else { img.remove(); el.classList.add('is-empty'); el.style.aspectRatio = ''; }
    };
    img.src = (dir || 'images') + '/' + file;
    el.prepend(img);
  }
  function addNote(el, file, brief, dir) {
    var note = document.createElement('span');
    note.className = 'slot-note';
    var name = document.createElement('b');
    name.textContent = (dir || 'images') + '/' + file;
    note.append(name, document.createTextNode(brief || ''));
    el.append(note);
  }

  // Fixed slots (hero, client work, about)
  document.querySelectorAll('[data-file]').forEach(function (el) {
    loadInto(el, el.dataset.file, el.dataset.remote, el.hasAttribute('data-thumb') ? '' : el.dataset.alt, false, el.dataset.dir);
    if (!el.hasAttribute('data-thumb')) addNote(el, el.dataset.file, el.dataset.brief, el.dataset.dir);
    if (el.classList.contains('zoom')) el.setAttribute('aria-label', 'View larger: ' + (el.dataset.alt || 'image'));
  });

  // Gallery
  var gallery = document.getElementById('gallery');
  var currentFilter = 'all';
  if (gallery) {
  var LIMIT = (typeof GALLERY_PREVIEW === 'number' && !guide) ? GALLERY_PREVIEW : 0;
  var expanded = false, frameCount = 0;
  var moreBtn = document.getElementById('gallery-more');
  function isVisible(fr) {
    if (currentFilter !== 'all') return fr.dataset.cat === currentFilter;
    return !LIMIT || expanded || Number(fr.dataset.idx) < LIMIT;
  }
  function updateMore() {
    if (!moreBtn) return;
    var total = gallery.querySelectorAll('.frame').length;
    moreBtn.hidden = !(currentFilter === 'all' && LIMIT && !expanded && total > LIMIT);
    moreBtn.textContent = 'Show all ' + total + ' photos';
  }
  function applyFilter() {
    gallery.querySelectorAll('.frame').forEach(function (fr) { fr.hidden = !isVisible(fr); });
    updateMore();
  }
  if (moreBtn) moreBtn.addEventListener('click', function () { expanded = true; applyFilter(); });
  function addFrame(item) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'frame slot zoom';
    b.dataset.cat = item.cat;
    b.dataset.caption = item.caption || '';
    if (item.ratio) b.style.aspectRatio = item.ratio;
    b.dataset.idx = String(frameCount++);
    b.hidden = !isVisible(b);
    b.setAttribute('aria-label', item.caption ? 'View larger: ' + item.caption : 'View larger');
    gallery.append(b);
    updateMore();
    loadInto(b, item.file, null, item.caption, Boolean(item.ratio), 'gallery');
    addNote(b, item.file, '', 'gallery');
  }
  GALLERY.forEach(addFrame);

  // Pick up extra photos uploaded with the next number in each category.
  var PREFIX = { documentary: 'doc', branding: 'brand', portrait: 'portrait', events: 'event' };
  var EXT = ['jpg', 'jpeg', 'png'];
  Object.keys(PREFIX).forEach(function (cat) {
    var prefix = PREFIX[cat], n = 0;
    GALLERY.forEach(function (g) {
      var m = g.file.match(new RegExp('^' + prefix + '-(\\d+)\\.'));
      if (m) n = Math.max(n, Number(m[1]));
    });
    (function next() {
      n += 1;
      if (n > 60) return;
      var base = prefix + '-' + String(n).padStart(2, '0');
      (function tryExt(i) {
        if (i >= EXT.length) return;                 // nothing with this number: stop looking
        var file = base + '.' + EXT[i], probe = new Image();
        probe.onload = function () { addFrame({ file: file, cat: cat, caption: CAPTIONS[file] || '' }); next(); };
        probe.onerror = function () { tryExt(i + 1); };
        probe.src = 'gallery/' + file;
      })(0);
    })();
  });

  // Gallery filter
  var filterButtons = document.querySelectorAll('.filters button');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentFilter = btn.dataset.filter;
      filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      applyFilter();
    });
  });

  } // end gallery

  // Enlarge view, for the gallery and the client images
  var box = document.getElementById('lightbox');
  var boxImg = box.querySelector('img'), boxCap = box.querySelector('p');
  var group = [], current = -1;
  function show(el) {
    var img = el.querySelector('img');
    if (!img) return;
    var scope = el.closest('[data-zoomgroup]') || document;
    group = Array.prototype.filter.call(scope.querySelectorAll('.zoom.is-filled'), function (x) { return !x.hidden; });
    current = group.indexOf(el);
    boxImg.src = img.currentSrc || img.src;
    boxImg.alt = el.dataset.alt || el.dataset.caption || '';
    boxCap.textContent = el.dataset.caption || '';
    box.querySelectorAll('[data-step]').forEach(function (b) { b.hidden = group.length < 2; });
    if (!box.open) box.showModal();
  }
  function step(n) {
    if (group.length < 2) return;
    show(group[(current + n + group.length) % group.length]);
  }
  document.addEventListener('click', function (e) {
    var z = e.target.closest ? e.target.closest('.zoom') : null;
    if (z && z.classList.contains('is-filled')) show(z);
  });
  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.hasAttribute('data-close')) box.close();
    else if (e.target.dataset.step) step(Number(e.target.dataset.step));
  });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  // Specialty portfolios: show a card for each link that has been filled in.
  var deckSection = document.getElementById('portfolios'), deckList = document.getElementById('deck-list');
  if (deckList) PORTFOLIOS.forEach(function (p) {
    if (!p.url && !guide) return;
    var li = document.createElement('li');
    var a = document.createElement(p.url ? 'a' : 'div');
    if (p.url) { a.href = p.url; a.target = '_blank'; a.rel = 'noopener'; } else { a.className = 'deck-todo'; }
    var t = document.createElement('span'); t.className = 'deck-title'; t.textContent = p.title;
    var g = document.createElement('span'); g.className = 'deck-go';
    var where = /canva\./.test(p.url) ? 'View the deck on Canva' : /sway\./.test(p.url) ? 'View the presentation on Sway' : 'View the portfolio';
    g.textContent = p.url ? where : 'No link yet: add it under PORTFOLIOS in content.js';
    a.append(t, g); li.append(a); deckList.append(li);
    if (p.cover) {
      var c = document.createElement('span');
      c.className = 'slot deck-cover';
      a.prepend(c);
      loadInto(c, p.cover, null, '');
      addNote(c, p.cover, "Screenshot of this deck's title slide. Horizontal 16:9.");
    }
  });
  if (deckList && deckList.children.length) deckSection.hidden = false;

  // Only show the résumé button once resume.pdf has been uploaded next to this file.
  var resumeLink = document.getElementById('resume-link');
  if (resumeLink) fetch('resume.pdf', { method: 'HEAD' })
    .then(function (r) { if (r.ok) resumeLink.hidden = false; })
    .catch(function () {});

  // A link such as strategy.html#warren-underground opens that client.
  function openFromHash() {
    var t = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (t && t.tagName === 'DETAILS') { t.open = true; t.scrollIntoView(); }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
