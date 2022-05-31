import gulp from 'gulp'
import imagemin from 'gulp-imagemin';

function imgSquash() {
    return gulp
        .src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/minified/img'))
}

gulp.task('imgSquash', imgSquash);

gulp.task('watch', () => {
    gulp.watch('assets/img/*', imgSquash)
});

gulp.task('default', gulp.series('imgSquash', 'watch'));