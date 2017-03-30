var merge = require('webpack-merge');
var path = require('path');
var baseConfig = require('./base.js');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return merge(baseConfig(), {
        output: {
            filename: '[name].prod.js'
        },
        plugins: [
            new UglifyJSPlugin({
                compress: true
            })
        ]
    })
}
