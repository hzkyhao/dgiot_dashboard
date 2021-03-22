/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 15:51:50
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\config\net.config.js
 * @Description:
 */
/**
 * @description 导出默认网路配置
 **/
const network = {
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 5000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401,
  proxyUrl: {
    // 175
    toppanDocx: 'http://124.156.217.175:8085/',
    PrometheusUrl: 'http://101.32.100.234:9090/',
    server: 'http://132.232.121.164/',
    imgurl: 'http://101.32.100.234:3000/',
  },
}
module.exports = network
