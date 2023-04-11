module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('cssnano')({ preset: 'default', }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-utilities'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    })
  ],
};