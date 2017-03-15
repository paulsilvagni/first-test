var gulp            = require('gulp'); // Gulp core package
var sass            = require('gulp-sass'); // Package to compile scss files
var notify          = require("gulp-notify");
var path            = require('path'); // Gulp path package

var srcPath         = './src/'; // Path to our source files
var distPath        = './dist/'; // Path to your distributi

// Files/Paths that need to be watched by gulp
var watchPaths    = {
    sass:        [srcPath+'sass/styles.scss']
};

// Task for sass files
gulp.task('sass', function () {
    gulp
        // Load styles.sass into the stream
        .src(srcPath + 'sass/styles.scss') 
        // Compile the styles.scss using the gulp-sass package
        .pipe(sass())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running sass task" }))
        // Save the compiled file as styles.css to our distribution location
        .pipe(gulp.dest(distPath + 'css'));

});

// The watch task will be executed upon each file change
gulp.task('watch', function() {
    gulp.watch(watchPaths.sass, ['sass']);
});

// Default task is executed upon execution of gulp
gulp.task('default', ['sass', 'watch']);