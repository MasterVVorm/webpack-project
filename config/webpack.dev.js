const common = require('./webpack.common')

const dev = {
    stats: 'errors-only',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        compress: false
    }
}

module.exports = Object.assign(dev, common)