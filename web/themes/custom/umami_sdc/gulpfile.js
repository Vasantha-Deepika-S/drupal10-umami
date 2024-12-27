const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

// Paths
const paths = {
  scss: 'components/**/*.scss', // Source all SCSS files
  scssglobal: ['src/scss/**/*.scss', '!src/scss/**/_*.scss'], // Source all global SCSS files
  cssDest: 'dist/css',          // Output CSS folder
};

// Task to compile component-level SCSS and output minified CSS to dist/css
function compileComponentSCSS() {
  return gulp
    .src(paths.scss)
    .pipe(sass().on('error', sass.logError)) // Compile SCSS
    .pipe(rename({ extname: '.css' })) // Ensure CSS extension
    .pipe(
      gulp.dest((file) => {
        return file.base; // Output CSS to the same directory as SCSS
      })
    );
}

// Task to compile global SCSS and output minified CSS to dist/css
function compileGlobalSCSS() {
  return gulp
    .src(paths.scssglobal)
    .pipe(sass().on('error', sass.logError))  // Compile SCSS
    .pipe(rename({ extname: '.css' }))  // Add .min to the CSS file name
    .pipe(gulp.dest(paths.cssDest));  // Output CSS to dist/css folder
}

// Watch task to watch SCSS files for changes
function watchFiles() {
  gulp.watch(paths.scssglobal, compileGlobalSCSS);  // Watch global SCSS
  gulp.watch(paths.scss, compileComponentSCSS);  // Watch component SCSS
}

// Gulp tasks
exports.default = gulp.series(compileGlobalSCSS, compileComponentSCSS);  // Run SCSS tasks
exports.watch = gulp.series(compileGlobalSCSS, compileComponentSCSS, watchFiles);  // Watch SCSS files
