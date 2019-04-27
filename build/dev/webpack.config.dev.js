const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');
const webpack = require('webpack');
const path = require("path");
const config = {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        hot: true, 
        open: true //拉起浏览器
    }
}

module.exports = webpackMerge(baseConfig, config);