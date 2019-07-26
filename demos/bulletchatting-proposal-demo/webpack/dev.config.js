/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',

    devtool: 'cheap-module-source-map',

    entry: {
        'polymer-bulletchatting': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
        ]
    },

    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, '..'),
        clientLogLevel: 'none',
        quiet: false,
        open: false,
        historyApiFallback: {
            disableDotRule: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    },

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    performance: {
        hints: false
    }

};
