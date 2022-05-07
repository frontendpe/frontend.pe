# frontend.pe

## Autoprefixer CSS online

[Autoprefixer](https://autoprefixer.github.io/) is a PostCSS plugin which parses your CSS and adds vendor prefixes. This is implemented by leveraging Hugo PostCSS Pipe functions.

## Requirements

- [nodejs](https://nodejs.org/) to install the necessary dependances.
- [Hugo](https://github.com/gohugoio/hugo/releases) to run and compile the site. [Hugo installation instructions](https://gohugo.io/getting-started/installing/) can be found at http://www.gohugo.io.

## Installation
`$ npm install`

## Run
`$ npm run start` or `$ hugo server`

## Build for Production

`$ npm run build`
This will create a `/public` folder that contains all your production ready files.

## Browser Compatibility

[Bootstrap supports](https://getbootstrap.com/docs/4.1/getting-started/browsers-devices/)

You can find the supported range of browsers and their versions in the `postcss.config.js`

```
"browserslist": [
  "last 1 major version",
  ">= 1%",
  "Chrome >= 45",
  "Firefox >= 38",
  "Edge >= 12",
  "Explorer >= 10",
  "iOS >= 9",
  "Safari >= 9",
  "Android >= 4.4",
  "Opera >= 30"
]
```


