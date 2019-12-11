let gulp = require("gulp");
let cssmin = require("gulp-cssmin");
let prefixer = require("gulp-autoprefixer");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let htmlmin = require("gulp-htmlmin");
let clean = require("gulp-clean");
let sass = require("gulp-sass");
let run = require("run-sequence");
let webserver = require("gulp-webserver");
gulp.task("css", function() {
	return gulp.src("./css/**")
	.pipe(prefixer())
	.pipe(cssmin())
	.pipe(gulp.dest("./dist/css"));
});

gulp.task("js", function() {
	return gulp.src("js/**")
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"));
})
gulp.task("html", function() {
	return gulp.src("./index.html")
	.pipe(htmlmin({
		"collapseWhitespace" : true,
		"minifyCss" : true,
		"minifyJs" : true,
		"removeEmptyAttributes" : true
	}))
	.pipe(gulp.dest("./dist/html"));
})
gulp.task("sass", function() {
	return gulp.src("./css/**")
	.pipe(sass())
	.pipe(prefixer())
	.pipe(cssmin())
	.pipe(gulp.dest("./dist/css"));
})
gulp.task("clean", function() {
	return gulp.src("./dist")
	.pipe(clean());
})
gulp.task("webserver", function() {
	gulp.src("./dist")
	.pipe(webserver({
		host: "localhost",
		port: 3000,
		livereload: true,
		open: true,
		fallback: "./index.html"
	}))
})
gulp.task("default", function() {
	run(
		"clean",
		["html", "css", "js", "sass"]
	)
})