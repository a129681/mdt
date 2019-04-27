const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = {
    mode: 'production',
    plugins: [new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                drop_debugger: true,
                drop_console: true
            },
            output: {
                comments: false
            }
        }
    })]
}

module.exports = webpackMerge(baseConfig, config);