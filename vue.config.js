const path = require('path')
module.exports = {
  lintOnSave: false,
  css:{
    loaderOptions: {
      less: {
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.join(__dirname, 'src/assets/vant/css/variable.less'
          )}";`
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/mixin.less')]
    }
  },
  chainWebpack(config) {
    // 换肤loader[less]
    const less = config.module.rule('less').toConfig();
    const useable_less = { ...less.oneOf[3], test: /\.theme\.less$/ };
    useable_less.use = [...useable_less.use];
    // useable_less.use[0] = { loader: 'style-loader', options: { injectType: 'lazySingletonStyleTag' } };
    useable_less.use.unshift({ loader: 'style-loader', options: { injectType: 'lazySingletonStyleTag' } });
    config.module.rule('less').merge({
      oneOf: [useable_less]
    });
  }
}
