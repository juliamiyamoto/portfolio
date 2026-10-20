# Julia Miyamoto portfolio

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser to view it.

## Add a project
Open `projects.js`, copy one `{ ... }` block, and edit the text. Fields are explained at the top of the file.
Put project pictures in `images/` and set `image: "images/your-file.jpg"`. Remove `draft: true` once a placeholder is real.

## Add your photo
Save it as `images/headshot.jpg`. It replaces the "JM" block in the hero.

## Files
- `index.html` page content (about, experience, contact)
- `styles.css` the colors (cream, navy, blueberry, matcha) and two fonts (Archivo Black, Hind) are the variables at the top
- `projects.js` your project list
- `main.js` renders the project cards and filters

## Put it on GitHub Pages
1. Create a new repository on GitHub, for example `portfolio`.
2. On the repository page choose **Add file > Upload files**, drag in everything from this folder (keep the `images/` and `projects/` folders), and commit.
3. Go to **Settings > Pages**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/portfolio/`.
