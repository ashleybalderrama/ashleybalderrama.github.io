# Ashley Balderrama portfolio

A three-page portfolio for GitHub Pages, live at https://ashleybalderrama.github.io. There is nothing to install or build.

| File | What it is |
|---|---|
| `index.html` | Landing page: photos, links to the two work pages, specialty portfolios, what I offer, experience, about |
| `photography.html` | All photography, with the filterable gallery |
| `strategy.html` | All digital strategy work, one dropdown per client |
| `content.js` | The lists you may want to edit: portfolio links, gallery photos, captions |
| `site.css`, `site.js` | Shared styling and behavior for all three pages |
| `gallery/` | The photos in the photography page gallery (`doc-`, `brand-`, `portrait-`, `event-`) |
| `images/` | Every other image: landing page photos, client work, deck covers, process steps |
| `fonts/` | The two typefaces |

## Update the site

The site comes as two zips because of its size: part 1 holds the `gallery` folder, part 2 holds everything else. Unzip both.

GitHub accepts at most 100 files per upload, so upload in three goes. Each time, open the repository, choose **Add file > Upload files**, drag, then click **Commit changes**.

1. Drag in the `gallery` folder (the folder itself, not a zip).
2. Drag in the `images` folder.
3. Drag in everything else: the three `.html` files, `content.js`, `site.css`, `site.js` and the `fonts` folder.

Uploading a file with the same name replaces the old one. The pages need `site.css`, `site.js` and `content.js` to display properly, so don't leave those out.

Gallery photos used to live in `images`. The old copies there (`doc-…`, `brand-…`, `portrait-…`, `event-…`) are no longer used and can be deleted from the repository whenever you like.

A link to one client opens that client's dropdown directly, for example `https://ashleybalderrama.github.io/strategy.html#warren-underground`.

## Add more photos to the gallery

Upload the photo to the `gallery` folder with the **next number** in its category. It appears on the page on its own, under the right filter. Nothing in the code needs editing.

| Category | File name pattern | Next free number |
|---|---|---|
| Documentary | `doc-NN.jpg` | `doc-27.jpg` |
| Branding and commercial | `brand-NN.jpg` | `brand-24.jpg` |
| Portrait | `portrait-NN.jpg` | `portrait-13.jpg` |
| Weddings and events | `event-NN.jpg` | `event-12.jpg` |

- Keep the numbers in order with no gaps (after `doc-27.jpg` comes `doc-28.jpg`). The page stops looking at the first missing number.
- Use lowercase names ending in `.jpg`.
- Export at about 2000px on the long edge, JPG quality 80, so each file stays under roughly 500 KB.
- To give an added photo a caption, open `content.js`, search for `CAPTIONS` and add a line such as `'doc-27.jpg': 'May Day march, 2025.',`
- To replace a photo, upload a new file with the same name.

Current gallery photos (in the `gallery` folder):

| File | Category |
|---|---|
| `brand-01.jpg` | branding |
| `brand-02.jpg` | branding |
| `brand-03.jpg` | branding |
| `brand-04.jpg` | branding |
| `brand-05.jpg` | branding |
| `brand-06.jpg` | branding |
| `brand-07.jpg` | branding |
| `brand-08.jpg` | branding |
| `brand-09.jpg` | branding |
| `brand-10.jpg` | branding |
| `brand-11.jpg` | branding |
| `brand-12.jpg` | branding |
| `brand-13.jpg` | branding |
| `brand-14.jpg` | branding |
| `brand-15.jpg` | branding |
| `brand-16.jpg` | branding |
| `brand-17.jpg` | branding |
| `brand-18.jpg` | branding |
| `brand-19.jpg` | branding |
| `brand-20.jpg` | branding |
| `brand-21.jpg` | branding |
| `brand-22.jpg` | branding |
| `brand-23.jpg` | branding |
| `doc-01.jpg` | documentary |
| `doc-02.jpg` | documentary |
| `doc-03.jpg` | documentary |
| `doc-04.jpg` | documentary |
| `doc-05.jpg` | documentary |
| `doc-06.jpg` | documentary |
| `doc-07.jpg` | documentary |
| `doc-08.jpg` | documentary |
| `doc-09.jpg` | documentary |
| `doc-10.jpg` | documentary |
| `doc-11.jpg` | documentary |
| `doc-12.jpg` | documentary |
| `doc-13.jpg` | documentary |
| `doc-14.jpg` | documentary |
| `doc-15.jpg` | documentary |
| `doc-16.jpg` | documentary |
| `doc-17.jpg` | documentary |
| `doc-18.jpg` | documentary |
| `doc-19.jpg` | documentary |
| `doc-20.jpg` | documentary |
| `doc-21.jpg` | documentary |
| `doc-22.jpg` | documentary |
| `doc-23.jpg` | documentary |
| `doc-24.jpg` | documentary |
| `doc-25.jpg` | documentary |
| `doc-26.jpg` | documentary |
| `event-01.jpg` | events |
| `event-02.jpg` | events |
| `event-03.jpg` | events |
| `event-04.jpg` | events |
| `event-05.jpg` | events |
| `event-06.jpg` | events |
| `event-07.jpg` | events |
| `event-08.jpg` | events |
| `event-09.jpg` | events |
| `event-10.jpg` | events |
| `event-11.jpg` | events |
| `portrait-01.jpg` | portrait |
| `portrait-02.jpg` | portrait |
| `portrait-03.jpg` | portrait |
| `portrait-04.jpg` | portrait |
| `portrait-05.jpg` | portrait |
| `portrait-06.jpg` | portrait |
| `portrait-07.jpg` | portrait |
| `portrait-08.jpg` | portrait |
| `portrait-09.jpg` | portrait |
| `portrait-10.jpg` | portrait |
| `portrait-11.jpg` | portrait |
| `portrait-12.jpg` | portrait |

