var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var EncodingPlugin = require('webpack-encoding-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractSASS = new ExtractTextPlugin('[name].css');

module.exports = function() {
    return {
        entry: {
            'app': path.resolve(__dirname, '../src', 'app.js'),
            'styles': path.resolve(__dirname, '../assets/sass/styles.sass')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.sass$/i,
                    use: extractSASS.extract(['css-loader', 'sass-loader'])
                }
            ]
        },
        plugins: [
            extractSASS,
            new EncodingPlugin({
                encoding: 'utf-8'
            }),
            new HtmlWebpackPlugin({
                template: 'assets/template.html',
                filename: 'app.html'
            }),
            new CleanWebpackPlugin(['dist'], {
                verbose: true,
                dry: false
            })
        ]
    };
}
