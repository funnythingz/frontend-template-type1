module.exports = function() {
    return {
        entry: {
            'app': path.resolve(__dirname, '../src', 'app.js')
        },
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: publicPath,
            sourceMapFilename: '[name].map'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: false,
                }
            }),
        ]
    };
}
