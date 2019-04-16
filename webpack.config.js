const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const customMiddleware = require('./server/lib');

const WEBPACK_MODE = process.env.npm_lifecycle_event;


const config = {
    entry: {
            app: path.resolve(__dirname, 'js', 'app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    devtool: (WEBPACK_MODE === 'build') ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules=true&localIdentName=[local]', 'postcss-loader']
                })
            },
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.ko$/,
                use: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8779,
        before: customMiddleware
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'index.html'),
            filename: 'index.html',
            chunks: ['app']
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'images'),
                to: path.resolve(__dirname, 'public', 'images')
            },
            {
                from: path.resolve(__dirname, 'htmls'),
                to: path.resolve(__dirname, 'public')
            },
            {
                from: path.resolve(__dirname, '3rdparty'),
                to: path.resolve(__dirname, 'public', '3rdparty')
            }
        ])
    ]
};

if (WEBPACK_MODE === 'build') {
    config.plugins = [...config.plugins, new UglifyJsPlugin()]
}

module.exports = config;
