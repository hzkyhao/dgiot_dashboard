/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:48:30
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\main.js
 * @Description:
 */
import App from './App'
import store from './store'
import router from './router'
import i18n from './i18n'
import './plugins'
import '@/layouts/export'
import utilwen from './utils/utilwen'
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

Vue.config.productionTip = false
Vue.use(utilwen)
new Vue({
  el: '#vue-admin-beautiful',
  i18n,
  router,
  store,
  render: (h) => h(App),
})
