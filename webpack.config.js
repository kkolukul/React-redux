var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
