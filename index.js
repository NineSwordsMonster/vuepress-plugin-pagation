const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define () {
    const { perPage } = options || {}
    return {
      PERPAGE: perPage
    }
  },
  name: '@nine-theme/vuepress-plugin-pagation',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
