
var gulp = require('gulp');

//Before use the gulp-sass plugin, need to make it available to gulp
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function(done) {
	console.log('hello world!');
	done();
	return;
});

//create new task, name it styles (what the 1st argument is for)
//second function is executed when the task is called
gulp.task('styles', function(done) {
	//files want to work with
	//gulp special command, src, in the gulp object

	//the line added (/) looks for files with the .css extension in a sass folder
	//at any potential sub directories
	gulp.src('sass/**/*.scss')
		//the pipe function on the stream of files takes the destination
		//that the plugin provides, so we call sass right here

		//We have converted out files form sass to proper css now
		//.pipe(sass())

		//insert sass log error function changes default behavior
		//instead of killing the whole build, it tells Gulp to log the error
		//and go on as usual
		.pipe(sass().on('error', sass.logError))

		//Insert a configuration object to specify the browser's option of
		//autoprefixer, which tells autoperfixer for which browser versions to prefix
		.pipe(autoprefixer({
			//ask to use the last two versions of every popular browser
			browsers: ['last 2 versions']
		}))
		//To save the files
		//gulp destination - CSS folder
		.pipe(gulp.dest('./css'));

		browserSync.init({
     	server: "./"
 		});
 		browserSync.stream()

	done();
	return;
});

/*
gulp.task('server', function(done){
	browserSync.init({
		//the root
    	server: "./"
	});
	browserSync.stream();
	done();
	return;

});
*/
