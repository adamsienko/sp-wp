var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('social_pride/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('social_pride/css'));
});
gulp.task('watch', function () {
    gulp.watch('social_pride/scss/*.scss', ['sass']);
});