const webpack = require('webpack');
const path = require('path');

const PORT = 3000;

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: [
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/only-dev-server',
        './scripts/App.jsx',
        './scripts/index'
    ],

    output: {
        path: './dist',
        filename: 'index.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel'
            ]
        }]
    },

    devServer: {
        port: PORT,
        contentBase: path.join(__dirname, 'dist')
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
