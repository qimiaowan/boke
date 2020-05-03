const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    mode: "production",
    entry: {
        'index':'./src/main.js'
    },
    devServer: {
        watchOptions: {
            ignored: /node_modules/
          },
          open: true,
            host: 'localhost',
            port: 3333
     },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
        },
        {
            test: /\.tpl$/,
            loader: 'ejs-loader'
        },
        {
            test: /\.styl(us)?$/,
            use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'stylus-loader'
                    ]
            })
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks:true
        }),
        new htmlWebpackPlugin({
            title: '我的博客',
            template:'./index.html',  //默认初始模板的样子 然后在这个基础上添加
            filename:'index.html', //生成html
            minify: {
                collapseWhitespace: true, //压缩html代码
                removeAttributeQuotes:true //去掉html的双引号
            },
            // chunks: ['main'],
            chunksSortMode:'manual',
            inject:'body' //引入外部的js的存放位置 head 头部里面
        })
    ]
}

module.exports = webpackConfig;