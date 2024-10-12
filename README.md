# HarvestHouse Christian Centre Website Clone 
This is a clone of the HarvestHouse Christian Centre; in an attempt to move the original website to a lighter stack; moving away from Wordpress and heavy dose of inline scripts on the front-page.
This will result in faster page load and reduced data use for both users and developers.


## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Acknowledgement](#acknowledgement)
- [Licence](#licence)


## About / Project Description
Attempt to rebuild the organisation website using proven lightweight and backward compatible technologies.

### Architectural Philosophy

ALWAYS minimise data usage for the end-user.
ALWAYS optimise for low-resource settings.

Thus:

- HTML-first approach to website development;
- Responsive pages by default;
- Use semantic HTML in markup;
- Ensure HTML delivers adequate information for low-end and/or old devices;
- Aim for full accessibility;
- Host preferred fonts locally;
- Use such self-hosted fonts first before using system fonts;
- Prefer Unicode HTML special entities to SVG icons;
- Choose self-hosted SVG icons to online alternatives;
- Use different image resolutions;
- Prefer BEM naming convention in CSS stylesheets;
- Use browsers' CSS defaults as much as possible to minimise CSS download size;
- Minimise JavaScript usage and prefer vanilla JavaScript;
- Prefer ES6 or ES5 syntax and features to ensure widespread compatibilities;
- Use JSDoc comments for static type analysis if need be; in order to negate the use of Typescript language;
- Have default iframe videos and update them by fetching latest videos from Rev's YouTube channel if JavaScript is available;
- Aim for JAMstack to reduce hosting cost for the organisation;


### Project Structure

```markdown
.
├── bespoke-style-doc.md
├── README.md
├── src
│   ├── css
│   │   ├── about-page.css
│   │   ├── main.css
│   │   └── privacy-policy-page.css
│   ├── fonts
│   │   └── montserrat
│   │       ├── Montserrat-Regular.eot
│   │       ├── Montserrat-Regular.ttf
│   │       ├── Montserrat-Regular.woff
│   │       └── Montserrat-Regular.woff2
│   ├── html-others
│   │   ├── blog-posts
│   │   ├── campuses
│   │   │   ├── alpha-cathedral.html
│   │   │   ├── cedars-house-of-grace.html
│   │   │   ├── grace-arena.html
│   │   │   ├── life-centre.html
│   │   │   ├── metro-church.html
│   │   │   └── the-novus-centre.html
│   │   ├── confessions
│   │   │   ├── 2022-confessions.html
│   │   │   ├── 2023-confessions.html
│   │   │   ├── 2024-confessions.html
│   │   │   └── zzz-confessions-starter-template.html
│   │   ├── events
│   │   │   ├── ministers-engage.html
│   │   │   ├── shift.html
│   │   │   └── thrive.html
│   │   ├── friendship-centres
│   │   │   ├── alpha-friendship-centres.html
│   │   │   ├── cedars-friendship-centres.html
│   │   │   ├── grace-arena-friendship-centres.html
│   │   │   ├── life-centre-friendship-centres.html
│   │   │   ├── metro-friendship-centres.html
│   │   │   └── novus-centre-friendship-centres.html
│   │   ├── livestream
│   │   │   └── livestream.html
│   │   ├── ministries
│   │   │   ├── children-ministry.html
│   │   │   ├── men-ministry.html
│   │   │   └── women-ministry.html
│   │   ├── other-homepage-links
│   │   │   ├── about.html
│   │   │   ├── contact.html
│   │   │   ├── events.html
│   │   │   ├── ministries.html
│   │   │   ├── privacy-policy.html
│   │   │   └── store.html
│   │   └── store
│   │       └── store.html
│   ├── icons
│   ├── image
│   │   ├── about-page
│   │   │   ├── 0001-about-background-1080w.png
│   │   │   ├── 0001-about-background-320w.png
│   │   │   ├── 0002-about-background-1080w.png
│   │   │   ├── 0002-about-background-320w.png
│   │   │   ├── 0003-about-background-320w.jpg
│   │   │   └── 0003-about-background-800w.jpg
│   │   └── default-main
│   │       ├── 0001-background-header-160-s-w.gif
│   │       ├── 0001-background-header-video-720w.mp4
│   │       ├── 0001-events-2023-jul-praise-ablaze-1024w.webp
│   │       ├── 0001-events-2023-jul-praise-ablaze-1280w.webp
│   │       ├── 0001-events-2023-jul-praise-ablaze-160w.webp
│   │       ├── 0001-events-2023-jul-praise-ablaze-320w.webp
│   │       ├── 0001-events-2023-jul-praise-ablaze-640w.webp
│   │       ├── 0001-events-2023-jul-praise-ablaze-800w.webp
│   │       ├── 0002-background-pix-2nd-header-1024w.png
│   │       ├── 0002-background-pix-2nd-header-1280w.png
│   │       ├── 0002-background-pix-2nd-header-160w.png
│   │       ├── 0002-background-pix-2nd-header-320w.png
│   │       ├── 0002-background-pix-2nd-header-640w.png
│   │       ├── 0002-background-pix-2nd-header-800w.png
│   │       ├── 0002-events-monday-morning-prayers-with-rev-1024w.jpg
│   │       ├── 0002-events-monday-morning-prayers-with-rev-1280w.jpg
│   │       ├── 0002-events-monday-morning-prayers-with-rev-160w.jpg
│   │       ├── 0002-events-monday-morning-prayers-with-rev-320w.jpg
│   │       ├── 0002-events-monday-morning-prayers-with-rev-640w.jpg
│   │       ├── 0002-events-monday-morning-prayers-with-rev-800w.jpg
│   │       ├── 0003-background-pix-alpha-cathedral-1024w.png
│   │       ├── 0003-background-pix-alpha-cathedral-1280w.png
│   │       ├── 0003-background-pix-alpha-cathedral-160w.png
│   │       ├── 0003-background-pix-alpha-cathedral-320w.png
│   │       ├── 0003-background-pix-alpha-cathedral-640w.png
│   │       ├── 0003-background-pix-alpha-cathedral-800w.png
│   │       ├── 0003-events-days-of-glory-1024w.png
│   │       ├── 0003-events-days-of-glory-1280w.png
│   │       ├── 0003-events-days-of-glory-160w.png
│   │       ├── 0003-events-days-of-glory-320w.png
│   │       ├── 0003-events-days-of-glory-640w.png
│   │       ├── 0003-events-days-of-glory-800w.png
│   │       ├── 0004-background-pix-grace-arena-1024w.png
│   │       ├── 0004-background-pix-grace-arena-1280w.png
│   │       ├── 0004-background-pix-grace-arena-160w.png
│   │       ├── 0004-background-pix-grace-arena-320w.png
│   │       ├── 0004-background-pix-grace-arena-640w.png
│   │       ├── 0004-background-pix-grace-arena-800w.png
│   │       ├── 0004-background-pix-life-centre-1024w.png
│   │       ├── 0004-background-pix-life-centre-1280w.png
│   │       ├── 0004-background-pix-life-centre-160w.png
│   │       ├── 0004-background-pix-life-centre-320w.png
│   │       ├── 0004-background-pix-life-centre-640w.png
│   │       ├── 0004-background-pix-life-centre-800w.png
│   │       ├── 0004-events-thrive-conference-1024w.png
│   │       ├── 0004-events-thrive-conference-1280w.png
│   │       ├── 0004-events-thrive-conference-160w.png
│   │       ├── 0004-events-thrive-conference-320w.png
│   │       ├── 0004-events-thrive-conference-640w.png
│   │       ├── 0004-events-thrive-conference-800w.png
│   │       ├── 0005-background-pix-metro-church-1024w.png
│   │       ├── 0005-background-pix-metro-church-1280w.png
│   │       ├── 0005-background-pix-metro-church-160w.png
│   │       ├── 0005-background-pix-metro-church-320w.png
│   │       ├── 0005-background-pix-metro-church-640w.png
│   │       ├── 0005-background-pix-metro-church-800w.png
│   │       ├── 0006-background-pix-novus-centre-1024w.png
│   │       ├── 0006-background-pix-novus-centre-1280w.png
│   │       ├── 0006-background-pix-novus-centre-160w.png
│   │       ├── 0006-background-pix-novus-centre-320w.png
│   │       ├── 0006-background-pix-novus-centre-640w.png
│   │       ├── 0006-background-pix-novus-centre-800w.png
│   │       ├── 0007-background-pix-cedars-house-of-grace-1024w.png
│   │       ├── 0007-background-pix-cedars-house-of-grace-1280w.png
│   │       ├── 0007-background-pix-cedars-house-of-grace-160w.png
│   │       ├── 0007-background-pix-cedars-house-of-grace-320w.png
│   │       ├── 0007-background-pix-cedars-house-of-grace-640w.png
│   │       └── 0007-background-pix-cedars-house-of-grace-800w.png
│   ├── index.html
│   ├── scripts
│   │   ├── js
│   │   │   ├── main.js
│   │   │   └── update-iframe-videos.js
│   │   └── offline-libs
│   └── uploads
└── user-stories-n-spec.md

```

### Technology, Techniques, Tools and Libraries

- HTML5, CSS3 and vanilla JavaScript;
- HTML-first approach, HTML-CSS only navigation menu, responsive media, font caching, BEM CSS, fetch API, localStorage;
- XnConvert: Batch conversion of original images to different resolutions;
- GifCurry: Create animated GIF files;
- ShareX: Reduce video sizes;
- Browsers: LT browser, ResponsivelyApp, SeaMonkey, Waterfox Classic, Firefox ESR, LibreWolf, Chromium;


## Getting Started & Usage
Clone this repo and open the index.html file in the browser or with a live server.

A live version is also available [check here](https://tunprimus.gitlab.io/harvesthousecc-clone/) or [http://tiny.cc/d0sivz](http://tiny.cc/d0sivz).


## Future Implementations

1. Local storage of fetch results with subsequent retrieval from this storage.
2. Make fetch call only once a day.
3. Add upcoming events section to homepage.
4. Add blog posts using markdown and frontend parser.
5. Create pages for each campuses and fetch contents from social media pages to update content.


## Acknowledgements

- Chris Ferdinandi [Building with the grain of the web](https://gomakethings.com)
- Julia Furst Morgado [Update iframe videos displayed](https://dev.to/juliafmorgado/automatically-embed-latest-youtube-videos-on-your-website-with-javascript-step-by-step-2i5e)
- [Responsive Drop-Down Menu In Pure CSS (NO Javascript)](https://code-boxx.com/simple-css-drop-down-menu/)
- [3 Steps Simple Responsive Hamburger Menu In Pure CSS](https://code-boxx.com/simple-responsive-pure-css-hamburger-menu/)
- [Breaking to a new row with flexbox](https://tobiasahlin.com/blog/flexbox-break-to-new-row/)


## Licence

This project is licensed under the GNU General Public License v3.0 or later. [Learn more](https://www.gnu.org/licenses/gpl-3.0-standalone.html)






[//]: # (This may be the most platform independent comment)
