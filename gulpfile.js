/**
 * NPM Packages
 * @see https://gulpjs.com
 */
const fs = require('fs');
const path = require('path');
const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const html = async () => {
  return src('template/*.pug')
      .pipe(pug({ data: require('./config.json') }))
      .pipe(dest('build'))
}

exports.html = html;
exports.default = parallel(html);
