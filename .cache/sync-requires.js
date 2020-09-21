const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/404.js"))),
  "component---src-pages-dziekujemy-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/dziekujemy.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/index.js"))),
  "component---src-pages-kadra-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/kadra.js"))),
  "component---src-pages-kontakt-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/kontakt.js"))),
  "component---src-pages-layout-js": hot(preferDefault(require("/Users/anton/dev/DZWONECZEK/src/pages/layout.js")))
}