"All work" shows the first 18 photos in the `GALLERY` list, then a "Show all" button. Each category filter shows everything in that category. To change which photos lead, reorder the lines in `GALLERY` in `content.js`; to change the number, edit `GALLERY_PREVIEW`. To remove a photo, delete its line. Photos you add by number appear after "Show all" and under their category.

## Add or change the specialty portfolio links

The "Portfolios by specialty" section is built from the `PORTFOLIOS` list in `content.js`. Portrait, Fashion and product, Retouching, and Photo and visual campaigns are filled in. Links can be Canva, Sway or anything else. "Writing" is already in the list with an empty link, so it stays hidden. When it is ready, paste its Canva share link between the quotes:

```
{ title: 'Writing', url: 'https://canva.link/...' },
```

You can rename a title, reorder the lines or add new ones the same way.

## The other images on the page

| File | What it is | Uploaded |
|---|---|---|
| `hero-documentary.jpg` | Landing page, top strip, 1st: documentary. Horizontal 3:2. | yes |
| `hero-lifestyle.jpg` | Landing page, top strip, 2nd: commercial lifestyle. Vertical 2:3. | yes |
| `hero-portrait-1.jpg` | Landing page, top strip, 3rd: a portrait. Horizontal 3:2. | yes |
| `hero-portrait-2.jpg` | Landing page, top strip, 4th: a portrait. Vertical 2:3. | yes |
| `offer-01.jpg` | Landing page, image beside "What I offer": a colorful fashion or branding portrait. Vertical. | yes |
| `break-01.jpg` to `break-04.jpg` | Landing page, photo strip between "What I offer" and "Experience": vertical, horizontal, vertical, horizontal. | yes |
| `break-05.jpg` to `break-07.jpg` | Landing page, photo strip between "Experience" and "About": horizontal, vertical, horizontal. | yes |
| `bg-statements.jpg` | Landing page, photo behind the three statements. Wide, about 2400 x 1100; text sits on top, so black-and-white or dark images work best. Currently a crop of the toast photo, about 2400 x 1440. | yes |
| `deck-portrait.jpg`, `deck-fashion.jpg`, `deck-retouching.jpg`, `deck-campaigns.jpg` | Landing page, cover for each specialty portfolio card: a screenshot of the deck's title slide. Horizontal 16:9. | yes |
| `gwa-01.jpg` | Lead image from a branding shoot you directed. Horizontal 3:2. | yes |
| `gwa-02.jpg` | Second image from the shoot, or a screenshot of the feed. 3:2. | yes |
| `gwa-03.jpg` | Third image, or a newsletter screenshot. 3:2. | yes |
| `wwi-01.jpg` | Screenshot of the Instagram grid. 4:5. | yes |
| `wwi-02.jpg` | A photo or post you made: the artist at work. Vertical 2:3. | yes |
| `es-01.jpg` | Thumbnail or still from a house tour. 16:9. | yes |
| `wu-01.jpg` | A branding photo you co-produced. Vertical 2:3. | yes |
| `wu-02.jpg` | Screenshot of the Instagram grid. 4:5. | yes |
| `wu-03.jpg` | One post or reel cover you made. 4:5. | yes |
| `sk-01.jpg` | The brand kit on one board. Vertical. | yes |
| `sk-02.jpg` | A photo or still from a video you directed. Vertical 2:3. | yes |
| `about-ashley.jpg` | A portrait of you. Vertical 2:3. | yes |
| `process-01.jpg` | Photography page, step 1: a moodboard, shot list or concept notes for a shoot. Vertical 4:5. | yes |
| `process-02.jpg` | Photography page, step 2: behind the scenes, you directing, styling or lighting on set. Vertical 4:5. | yes |
| `process-03.jpg` | Photography page, step 3: a contact sheet or editing screen, or a before and after of a retouch. Vertical 4:5. | yes |
| `process-04.jpg` | Photography page, step 4: the final images in use (client site, feed, print piece, tear sheet). Vertical 4:5. | yes |
| `site-moments.jpg` | Photography page, momentsbyash.com card. Horizontal 3:2. Shows the wedding photo until you upload one. | yes |
| `site-documentary.jpg` | Photography page, ashleybalderrama.com card. Horizontal 3:2. Shows the hero documentary photo until you upload one. | yes |

Open any page with `?guide` on the end of the address to see every image labeled with its file name. The landing page's "The work" section reuses six of the files above as small previews.

## Change the accent color

The sand color is one line near the top of `site.css`: `--accent:#E3D5C0;`. To preview alternatives on the live site, add `?accent=peach`, `?accent=clay`, `?accent=olive` or `?accent=sky` to the address.

## Change the link preview image

When the site link is texted or shared, the preview shows `images/share.jpg` (a title card with your name and portrait). To change it, upload a new wide image, 1200 x 630 pixels, with that same name. Apps save the preview the first time a link is sent, so old threads may keep the previous image for a while.

## Add your résumé

Save a public version as `resume.pdf` and upload it next to `index.html`. A "Download résumé" button appears on its own. Remove your phone number and the references section first, since the file will be public.

## Fonts

Instrument Serif and Instrument Sans, included in the `fonts` folder under the SIL Open Font License (`fonts/OFL.txt`).
