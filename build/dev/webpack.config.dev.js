const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');

const config = {
	mode:'development',
	module:{
		rules:[{
			loader:'style-loader'
		},{
			loader:'css-loader'
		},{
			loader:'sass-loader'
		}]
	}
}

module.exports=webpackMerge(baseConfig,config);