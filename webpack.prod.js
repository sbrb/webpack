const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[fullhash].js',
        chunkFileName: '[name].bundle.[fullhash].js'
    }
})
