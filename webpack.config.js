var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: path.resolve(__dirname, 'src/main.jsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.css/,
				loader: 'style!css'
			}
		]
	},
    resolve: {
		extensions: ['', '.js', '.jsx']
    }
};
