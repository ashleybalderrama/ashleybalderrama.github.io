# Ashley Balderrama portfolio

A one-page portfolio for GitHub Pages. Everything is in `index.html`; there is nothing to install or build.

## Put it online

1. Create a free GitHub account if you don't have one. Your username becomes the address, so pick something like `ashleybalderrama`.
2. Create a new **public** repository named exactly `YOUR-USERNAME.github.io`.
3. On the repository page choose **Add file > Upload files** and drag in `index.html` and the `images` folder. Click **Commit changes**.
4. Wait a minute or two, then visit `https://YOUR-USERNAME.github.io`.

To update the site later, upload a file with the same name and commit again.

## Add your images

Each frame on the page looks for a specific file in the `images` folder. Save your image with that exact name (lowercase, `.jpg`), upload it, and it appears. Nothing in the code needs editing.

- Open the site with `?guide` on the end of the address (`https://YOUR-USERNAME.github.io/?guide`) to see every frame labeled with its file name and what belongs there.
- Export at about 2000px on the long edge, JPG quality 75 to 80, so each file stays under roughly 500 KB.
- Frames marked "starter: yes" currently borrow a photo from momentsbyash.com or ashleybalderrama.com so the page isn't empty on day one. Uploading your own file replaces it. Frames marked "no" show a dashed placeholder until you add the file.

| File | What to put there | Starter image |
|---|---|---|
| `images/hero-documentary.jpg` | Your single strongest documentary frame. People, emotion, a clear moment. Vertical 4:5 crop. | yes |
| `images/hero-brand.jpg` | A polished branding or commercial lifestyle image. This is the one a corporate hiring manager should connect with. Vertical 4:5 crop. | yes |
| `images/hero-strategy.jpg` | A screenshot of a feed you built and run, such as the Grounded Wealth or Warren Underground Instagram grid. Crop to 4:5 so nine to twelve posts show. | no |
| `images/doc-01.jpg` | Lead documentary image. A published LAist frame is ideal, with the story named in the caption. | yes |
| `images/brand-01.jpg` | Vertical personal-branding portrait: a founder or professional in their space. | yes |
| `images/doc-02.jpg` | Community or labor coverage. Faces over crowds. | yes |
| `images/portrait-01.jpg` | Vertical natural-light portrait. | yes |
| `images/brand-02.jpg` | Horizontal team or workplace image. The Grounded Wealth shoot would fit well here. | yes |
| `images/doc-03.jpg` | Horizontal social-justice coverage with a clear subject. | yes |
| `images/brand-03.jpg` | Product or lifestyle content made for a brand's social feed. | yes |
| `images/event-01.jpg` | One standout wedding image. One is enough for a job portfolio. | yes |
| `images/doc-04.jpg` | Nonprofit or community event coverage. This is the frame a nonprofit communications team will look for. | yes |
| `images/brand-04.jpg` | Corporate-friendly headshot or branding portrait. | yes |
| `images/portrait-02.jpg` | Environmental portrait: someone in the place they work or create. | yes |
| `images/event-02.jpg` | Corporate, nonprofit or community event coverage: a gala, a fundraiser, a conference. | yes |
| `images/brand-05.jpg` | Automotive or product image. Shows commercial range beyond people. | yes |
| `images/gwa-01.jpg` | Your best team image from a Grounded Wealth branding shoot you directed. Square crop. | no |
| `images/gwa-02.jpg` | Screenshot of the Instagram grid after the rebrand. Square. | no |
| `images/gwa-03.jpg` | Newsletter screenshot, or a before and after of the brand. Square. | no |
| `images/wwi-01.jpg` | Screenshot of the Instagram grid, cropped 4:5. | no |
| `images/wwi-02.jpg` | One post or reel cover you made: the artist at work or a painting detail. 4:5. | no |
| `images/es-01.jpg` | Thumbnail or still from the strongest of the three house tours. 16:9. | no |
| `images/wu-01.jpg` | A branding photo you co-produced, or the launch-day hero graphic. Square crop. | no |
| `images/wu-02.jpg` | Screenshot of the Instagram grid at launch. Square. | no |
| `images/wu-03.jpg` | One post or reel cover you made. Square. | no |
| `images/sk-01.jpg` | The brand kit on one board: logo, colors, type. 4:5. | no |
| `images/sk-02.jpg` | Still or cover from a short-form video you directed and edited. 4:5. | no |
| `images/about-ashley.jpg` | A warm, direct portrait of you, ideally holding or near a camera. Vertical 4:5. A second one of you directing on set works well for LinkedIn. | no |

Gallery captions live in `index.html` as `data-caption="..."` next to each file name. Edit the text between the quotes to change what shows in the enlarged view.

## Add your résumé

Save a public version as `resume.pdf` and upload it next to `index.html`. A "Download résumé" button appears on its own. Before uploading, remove your phone number and the references section, since the file will be public.

## Optional

- **Custom domain:** in the repository go to **Settings > Pages > Custom domain** to point a domain you own at the site.
- **Link previews:** near the top of `index.html` there is a commented `og:image` line. Uncomment it and fill in your address so links shared on LinkedIn show a photo.
