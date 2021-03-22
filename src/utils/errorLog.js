/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:57:32
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\utils\errorLog.js
 * @Description:
 */
import store from '@/store'
import { isArray, isString } from '@/utils/validate'
import { errorLog } from '@/config'

const needErrorLog = errorLog
const checkNeed = () => {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}
if (checkNeed()) {
  Vue.config.errorHandler = (err, vm, info) => {
    console.error('vue-admin-beautiful错误拦截:', err, vm, info)
    const url = window.location.href
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', { err, vm, info, url })
    })
  }
}
