const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@nines/plugin-pagation',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})