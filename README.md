# Ashley Balderrama portfolio

A three-page portfolio for GitHub Pages, live at https://ashleybalderrama.github.io. There is nothing to install or build.

| File | What it is |
|---|---|
| `index.html` | Landing page: intro, links to the two work pages, Canva portfolios, what I offer, experience, about |
| `photography.html` | All photography, with the filterable gallery |
| `strategy.html` | All digital strategy work, one dropdown per client |
| `content.js` | The lists you may want to edit: Canva links, gallery photos, captions |
| `site.css`, `site.js` | Shared styling and behavior for all three pages |
| `images/`, `fonts/` | Photos and fonts |

## Update the site

1. Open the repository on GitHub and choose **Add file > Upload files**.
2. Drag in **everything inside this folder**: the three `.html` files, `content.js`, `site.css`, `site.js`, and the `images` and `fonts` folders (the folders themselves, not a zip).
3. Click **Commit changes** and wait a minute or two.

Uploading a file with the same name replaces the old one. The pages need `site.css`, `site.js` and `content.js` to display properly, so don't leave those out.

A link to one client opens that client's dropdown directly, for example `https://ashleybalderrama.github.io/strategy.html#warren-underground`.

## Add more photos to the gallery

Upload the photo to the `images` folder with the **next number** in its category. It appears on the page on its own, under the right filter. Nothing in the code needs editing.

| Category | File name pattern | Next free number |
|---|---|---|
| Documentary | `doc-NN.jpg` | `doc-06.jpg` |
| Branding and commercial | `brand-NN.jpg` | `brand-08.jpg` |
| Portrait | `portrait-NN.jpg` | `portrait-04.jpg` |
| Weddings and events | `event-NN.jpg` | `event-03.jpg` |

- Keep the numbers in order with no gaps (after `doc-06.jpg` comes `doc-07.jpg`). The page stops looking at the first missing number.
- Use lowercase names ending in `.jpg`.
- Export at about 2000px on the long edge, JPG quality 80, so each file stays under roughly 500 KB.
- To give an added photo a caption, open `content.js`, search for `CAPTIONS` and add a line such as `'doc-06.jpg': 'May Day march, 2025.',`
- To replace a photo, upload a new file with the same name.

Current gallery photos:

| File | Category | Source |
|---|---|---|
| `brand-01.jpg` | branding | your upload |
| `portrait-01.jpg` | portrait | your upload |
| `doc-01.jpg` | documentary | your upload |
| `brand-02.jpg` | branding | your upload |
| `doc-02.jpg` | documentary | starter photo from your site |
| `event-01.jpg` | events | your upload |
| `brand-03.jpg` | branding | your upload |
| `doc-03.jpg` | documentary | starter photo from your site |
| `brand-04.jpg` | branding | your upload |
| `portrait-02.jpg` | portrait | starter photo from your site |
| `doc-04.jpg` | documentary | starter photo from your site |
| `brand-05.jpg` | branding | starter photo from your site |
| `event-02.jpg` | events | starter photo from your site |
| `brand-06.jpg` | branding | starter photo from your site |
| `doc-05.jpg` | documentary | starter photo from your site |
| `portrait-03.jpg` | portrait | starter photo from your site |
| `brand-07.jpg` | branding | starter photo from your site |

"Starter" photos are borrowed from momentsbyash.com or ashleybalderrama.com. Uploading your own file with that name replaces one. To remove one, delete its line from the `GALLERY` list in `content.js`.

## Add or change the specialty portfolio links

The "Portfolios by specialty" section is built from the `PORTFOLIOS` list in `content.js`. Portrait, Fashion and product, and Retouching are filled in. Links can be Canva, Sway or anything else. "Branding campaigns" and "Writing" are already in the list with empty links, so they stay hidden. When one is ready, paste its Canva share link between the quotes:

```
{ title: 'Branding campaigns', url: 'https://canva.link/...' },
```

You can rename a title, reorder the lines or add new ones the same way.

## The other images on the page

| File | What it is | Uploaded |
|---|---|---|
| `hero-documentary.jpg` | Your strongest documentary frame. Horizontal 3:2. | yes |
| `hero-brand.jpg` | A polished branding or commercial image. Vertical 2:3. | yes |
| `hero-strategy.jpg` | Screenshot of a feed you built and run. Vertical 4:5. | yes |
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
