# Portfolio website

Plain HTML, CSS and JavaScript. No build step.

## Files
- index.html: page content
- css/style.css: all styles (colours are variables at the top)
- js/main.js: sprint board, tabs, sliders, dark mode
- img: your website screenshots

## Run
Double-click index.html, or run `python3 -m http.server` in this folder.

## Add your website images
1. Copy screenshots into the `img` folder.
2. Open `js/main.js` and fill the lists at the top:
   `var IMG_BUSINESS = ["img/business-1.jpg", "img/business-2.jpg"];`
   `var IMG_STORE = ["img/store-1.jpg"];`
3. Refresh the page. The sliders scroll through your images by themselves.

## Add your profile photo
Save a square headshot as `img/profile.jpg`. If it is missing, the page shows your initials (change "YN" at the bottom of `js/main.js`).

## Edit first
1. Replace "Your Name", email, LinkedIn and GitHub links.
2. Replace sample projects, design case study and project files with your real work.
3. Set the skill bars to your real level.

## Deploy (free)
Upload the folder to Netlify Drop, GitHub Pages or Vercel.

## Upload to GitHub Pages (step by step)
1. Create a free account on github.com and click New repository.
2. Name it `your-username.github.io` (or any name), set it to Public, click Create.
3. Click "uploading an existing file", drag in everything INSIDE this folder (index.html, css, js, img), then Commit.
4. Go to Settings, then Pages. Under Branch choose `main` and `/ (root)`, then Save.
5. After about a minute your site is live at https://your-username.github.io
