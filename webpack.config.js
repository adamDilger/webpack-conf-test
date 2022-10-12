const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	plugins: [
		new BundleAnalyzerPlugin(),
		...[
			'main',
			'home',
			'other',
		].map(
			(page) =>
			new HtmlWebpackPlugin({
				inject: false,
				templateContent: ({htmlWebpackPlugin}) => `
				${htmlWebpackPlugin.tags.headTags}
				`,
				filename: `${page}.html`,
				chunks: [page],
			})
		),
	],
	entry: {
		main: './src/index.js',
		home: './src/home.js',
		other: './src/other.js',
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		splitChunks: {
			minSize: 0,
			chunks: 'all',
		},
	},
};
