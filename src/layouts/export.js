/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:57:03
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\layouts\export.js
 * @Description:
 */
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 公共布局及样式自动引入
 */

const requireComponents = require.context('./components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const requireZxLayouts = require.context('zx-layouts', true, /\.vue$/)
requireZxLayouts.keys().forEach((fileName) => {
  const componentConfig = requireZxLayouts(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const requireThemes = require.context('@/styles/themes', true, /\.scss$/)
requireThemes.keys().forEach((fileName) => {
  require(`@/styles/themes/${fileName.slice(2)}`)
})
