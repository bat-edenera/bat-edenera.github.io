const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    }
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              reduce_vars: false
            }
          }
        })
      ]
    }
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].cdn = ['https://cdn.bootcss.com/vue/2.6.10/vue.min.js', 'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js'];
        return args;
      })
  },
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
