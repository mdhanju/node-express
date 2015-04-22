var gulp = require('gulp');
var server = require('gulp-express');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var cucumber = require('gulp-cucumber');

// 'built' task to start server 
gulp.task('built', function () {
    server.run(['app.js', 'app/routes/**/*.js']);
});

//'lint' task to lint all JS
gulp.task('lint', function () {
    return gulp.src(['app/**/*.js', '*.js', 'test/e2e/steps/**/*.js', 'test/e2e/support/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('css', function () {
    return gulp.src('app/styles/*.css')
        .pipe(gulp.dest('dist/assets/css/'));
});

// Concatenate & Minify JS to dist/assets/js/
gulp.task('scripts', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/'));
});

//cleaning all assets
gulp.task('clean', function (callback) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img', 'dist'], callback);
});

// Watch all js, css and sass files for ant changes
gulp.task('watch', function () {
    gulp.watch(['app/**/*.js', '*.js'], ['lint', 'scripts', 'built']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('app/styles/*.css', ['css']);
});

// running e2e test - using cucumber
gulp.task('e2e', function () {
    return gulp.src('test/cucumber/features/*').pipe(cucumber({
        'steps': 'test/cucumber/steps/**/*.js',
        'support': 'test/cucumber/support/*.js',
        'format': 'summary'
    }));
});

// Watch all js, css and sass files for ant changes
gulp.task('e2e-watch', function () {
    gulp.watch(['test/cucumber/steps/**/*.js', 'test/cucumber/support/*.js'], ['lint']);
});

//Default task 
gulp.task('default', ['clean'], function () {
    gulp.start('lint', 'sass', 'css', 'scripts', 'watch', 'built');
});