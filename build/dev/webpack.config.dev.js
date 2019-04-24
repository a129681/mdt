const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
const config = {
	mode:'development',
	plugins:[new BundleAnalyzerPlugin()]
}

module.exports=webpackMerge(baseConfig,config);