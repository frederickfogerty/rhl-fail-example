# Holis Mobile App
[![Circle CI](https://circleci.com/gh/holisio/holis-mobile/tree/master.svg?style=svg&circle-token=94fe83a7a31d6483b11b702a5f1d758cdb8e77e1)](https://circleci.com/gh/holisio/holis-mobile/tree/master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


## Architecture Decisions

### React
**Why:** React is a stable framework developed by Facebook, it's not going away any time soon

### [ PostCSS ](https://github.com/postcss/postcss)
**What:** PostCSS is the next generation of CSS. Many plugins for SCSS, SASS, Stylus, et al. are built in PostCSS.

**Why:** If it (for some reason) is not viable anymore, it's just CSS, and we can move to other solutions.

**Why not [insert React CSS framework here]:** They have shaky support at best. In the time you've taken to read this there are probably two more. None of them has a complete feature-set. They all have a high level of vendor-lock, meaning we cannot move to another solution easily if it breaks.

### [ Redux ](https://github.com/gaearon/redux)
**What:** A flux framework which works well with React. It is a heavily functional programming orientated architecture.

**Why:** From the instant I started using it, it made sense. It is terse, it has minimal surface area. One of the most popular flux frameworks (Flummox, 1500+ stars), just deprecated itself in favour of Redux because *it's that good*.
It is similar enough to other things (alt, reflux, nuclearjs, martyjs), that if it goes under, we are not screwed.

In one week it went from 100 to 1000 stars.

**Why not others:** They all seem too hacky, and get in the way of development, not allowing you to do X, or don't allow you to do it your own way.

### Webpack
**Why:** Loaders are awesome. Chunks are awesome. It's just awesome. Facebook uses it.

**Why not:** Nothing else really compares. JSPM is not mature enough yet.
