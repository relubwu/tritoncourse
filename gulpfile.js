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
      .pipe(pug({
        data: {
          favicon: "",
          title: "",
          description: "",
          keywords: "",
          navLinks: [{ url: "", name: "" }],
          courseInfo: "",
          staff: [{ avatar: "", name: "", role: "" }],
          location: "",
          geoLocation: ""
        }
      }))
      .pipe(dest('build/html'))
}

const css = async () => {
  return src('template/wireframe.scss')
    .pipe(sass())
    .pipe(dest('build/css'))
}

exports.html = html;
exports.css = css;
exports.default = parallel(html, css);
