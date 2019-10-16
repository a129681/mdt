const process = require('process')
const path = require('path')
const baseConfig = require('../build/prod/webpack.config.prod')
const webpack = require('webpack')
const commond = process.argv.pop()
let componentPath = ''
let dependencies = {}
if (commond.includes('build.js')) {
  // 打包全部组件
} else {
  // 打包部分组件或单个组件
  componentPath = path.join(__dirname, '../components/') + commond
  const pck = require('../components/' + commond + '/package.json')
  dependencies = pck.dependencies && {}
}
if (componentPath) {
  baseConfig.entry = componentPath + '/index.tsx'
  baseConfig.output = {
    filename: `${commond}.min.js`,
    path: path.resolve(__dirname, componentPath + '/dist')
  }
}
if (dependencies) {
  baseConfig.externals = Object.keys(dependencies).map(key => {})
}
webpack(baseConfig).run((res, stat) => {})
