const path = require("path");
const config ={
	mode:"development",
	entry:"./src/index.tsx",
	module:{
		rules:[{
		test:/\.(js|jsx)$/,
		exclude:/node_modules/,
		use:{
			loader:'babel-loader'
		}
	},{
		test:/\.tsx$/,
		exclude:/node_modules/,
		use:{
			loader:'ts-loader'
		}
	}]
	},
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	}
};
module.exports =config;


