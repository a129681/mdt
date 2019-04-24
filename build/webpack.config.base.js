const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {

    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        },{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
        })
        },{
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [new htmlWebpackPlugin({ filename: 'index.html', template: './index.html' }),new ExtractTextPlugin('style.css')]
};
module.exports = config;