const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
module.exports = {

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      }
    }
  }
}
