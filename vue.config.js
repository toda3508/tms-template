'use strict'
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {

    publicPath: './',

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const plugins = [
                new UglifyJSPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            ]
            config.plugins = [...config.plugins, ...plugins]
        }
    },

    devServer: {
        disableHostCheck: true,
        open: false,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://',
                // ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                },
            },
        },
        before: app => {}
    }
}