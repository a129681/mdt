const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');
const config = {
	mode:'production',
}

module.exports=webpackMerge(baseConfig,config);