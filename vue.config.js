/**
 * @description vue.config.js全局配置
 */
const path = require('path')
const {
  baseURL,
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  title,
  abbreviation,
  devPort,
  providePlugin,
  build7z,
  proxyUrl,
  webpackBanner,
  webpackBarName,
  cdnConfig,
} = require('./src/config')
const { version, author } = require('./package.json')
const Webpack = require('webpack')
const WebpackBar = require('webpackbar')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const dateTime = new Date()
process.env.VUE_APP_TITLE = title
process.env.VUE_APP_AUTHOR = author
process.env.VUE_APP_UPDATE_TIME = dateTime
process.env.VUE_APP_VERSION = version
process.env.VUE_APP_server = proxyUrl.server
process.env.VUE_APP_imgserver = proxyUrl.imgurl
process.env.VUE_APP_Prometheus = proxyUrl.PrometheusUrl
process.env.VUE_APP_toppanDocx = proxyUrl.toppanDocx
process.env.VUE_APP_Keywords = 'zete--Keywords'
process.env.VUE_APP_Description = 'zete--description'

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      [baseURL]: {
        target: process.env.VUE_APP_server,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ['^' + baseURL]: '',
        },
      },

      '/imgurl': {
        target: process.env.VUE_APP_imgserver,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/imgurl': '',
        },
      },
      '/PrometheusUrl': {
        target: process.env.VUE_APP_Prometheus,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/PrometheusUrl': '',
        },
      },
      '/toppanDocx': {
        target: process.env.VUE_APP_toppanDocx,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/toppanDocx': '',
        },
      },
    },
  },
  configureWebpack() {
    return {
      externals: {
        'js-md5': 'md5',
        'js-base64': 'Base64',
        $: 'jquery',
        ace: 'ace',
        mqtt: 'mqtt',
        'paho-mqtt': 'paho-mqtt',
        Sortable: 'Sortable',
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        clipboard: 'clipboard',
        lodash: 'lodash',
        'vue-i18n': 'VueI18n',
        XLSX: 'xlsx',
        FileSaver: 'file-saver',
        'js-cookie': 'Cookies',
        'vue-baidu-map': 'BaiduMap',
        echarts: 'echarts',
        screenfull: 'screenfull',
        qs: 'qs',
        moment: 'moment',
        jsplumb: 'jsplumb',
        JSEncrypt: 'jsencrypt',
        CodeMirror: 'codemirror',
        nprogress: 'NProgress',
        'vue-codemirror': 'vueCodemirror',
        vuedraggable: 'vuedraggable',
        'element-china-area-data': 'elementChinaAreaData',
      },
      resolve: {
        alias: {
          '@': resolve('src'),
          '*': resolve(''),
        },
      },
      plugins: [
        new Webpack.ProvidePlugin(providePlugin),
        new WebpackBar({
          name: webpackBarName,
        }),
      ],
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].cdnConfig = cdnConfig
      return args
    })
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('svg')
      .exclude.add(resolve('src/remixIcon'))
      .add(resolve('src/colorfulIcon'))
      .end()

    config.module
      .rule('remixIcon')
      .test(/\.svg$/)
      .include.add(resolve('src/remixIcon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'remix-icon-[name]' })
      .end()

    config.module
      .rule('colorfulIcon')
      .test(/\.svg$/)
      .include.add(resolve('src/colorfulIcon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'colorful-icon-[name]' })
      .end()

    /*  config.when(process.env.NODE_ENV === "development", (config) => {
      config.devtool("source-map");
    }); */
    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config.performance.set('hints', false)
      config.devtool('none')
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          fortawesome: {
            name: 'chunk-fortawesome',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?@fortawesome(.*)/,
          },
        },
      })
      config
        .plugin('banner')
        .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`])
        .end()
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          bypassOnDebug: true,
        })
        .end()
    })

    if (build7z) {
      config.when(process.env.NODE_ENV === 'production', (config) => {
        config
          .plugin('fileManager')
          .use(FileManagerPlugin, [
            {
              onEnd: {
                delete: [`./${outputDir}/video`, `./${outputDir}/data`],
                archive: [
                  {
                    source: `./${outputDir}`,
                    destination: `./${outputDir}/${abbreviation}_${outputDir}_${dateTime}.7z`,
                  },
                ],
              },
            },
          ])
          .end()
      })
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          if (
            relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss'
          ) {
            return '@import "~@/styles/variables.scss";' + content
          }
          return content
        },
      },
    },
  },
}
