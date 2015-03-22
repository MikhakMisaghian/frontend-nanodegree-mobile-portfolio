// include gulp
var gulp = require('gulp');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./views/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// include plug-ins
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './views/*.html',
      htmlDst = './build/views';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// JS strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./js/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

// JS strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./views/js/*.js'])
    // .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/views/js/'));
});

// include plug-ins
var minifyCSS = require('gulp-minify-css');

gulp.task('minifycss', function() {
  gulp.src('./css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/css/'));
});
gulp.task('minifyviewscss', function() {
  gulp.src('./views/css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/views/css/'));
});
// // CSS minify
// gulp.task('styles', function() {
//   gulp.src(['./css/*.css'])
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./build/css/'));
// });

// // CSS minify
// gulp.task('styles', function() {
//   gulp.src(['./views/css/*.css'])
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./build/views/css/'));
// });

//	minify ./img/
gulp.task('imagemin', function() {
	var imgSrc = './img/**/*',
	imgDst = './build/img';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

// minify views/images/
gulp.task('imagemin', function() {
	var imgSrc = './views/images/**/*',
	imgDst = './build/views/images';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

