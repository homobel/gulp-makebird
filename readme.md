
# Gulp Makebird Plugin

## Usage

	gulp.task('makebird', function() {

		return gulp.src('script.js', {read: false})
			.pipe(makebird())
			.pipe(gulp.dest('build'));

	});

## Licence

The MIT License (MIT)
