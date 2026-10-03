/* =====================================================================
   THINGS YOU CAN EDIT
   This file holds the Canva portfolio links and the gallery photo list.
   ===================================================================== */

/* Specialty portfolios (Canva, Sway or any other link). Paste each share link between the quotes.
   A card only shows once its link is filled in. */
var PORTFOLIOS = [
  { title: 'Portrait photography',            url: 'https://canva.link/hk7s9s4496ice00' },
  { title: 'Fashion and product photography', url: 'https://canva.link/x9eglllksfel73x' },
  { title: 'Retouching',                      url: 'https://sway.cloud.microsoft/d3YuBZ2fxdf5PK1P?ref=Link' },
  { title: 'Branding campaigns',              url: '' },
  { title: 'Writing',                         url: '' }
];

/* Gallery photographs, in the order they appear under "All work".
   cat is one of: documentary, branding, portrait, events.
   To add more, you don't need to edit this list: upload the next number
   in a category (doc-06.jpg, brand-08.jpg, portrait-04.jpg, event-03.jpg)
   and it appears on its own. Add a caption for it in CAPTIONS below if you like. */
var SQ = 'https://images.squarespace-cdn.com/content/v1/';
var GALLERY = [
  { file: 'brand-01.jpg',    cat: 'branding',    ratio: 0.665, caption: 'Personal branding session.' },
  { file: 'portrait-01.jpg', cat: 'portrait',    ratio: 0.666, caption: 'Studio portrait.' },
  { file: 'doc-01.jpg',      cat: 'documentary', ratio: 1.5,   caption: 'Two protesters face to face.' },
  { file: 'brand-02.jpg',    cat: 'branding',    ratio: 0.666, caption: 'Product photography, running shoes.' },
  { file: 'doc-02.jpg',      cat: 'documentary', caption: 'Drag March LA, April 2023.',
    remote: SQ + '62d63149f0b4ea38206a12a6/7ef7f01e-4f79-4f7f-9ec5-4e80a319b006/Drag-March-LA-040923-1.jpg?format=1500w' },
  { file: 'event-01.jpg',    cat: 'events',      ratio: 1.499, caption: 'Wedding portrait at sunset.' },
  { file: 'brand-03.jpg',    cat: 'branding',    ratio: 1.5,   caption: 'Personal branding session.' },
  { file: 'doc-03.jpg',      cat: 'documentary', caption: 'LAUSD and SEIU strike, March 2023.',
    remote: SQ + '62d63149f0b4ea38206a12a6/3c4c8266-792c-4752-9b34-41586fd0a4e6/LAUSD-SEIU-STRIKE_031523-15.jpg?format=1500w' },
  { file: 'brand-04.jpg',    cat: 'branding',    ratio: 0.663, caption: 'Athlete on the track.' },
  { file: 'portrait-02.jpg', cat: 'portrait',    caption: 'Portrait session, Los Angeles.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1687326858612-6I3NOZP84YYVM7T7PT24/00-124.jpg?format=1000w' },
  { file: 'doc-04.jpg',      cat: 'documentary', caption: 'Protest following the death of Tyre Nichols, Los Angeles, 2023.',
    remote: SQ + '62d63149f0b4ea38206a12a6/1ecafe20-519c-49cc-8159-fe9f5162c620/TyreNicholsLAPDProtest-29.jpg?format=1500w' },
  { file: 'brand-05.jpg',    cat: 'branding',    caption: 'Product lifestyle content for a fragrance brand.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1733724088703-4A478PE5TCC6MTZUBKR5/BA54ABB7-E7FB-4A34-A90A-52437CB3A50E.JPG?format=1000w' },
  { file: 'event-02.jpg',    cat: 'events',      caption: 'Graduation day event coverage.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1636589202922-HK05XGGGBNL7G9N6AY4X/00-108.jpg?format=1000w' },
  { file: 'brand-06.jpg',    cat: 'branding',    caption: 'Personal branding session for a small business owner.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1729571183118-W63HCW6YV6MUQ528NLDP/00-622.JPG?format=1000w' },
  { file: 'doc-05.jpg',      cat: 'documentary', caption: 'ACLU contingent at LA Pride, June 2023.',
    remote: SQ + '62d63149f0b4ea38206a12a6/ceb35092-83e8-4757-8481-911618b68a51/ACLUPride_061123-124.jpg?format=1500w' },
  { file: 'portrait-03.jpg', cat: 'portrait',    caption: 'Portrait of a musician at the piano.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1687326714333-YNBBDVXMAVSTRYCIGK6U/00-425.jpg?format=1000w' },
  { file: 'brand-07.jpg',    cat: 'branding',    caption: 'Automotive shoot: vintage BMW coupe.',
    remote: SQ + '5c3fdaedb10598244d520c8a/1704510199057-FKUBRP3NIKHAY06U66EI/IMG_9446.JPG?format=1000w' }
];

/* Optional captions for photos you add later, for example:
   'doc-06.jpg': 'May Day march, downtown Los Angeles, 2025.' */
var CAPTIONS = {
};
