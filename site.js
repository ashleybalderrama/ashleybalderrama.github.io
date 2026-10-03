/* Ashley Balderrama portfolio: shared behavior for every page. No need to edit. */
(function () {
  var params = new URLSearchParams(location.search);
  var guide = params.has('guide');
  if (guide) document.body.classList.add('guide');

  // Preview other accent colors by adding ?accent=sand (or peach, clay, olive) to the address.
  var ACCENTS = { sand: '#E3D5C0', peach: '#EBCBB5', clay: '#DDBDB4', olive: '#D2D1B2', sky: '#B8D8F0' };
  if (ACCENTS[params.get('accent')]) document.documentElement.style.setProperty('--accent', ACCENTS[params.get('accent')]);

  // Load images/<file>; fall back to a starter image if one is set; otherwise mark the slot empty.
  function loadInto(el, file, remote, alt) {
    var img = new Image(), triedRemote = false;
    img.alt = alt || '';
    img.decoding = 'async';
    img.onload = function () { el.classList.add('is-filled'); el.classList.remove('is-empty'); el.style.aspectRatio = ''; };
    img.onerror = function () {
      if (remote && !triedRemote) { triedRemote = true; img.src = remote; }
      else { img.remove(); el.classList.add('is-empty'); el.style.aspectRatio = ''; }
    };
    img.src = 'images/' + file;
    el.prepend(img);
  }
  function addNote(el, file, brief) {
    var note = document.createElement('span');
    note.className = 'slot-note';
    var name = document.createElement('b');
    name.textContent = 'images/' + file;
    note.append(name, document.createTextNode(brief || ''));
    el.append(note);
  }

  // Fixed slots (hero, client work, about)
  document.querySelectorAll('[data-file]').forEach(function (el) {
    loadInto(el, el.dataset.file, el.dataset.remote, el.hasAttribute('data-thumb') ? '' : el.dataset.alt);
    if (!el.hasAttribute('data-thumb')) addNote(el, el.dataset.file, el.dataset.brief);
    if (el.classList.contains('zoom')) el.setAttribute('aria-label', 'View larger: ' + (el.dataset.alt || 'image'));
  });

  // Gallery
  var gallery = document.getElementById('gallery');
  var currentFilter = 'all';
  if (gallery) {
  function addFrame(item) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'frame slot zoom';
    b.dataset.cat = item.cat;
    b.dataset.caption = item.caption || '';
    if (item.ratio) b.style.aspectRatio = item.ratio;
    b.hidden = !(currentFilter === 'all' || currentFilter === item.cat);
    b.setAttribute('aria-label', item.caption ? 'View larger: ' + item.caption : 'View larger');
    gallery.append(b);
    loadInto(b, item.file, item.remote, item.caption);
    addNote(b, item.file, item.remote ? 'Showing a starter photo from your site until you upload this file.' : '');
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
        probe.src = 'images/' + file;
      })(0);
    })();
  });

  // Gallery filter
  var filterButtons = document.querySelectorAll('.filters button');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentFilter = btn.dataset.filter;
      filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      gallery.querySelectorAll('.frame').forEach(function (fr) {
        fr.hidden = !(currentFilter === 'all' || fr.dataset.cat === currentFilter);
      });
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
