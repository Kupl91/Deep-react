import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        filename: '[name].[contenthash]js',
        path: path.resolve('build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin()
    ]
};