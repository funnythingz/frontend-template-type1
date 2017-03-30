var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        'dist/app.js': path.resolve(__dirname, 'src', 'app.js')
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].map'
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //        drop_console: false,
        //    }
        //}),
    ]
};
