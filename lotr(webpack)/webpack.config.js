const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
	entry:'./js/main.js',
    // entry: [
    //   'webpack/hot/dev-server',
    //   'webpack-dev-server/client?http://localhost:8080',
    //   path.resolve(__dirname, './js/main.js')
    // ],
	output: {
		path: path.resolve(__dirname, 'buildup'),
		filename: 'bundle.js',
		publicPath: 'buildup/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 40000,
							name: 'pic/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ 
					fallback:'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}]
				})
			},
		    {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                loader: 'file-loader'
            }
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].[hash].css')
	]
}