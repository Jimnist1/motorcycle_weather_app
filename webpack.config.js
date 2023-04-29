const webpack = require('webpack')
module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.png$/, use: [
                {
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png'
                    }
                }
            ]},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
            {test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    }
}