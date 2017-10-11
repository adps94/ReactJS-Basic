var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 4000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],
        noParse: [new RegExp('node_modules/localforage/dist/localforage.js')]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
