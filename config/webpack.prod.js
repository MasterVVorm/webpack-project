const path = require('path')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prod = {
    devtool: 'source-map',
    output: {
        path:path.resolve('build'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}

module.exports = Object.assign(prod, common)