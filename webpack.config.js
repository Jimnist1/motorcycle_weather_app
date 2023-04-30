const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$/, 
            use: 'babel-loader', 
            exclude: /node_modules/},
            {test: /\.png$/, use: [
                {
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png'
                    }
                }
            ]},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    devServer: {
            static: path.resolve(__dirname, 'src'),
            port: 8080,
            open: true,
            hot: true
        },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new Dotenv()
    ]
}