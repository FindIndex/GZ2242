const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// var webpack = require("webpack")
// module.exports = {
//     publicPath: "./",
//     lintOnSave: false,
//     devServer: {
//         open: true,
//         host: 'localhost',
//         port: 8080,
//         https: false,
//         overlay: {
//             warning: false,
//             errors: false
//         },
//         proxy: {
//             '/api': {
//                 target: '',//配置接口地址
//                 ws: true,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''  //请求的时候使用api去拼接剩下的具体请求的url即可
//                 }
//             },
//         }
//     },
//     configureWebpack:{
//         plugins: [
//             new webpack.ProvidePlugin({
//                 $:"jquery",
//                 jQuery:"jquery",
//                 "windows.jQuery":"jquery"
//             })
//         ],
//     }
//     // css: {
//     //     loaderOptions: {
//     //         less: {
//     //             javascriptEnabled: true
//     //         }
//     //     }
//     // },
//     // configureWebpack: {
//     //     externals: {
//     //         'AMap': 'AMap' // 高德地图配置
//     //     }
//     // }
// }
