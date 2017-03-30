var merge = require('webpack-merge');
var path = require('path');
var baseConfig = require('./base.js');

module.exports = function(env) {
    return merge(baseConfig(), {
        devtool: 'cheap-eval-source-map',
        output: {
            sourceMapFilename: '[name].map'
        },
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            compress: true,
            port: 8080
        }
    });
}
