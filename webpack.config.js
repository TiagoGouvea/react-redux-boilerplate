// Imports
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Env
const env = (process.env.NODE_ENV === "production"
    ? "production"
    : "development");

// Version
const version = '0.3.0';
const release = '21 de Agosto de 2017';

// Plugin setup
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({template: './dist/index.html', filename: 'index.html', inject: false});
const definePluginConfig = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': '"' + env + '"',
        'APP_VERSION': JSON.stringify(version),
        'APP_RELEASE': JSON.stringify(release)
    }
});

// Configuration
const buildDirectory = './dist/';
const appDir = path.resolve(__dirname, 'src/');

// Build it!
var dev = (env === "development");
console.log('NODE_ENV: ' + env + " - dev: ", dev);

module.exports = {
    entry: ["babel-polyfill", appDir + '/index.js'],
    output: {
        path: path.resolve(buildDirectory),
        filename: '_bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules',
                include: /flexboxgrid/
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader?name=img/[name].[ext]', {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 4
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: (dev
        ? {
            historyApiFallback: true,
            contentBase: [
                '/',
                path.resolve(__dirname, 'dist/')
            ],
            port: 9494
        }
        : {}),
    devtool: (dev
        ? 'eval-source-map'
        : 'source-map'),
    plugins: (dev
        ? [HtmlWebpackPluginConfig, definePluginConfig]
        : [definePluginConfig])
};
