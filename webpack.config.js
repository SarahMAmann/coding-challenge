var webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
    context: path.join(__dirname),
    entry: 'index',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
            },
            {
                test: /fonts\/.+\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /stylesheets\/.+\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { 
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                precss,
                                autoprefixer,
                            ],
                        },
                    },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'client'),
            'node_modules'
        ]
    }
};

module.exports = config;
