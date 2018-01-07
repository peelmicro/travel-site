var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
svgRename = require('gulp-rename'),
del = require('del')

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', () => {
    return del(['./app/temp/sprite/','./app/assets/images/sprites/'])

})

gulp.task('createSprite', ['beginClean'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'))

})

gulp.task('copySpriteGraphic', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'))

})

gulp.task('copySpriteCss', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(svgRename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'))

})

gulp.task('endClean', ['copySpriteGraphic','copySpriteCss'], () => {
  return del(['./app/temp/sprite/'])
})

gulp.task('icons', ['beginClean','createSprite', 'copySpriteGraphic','copySpriteCss', 'endClean'])