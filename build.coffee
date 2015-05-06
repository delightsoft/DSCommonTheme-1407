#
# It's common build code that is used from local gulpfile.coffee and from gulpfile.coffee of a final application
#

module.exports = (path, {gulp, coffee, compass, minifyCSSGulp, concat, uglify, header, rename, wrap, gutil}) ->

  pkg = require('./package.json')
  banner = "/*! #{ pkg.name } #{ pkg.version } */\n"

  gulp.task 'default', ['dst-uglify', 'dst-build'], ->

  gulp.task 'dst-build', ['dst-minimized-css', 'dst-uglify'], ->
    gulp.watch ["#{path}/theme/ngApp/sass/**/*.sass", "#{path}/app/views/sass/**/*.scss"], ['dst-minimized-css']
    gulp.watch "#{path}/app/ngApp/**/*.coffee", ['dst-uglify']

  gulp.task 'dst-sass', ->
    gulp.src(["#{path}/theme/ngApp/sass/*.sass", "#{path}/theme/ngApp/sass/*.scss"])
    .pipe(compass(
      sass: "#{path}/theme/ngApp/sass"
      css: "#{path}/static/ngApp/css"
      require: ['susy', 'breakpoint', 'modular-scale']
    ))
    .pipe(gulp.dest("#{path}/static/ngApp/css"))

  gulp.task 'dst-minimized-css', ['dst-sass'], ->
    gulp.src("#{path}/static/ngApp/css/dscommon-theme-1407.css")
    .pipe(minifyCSSGulp())
    .pipe(rename('dscommon-theme-1407.min.css'))
    .pipe(gulp.dest("#{path}/static/ngApp/css"))

  gulp.task 'dst-coffee', ->
    gulp.src("#{path}/app/ngApp/**/*.coffee")
    .pipe(coffee())
      .on('error', gutil.log)
      .on('error', gutil.beep)
    .pipe(gulp.dest("#{path}/static/ngApp/js/coffee"))

  gulp.task 'dst-concat', ['dst-coffee'], ->
    gulp.src("#{path}/static/ngApp/js/coffee/**/*.js")
    .pipe(concat('dscommon-theme.js'))
    .pipe(header(banner))
    .pipe(gulp.dest("#{path}/static/ngApp/js"))

  gulp.task 'dst-uglify', ['dst-concat'], ->
    gulp.src("#{path}/static/ngApp/js/dscommon-theme.js")
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(rename('dscommon-theme.min.js'))
    .pipe(gulp.dest("#{path}/static/ngApp/js"))
    