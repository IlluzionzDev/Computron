# Computron
![SvelteKit](https://img.shields.io/badge/Powered%20By-SvelteKit-b83737?style=for-the-badge)
![LINES OF CODE](https://img.shields.io/tokei/lines/github/IlluzionzDev/Computron?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/IlluzionzDev/Computron?style=for-the-badge)

This is the source code for the Computron website. This website is running on SvelteKit deployed at [https://computron.jaminstratford.com/](https://computron.jaminstratford.com/)

## Tutorial Pages

The tutorial pages are written in markdown they are stored in the `/src/routes/tutorials` directory. Any markdown files
place into this directory will be added to the tutorials page each page must contain the following lines at the top of
the file ot correctly be displayed

```markdown
---
title: Title of the tutorial

description: A description of what the tutorial is about
---
```

## Downloads List

The list of available downloads are stored in `/src/routes/software/downloads.json` this file is made of an array of categories
which contain titles and children. The following is the structure of the json

```json
{
  "categories": [
    {
      "id": "unique_id",
      "title": "Lorem Ipsum",
      "children": [
        {
          "name": "Example Download",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.",
          "link": "https://example.com"
        },
        {
          "name": "Example Download",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.",
          "link": "https://example.com"
        }
      ]
    }
  ]
}
```

## Build Setup

Make sure you have installed the latest version of [NodeJS](https://nodejs.org/en/download/) to run this project

```bash
# Install all dependencies
$ npm install

# Run locally
$ npm run dev

# Build for production and preview
$ npm run build
$ npm run preview

# Generate static project (Will not work with tutorials properly)
$ npm run build
```

For detailed explanation on how things work, check out the [documentation](https://kit.svelte.dev/).