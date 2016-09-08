module.exports = {
	src: {
    js: './src/js/**/*.js',
    sass: './src/scss/**/*.scss',
    css: [
      './src/css/**/*.css',
      '!./scr/css/**/*.min.css'
    ],
    php: [
      '**/*.php',
      '!./images',
      './logs',
      '!./node_modules',
      '!./public',
      '!./src',
      '!./bower_components'
    ]
	},
  dest: {
    css: './public/css',
    js: './public/js'
  }
};
