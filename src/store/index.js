/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:57:58
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\store\index.js
 * @Description:
 */
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
const store = new Vuex.Store({
  modules,
})
export default store
