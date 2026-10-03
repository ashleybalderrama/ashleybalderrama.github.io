/* =====================================================================
   THINGS YOU CAN EDIT
   This file holds the Canva portfolio links and the gallery photo list.
   ===================================================================== */

/* Specialty portfolios (Canva, Sway or any other link). Paste each share link between the quotes.
   A card only shows once its link is filled in.
   cover is an optional image for the card (a screenshot of the title slide, 16:9),
   saved in the images folder. The card shows without one until the file is uploaded. */
var PORTFOLIOS = [
  { title: 'Portrait photography',            url: 'https://canva.link/hk7s9s4496ice00', cover: 'deck-portrait.jpg' },
  { title: 'Fashion and product photography', url: 'https://canva.link/x9eglllksfel73x', cover: 'deck-fashion.jpg' },
  { title: 'Retouching',                      url: 'https://sway.cloud.microsoft/d3YuBZ2fxdf5PK1P?ref=Link', cover: 'deck-retouching.jpg' },
  { title: 'Photo and visual campaigns',       url: 'https://canva.link/a33htt21z3s95cv', cover: 'deck-campaigns.jpg' },
  { title: 'Writing',                         url: '' }
];

/* Gallery photographs, in the order they appear under "All work".
   The files live in the gallery folder. cat is one of: documentary, branding, portrait, events.
   To add more, you don't need to edit this list: upload the next number
   in a category to the gallery folder and it appears on its own.
   Add a caption for it in CAPTIONS below if you like. */
