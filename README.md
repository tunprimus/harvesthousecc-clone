# HarvestHouse Christian Centre Website Clone 
Brief project description 2-3 sentences.

[//]: # (This may be the most platform independent comment)

## Table of Contents

[//]: # (This is optional)

[//]: # (A table of contents is good if you have a lengthy README and can help users navigate to sections quickly but is not a must have.)

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)

## About / Project Description
Write about 1-2 paragraphs describing the purpose of your project.

[//]: # (This is an important part of your project and what many developers and non-developers will look at. It is vital to have the most accurate and correct information. The description needs to be well written with no grammar errors and that is readable to users of multiple backgrounds. It is important to put some time and thought into writing the description of the project. It does not need to be long but needs to summarise the project. What does your app do? What tech did you use?)

### Architectural Philosophy

[//]: # (How is it built? What are the main tools powering it? Why were those choices made?)

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

[//]: # (How are the files organised and arranged.)

### Tools and Libraries

[//]: # (If they’re third-party libraries, link to the docs. If they’re internal tools, include details on how they work.)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

A live version is also available [here](https://###).

[//]: # (This section typically is brief and will list the pre-requisites that the user must have in order to start using the project code. This section can be similar or be combined with the Installation section. {Ex: Must have node -v})

## Installing
Installation instructions.

[//]: # (This is where you will list the full instructions for users on how they can install and start using your project. This should include multiple steps and have detailed descriptions and outcomes for users. It is important to take your time and write these steps as thoroughly as possible. This will help users a lot and will help prevent users from coming back and asking follow-up questions.)

## Usage
A step by step series of examples that tell you how to get a development env running.

[//]: # (This may be the most platform independent comment)

## Other Instructions, Specifications, Attributes, or Project Info
This section(s) can include any other relevant project information.

[//]: # (This can include information specific to a particular OS or Framework {Ex: Linux, React, etc}. Certain projects have specific instructions and information that may need to have their own separate sections. As you develop your project you will get a better idea of what you need to include in your README and how to structure it.)

## Contributing
Contributors names.

[//]: # (It is important to list all the names and information of the people who've contributed to the project. Be sure to include their GitHub Profile Name and any other social media they may want to have listed. There are some cool markdown contributing badges that I will list in the Good Resources below.)

## Acknowledgements

[//]: # (Similar to Contributing it is important to include all the sources that helped you complete this project. It's always good to give credit where credit is due.)

## Licence

[//]: # (Choose a license for your project. To learn more about license's check out choosealicense.com.)

<details>
	<summary>Optional: Additional Sections</summary>
	
	## How to Contribute to the Project
	
	[//]: # (Add ways that that developers can contribute to the project.)
	
	## Tests
	
	[//]: # (Write tests for your application and then provide examples on how to run them.)
	
	## Examples
	
	[//]: # (You really go the extra mile when you provide examples of your code/application. This could be a screenshot, code block, video, webpage, etc. This can be really helpful to your users.)
	
	## Badges
	
	[//]: # (Try adding some cool markdown badges! There are badges at sites like shields.io and they include important code monitoring and other tracking info. Check out the Good Resources section below.)
	
</details>





[//]: # (This may be the most platform independent comment)

[//]: # (This may be the most platform independent comment)
