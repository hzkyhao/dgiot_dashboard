/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:10:16
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\config\index.js
 * @Description: 导出相关配置
 */

const setting = require('./setting.config')
const theme = require('./theme.config')
const network = require('./net.config')
const cdnConfig = require('./cdn.config')
module.exports = Object.assign({}, setting, theme, network, cdnConfig)
