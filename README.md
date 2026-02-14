# gulp-html-minifier-terser [![NPM version](https://img.shields.io/npm/v/gulp-html-minifier-terser.svg?style=flat)](https://www.npmjs.com/package/gulp-html-minifier-terser) [![NPM monthly downloads](https://img.shields.io/npm/dm/gulp-html-minifier-terser.svg?style=flat)](https://npmjs.org/package/gulp-html-minifier-terser) [![NPM total downloads](https://img.shields.io/npm/dt/gulp-html-minifier-terser.svg?style=flat)](https://npmjs.org/package/gulp-html-minifier-terser) ![Run tests](https://github.com/pioug/gulp-html-minifier-terser/workflows/Run%20tests/badge.svg)

> gulp plugin to minify HTML.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gulp-html-minifier-terser
```

## Heads up!

_**Please do not report issues related to HTML parsing and output in this repository. Report those issues to the [html-minifier-terser](https://github.com/terser/html-minifier-terser/issues) issue tracker.**_

## Usage

See the [html-minifier-terser docs](https://github.com/terser/html-minifier-terser) for all available options.

```js
const gulp = require("gulp");
const htmlmin = require("gulp-html-minifier-terser");

gulp.task("minify", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/pioug/gulp-html-minifier-terser/issues/new).

### Running Tests

Running and reviewing unit tests is a great way to get familiar with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Contributors

| **Commits** | **Contributor**                                         |
| ----------- | ------------------------------------------------------- |
| 41          | [shinnn](https://github.com/shinnn)                     |
| 28          | [jonschlinkert](https://github.com/jonschlinkert)       |
| 27          | [pioug](https://github.com/pioug)                       |
| 11          | [doowb](https://github.com/doowb)                       |
| 7           | [stevelacy](https://github.com/stevelacy)               |
| 2           | [TheDancingCode](https://github.com/TheDancingCode)     |
| 1           | [cwonrails](https://github.com/cwonrails)               |
| 1           | [igoradamenko](https://github.com/igoradamenko)         |
| 1           | [oblador](https://github.com/oblador)                   |
| 1           | [jdalton](https://github.com/jdalton)                   |
| 1           | [JoseChirivella14](https://github.com/JoseChirivella14) |
| 1           | [nschloe](https://github.com/nschloe)                   |
| 1           | [rodrigograca31](https://github.com/rodrigograca31)     |
| 1           | [tomByrer](https://github.com/tomByrer)                 |

### Authors

**Jon Schlinkert**

- [GitHub Profile](https://github.com/jonschlinkert)
- [Twitter Profile](https://twitter.com/jonschlinkert)
- [LinkedIn Profile](https://www.linkedin.com/in/jonschlinkert)

**Shinnosuke Watanabe**

- [GitHub Profile](https://github.com/shinnn)

### License

Copyright © 2018, [Shinnosuke Watanabe](https://github.com/shinnn).
Released under the [MIT License](LICENSE).
