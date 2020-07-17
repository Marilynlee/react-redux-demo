const path = require("path");
const webpack = require('webpack');

const config = {
    devtool: "#eval-source-map",
    mode:"development",
    entry: {
        index: path.resolve(__dirname, 'js/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].bundle.js',
        publicPath: "/static"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};

module.exports = config;