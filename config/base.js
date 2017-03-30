var webpack = require('webpack');
var path = require('path');

module.exports = function() {
    return {
        entry: {
            'app': path.resolve(__dirname, '../src', 'app.js')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: false
                }
            })
        ]
    };
}
