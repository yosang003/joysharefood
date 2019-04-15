const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');


module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/app.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {   loader: 'style-loader' },
                    { loader: "css-loader", options: { modules: true} }
                ]
            },
            {
                test: /.less$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader"},
                  { loader: "less-loader",
                    options:{
                        sourceMap:true,
                        modifyVars:{
                            "@primary-color":"#FF9900"
                        },
                        javascriptEnabled: true,
                    }
                }
                ]
              },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        proxy: {
          '/api': { // api表示当前项目请求的key
            target: 'http://apis.juhe.cn/cook', // 代理服务器路径
            pathRewrite: {'^/api' : ''}, // 重写路径
            changeOrigin: true
          }
        }
    }
}