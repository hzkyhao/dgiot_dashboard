/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
import { asyncRoutes, constantRoutes } from '@/router'
import { getRouterList } from '@/api/User'
import { convertRouter, filterAsyncRoutes } from '@/utils/handleRoutes'

const state = () => ({
  routes: [],
  partialRoutes: [],
})
const getters = {
  routes: (state) => state.routes,
  partialRoutes: (state) => state.partialRoutes,
}
const mutations = {
  setRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes)
  },
  setAllRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes)
  },
  setPartialRoutes(state, routes) {
    state.partialRoutes = constantRoutes.concat(routes)
  },
}
const actions = {
  async setRoutes({ commit }, permissions) {
    //开源版只过滤动态路由permissions，admin不再默认拥有全部权限
    const finallyAsyncRoutes = await filterAsyncRoutes(
      [...asyncRoutes],
      permissions
    )
    commit('setRoutes', finallyAsyncRoutes)
    return finallyAsyncRoutes
  },
  async setAllRoutes({ commit }) {
    const { results } = await getRouterList()
    /**
     * 处理路由
     */
    let data = []
    results.forEach((item, key) => {
      if (item.children) {
        item.children.forEach((i, k) => {
          i.hidden = i.meta.hidden || false
          i.menuHidden = i.meta.menuHidden || false
          i.alwaysShow = i.meta.alwaysShow || false
          i.name = i.name
          i.path = i.url
          i.component = i.meta.component
          i.meta.title = i.meta.title
          i.meta.icon = i.meta.icon
        })
      }
      if (item.meta.redirect) {
        data.push({
          hidden: item.meta.hidden || false,
          menuHidden: item.meta.menuHidden || false,
          alwaysShow: item.meta.alwaysShow || false,
          name: item.name,
          path: item.url,
          component: item.meta.component,
          redirect: item.meta.redirect,
          meta: {
            title: item.meta.title,
            icon: item.meta.icon,
          },
          children: item.children,
        })
      } else {
        data.push({
          hidden: item.hidden || false,
          menuHidden: item.menuHidden || false,
          alwaysShow: item.alwaysShow || false,
          name: item.name,
          path: item.url,
          component: item.meta.component,
          meta: {
            title: item.meta.title,
            icon: item.meta.icon,
          },
          children: item.children,
        })
      }
      console.log(data)
    })
    /*  let data = [
      {
        path: '/',
        component: 'Layout',
        redirect: 'index',
        children: [
          {
            path: 'index',
            name: 'Index',
            component: '@/views/index/workbench',
            meta: {
              title: '首页',
              icon: 'home',
              affix: true,
            },
          },
        ],
      },
      {
        path: '*',
        redirect: '/404',
        hidden: true,
      },
    ] */
    data.unshift({
      path: '/',
      name: 'Root',
      component: 'Layout',
      redirect: '/index',
      meta: {
        title: '首页',
        icon: 'home-2-line',
      },
      children: [
        {
          path: 'index',
          name: 'Index',
          component: '@/views/equipment_management/platform_overview',
          meta: {
            title: '首页',
            icon: 'home-2-line',
            affix: true,
          },
        },
      ],
    })

    let accessRoutes = convertRouter(data)
    commit('setAllRoutes', accessRoutes)
    return accessRoutes
  },
  setPartialRoutes({ commit }, accessRoutes) {
    commit('setPartialRoutes', accessRoutes)
    return accessRoutes
  },
}
export default { state, getters, mutations, actions }
