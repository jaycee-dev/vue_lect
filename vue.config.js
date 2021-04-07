/* eslint-disable */
const path = require('path')
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://sample.bmaster.kro.kr",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}