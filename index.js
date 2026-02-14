'use strict';

const { Transform } = require('node:stream');
const PluginError = require('plugin-error');
const htmlmin = require('html-minifier-terser');

function createPluginError(file, options, err) {
  return new PluginError('gulp-html-minifier-terser', err, Object.assign({}, options, { fileName: file.path }));
}

function createMinifyStream(file, options) {
  let chunks = [];

  return new Transform({
    transform(chunk, enc, cb) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, enc));
      cb();
    },
    async flush(cb) {
      try {
        let html = Buffer.concat(chunks).toString();
        let minified = await htmlmin.minify(html, options);
        this.push(Buffer.from(minified));
        cb();
      } catch (err) {
        cb(createPluginError(file, options, err));
      }
    }
  });
}

module.exports = options => {
  return new Transform({
    objectMode: true,
    async transform(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    if (file.isStream()) {
      let minifyStream = file.contents.pipe(createMinifyStream(file, options));
      minifyStream.on('error', error => this.emit('error', error));
      file.contents = minifyStream;
      next(null, file);
      return;
    }

    try {
      let minified = await htmlmin.minify(file.contents.toString(), options);
      file.contents = Buffer.from(minified);
      next(null, file);
    } catch (err) {
      next(createPluginError(file, options, err));
    }
  }
  });
};
