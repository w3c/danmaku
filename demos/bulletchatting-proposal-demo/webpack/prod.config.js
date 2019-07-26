/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'production',

    bail: true,

    devtool: 'source-map',

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
    
    plugins: [
        new CopyWebpackPlugin([{
            from: 'node_modules/@webcomponents/webcomponentsjs/bundles',
            to: 'bundles',
            ignore: [ '*.js.map' ]
        }, {
            from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
            to: ''
        }])
    ],

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }

};