/* How many photos "All work" shows before the "Show all" button. Set to 0 to always show everything. */
var GALLERY_PREVIEW = 18;
var GALLERY = [
  { file: 'brand-01.jpg',    cat: 'branding',     ratio: 0.665, caption: 'Personal branding session.' },
  { file: 'brand-18.jpg',    cat: 'branding',     ratio: 1.502, caption: 'Automotive: classic BMW coupe.' },
  { file: 'portrait-05.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Editorial portrait.' },
  { file: 'doc-10.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A teacher dances at a rally during the Los Angeles school workers’ strike.' },
  { file: 'brand-15.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Product photography for a haircare brand.' },
  { file: 'event-02.jpg',    cat: 'events',       ratio: 1.499, caption: 'Table setting at a Kailo brand dinner.' },
  { file: 'portrait-08.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Natural-light portrait.' },
  { file: 'brand-21.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Restaurant shoot: the chef at work in the kitchen.' },
  { file: 'doc-08.jpg',      cat: 'documentary',  ratio: 1.504, caption: 'A dancer in a feathered headdress and beaded regalia.' },
  { file: 'brand-14.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Beauty close-up.' },
  { file: 'event-08.jpg',    cat: 'events',       ratio: 1.499, caption: 'A speaker at an ACLU Pride event.' },
  { file: 'brand-08.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Team branding session.' },
  { file: 'doc-09.jpg',      cat: 'documentary',  ratio: 1.514, caption: 'A boy leans from the window of an ice cream truck.' },
  { file: 'brand-11.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Product photography for a skincare brand.' },
  { file: 'portrait-06.jpg', cat: 'portrait',     ratio: 1.498, caption: 'Studio portrait in black and white.' },
  { file: 'brand-04.jpg',    cat: 'branding',     ratio: 0.663, caption: 'Athlete on the track.' },
  { file: 'event-06.jpg',    cat: 'events',       ratio: 0.666, caption: 'Live performance.' },
  { file: 'doc-02.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Protesters hold signs against an encampment sweep, Los Angeles.' },
  // Photos below this line show after "Show all" is clicked (see GALLERY_PREVIEW).
  { file: 'doc-16.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A lowrider at night, Los Angeles.' },
  { file: 'brand-19.jpg',    cat: 'branding',     ratio: 1.399, caption: 'Automotive: classic Ford Thunderbird.' },
  { file: 'portrait-10.jpg', cat: 'portrait',     ratio: 1.5,   caption: 'Portrait against an ochre wall.' },
  { file: 'doc-13.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Drag March LA, a demonstration against anti-LGBTQ+ legislation.' },
  { file: 'event-07.jpg',    cat: 'events',       ratio: 1.499, caption: 'Guests greet each other at a community event.' },
  { file: 'brand-06.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Fashion detail: white western boots.' },
  { file: 'doc-24.jpg',      cat: 'documentary',  ratio: 0.816, caption: 'A speaker pauses at a downtown rally.' },
  { file: 'doc-11.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Volunteers hand out supplies to striking school workers.' },
  { file: 'portrait-02.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Musician in her studio.' },
  { file: 'doc-17.jpg',      cat: 'documentary',  ratio: 0.666, caption: 'A speaker on stage in an “I know my rights” shirt.' },
  { file: 'brand-23.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Restaurant shoot for Yangban.' },
  { file: 'event-10.jpg',    cat: 'events',       ratio: 1.52,  caption: 'A performer waves from a convertible at a Pride parade in Hollywood.' },
  { file: 'event-11.jpg',    cat: 'events',       ratio: 1.499,   caption: 'Brand event for a skincare company.' },
  { file: 'doc-12.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Striking school workers fill a downtown intersection.' },
  { file: 'event-05.jpg',    cat: 'events',       ratio: 0.666, caption: 'Table detail at a brand dinner.' },
  { file: 'brand-09.jpg',    cat: 'branding',     ratio: 0.666, caption: 'A smoothie outside Erewhon.' },
  { file: 'doc-26.jpg',      cat: 'documentary',  ratio: 1.5,   caption: 'A florist’s hands at work.' },
  { file: 'doc-06.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Drumming at a community gathering.' },
  { file: 'brand-02.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Product photography, running shoes.' },
  { file: 'portrait-01.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Studio portrait.' },
  { file: 'doc-18.jpg',      cat: 'documentary',  ratio: 1.523, caption: 'A speaker addresses reporters at a press conference.' },
  { file: 'event-09.jpg',    cat: 'events',       ratio: 1.499, caption: 'A performer on a float at a Pride parade.' },
  { file: 'doc-23.jpg',      cat: 'documentary',  ratio: 1.504, caption: 'A demonstrator holds a Black Lives Matter flag in front of a line of shields at night.' },
  { file: 'doc-04.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A demonstrator raises a Palestinian flag in front of a line of sheriff’s deputies.' },
  { file: 'event-03.jpg',    cat: 'events',       ratio: 1.499, caption: 'Night-Off, Volume Six dinner.' },
  { file: 'brand-16.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Athlete stretching, studio session.' },
  { file: 'doc-25.jpg',      cat: 'documentary',  ratio: 1.5,   caption: 'A man holds one of his backyard chickens.' },
  { file: 'doc-20.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A demonstrator holds a sign reading “Abortion is healthcare!”' },
  { file: 'brand-05.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Branding session for a small business.' },
  { file: 'doc-14.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A community member gestures across a packed public meeting.' },
  { file: 'brand-22.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Restaurant shoot: dressing a salad on the line.' },
  { file: 'doc-07.jpg',      cat: 'documentary',  ratio: 0.666, caption: 'From Impacted Families: a banner calling for justice for Anthony Vargas.' },
  { file: 'brand-10.jpg',    cat: 'branding',     ratio: 1.502, caption: 'Product photography for Yelli.' },
  { file: 'portrait-07.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Fashion portrait in black and white.' },
  { file: 'portrait-11.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Fashion portrait inside a frame.' },
  { file: 'doc-19.jpg',      cat: 'documentary',  ratio: 1.498, caption: 'Two men embrace in a crowd.' },
  { file: 'brand-20.jpg',    cat: 'branding',     ratio: 1.499, caption: 'Automotive detail: Lamborghini.' },
  { file: 'doc-03.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Tents and a banner at a park encampment, Los Angeles.' },
  { file: 'event-01.jpg',    cat: 'events',       ratio: 1.499, caption: 'Wedding portrait at sunset.' },
  { file: 'brand-17.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Lifestyle content: working from the gym floor.' },
  { file: 'doc-21.jpg',      cat: 'documentary',  ratio: 1.511, caption: 'A man carries a United States Marine Corps flag past a fenced park.' },
  { file: 'portrait-09.jpg', cat: 'portrait',     ratio: 1.499, caption: 'Performer portrait in black and white.' },
  { file: 'portrait-12.jpg', cat: 'portrait',     ratio: 1.5,   caption: 'Portrait with a reflection.' },
  { file: 'doc-15.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'A woman leads chants through a megaphone.' },
  { file: 'brand-07.jpg',    cat: 'branding',     ratio: 1.499, caption: 'School marketing shoot.' },
  { file: 'doc-22.jpg',      cat: 'documentary',  ratio: 1.514, caption: 'A demonstrator holds a sign asking “Do you see us?”' },
  { file: 'portrait-03.jpg', cat: 'portrait',     ratio: 0.666, caption: 'Studio portrait.' },
  { file: 'doc-01.jpg',      cat: 'documentary',  ratio: 1.5,   caption: 'Two protesters face to face.' },
  { file: 'brand-12.jpg',    cat: 'branding',     ratio: 1.499, caption: 'Motion study.' },
  { file: 'doc-05.jpg',      cat: 'documentary',  ratio: 1.499, caption: 'Trump supporters march, 2020.' },
  { file: 'event-04.jpg',    cat: 'events',       ratio: 1.5,   caption: 'Dinner party in the garden.' },
  { file: 'portrait-04.jpg', cat: 'portrait',     ratio: 0.952, caption: 'Portrait in the garden.' },
  { file: 'brand-13.jpg',    cat: 'branding',     ratio: 0.666, caption: 'Product photography for a skincare brand: facial mist.' },
  { file: 'brand-03.jpg',    cat: 'branding',     ratio: 1.5,   caption: 'Personal branding session.' }
];

/* Optional captions for photos you add later, for example:
   'doc-06.jpg': 'May Day march, downtown Los Angeles, 2025.' */
var CAPTIONS = {
};
