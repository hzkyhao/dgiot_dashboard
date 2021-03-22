/*
 * @Author: h7ml
 * @Date: 2021-03-15 11:16:40
 * @LastEditTime: 2021-03-17 21:24:25
 * @LastEditors: h7ml
 * @FilePath: \dgiot_dashboard\src\utils\vuex.js
 * @Description: vuex持久化方法
 */

import cookie from 'js-cookie'
/**
 * @description 获取token
 * @param tokenName
 * @param storage
 * @returns {void|*}
 */
export function getToken(tokenName, storage) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(tokenName) || ''
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(tokenName) || ''
    } else if ('cookie' === storage) {
      return cookie.get(tokenName) || ''
    } else {
      return localStorage.getItem(tokenName) || ''
    }
  } else {
    return localStorage.getItem(tokenName) || ''
  }
}

/**
 * @description 存储token
 * @param tokenName
 * @param token
 * @param storage
 * @returns {void|*}
 */
export function setToken(tokenName, token, storage) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenName, token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenName, token)
    } else if ('cookie' === storage) {
      return cookie.set(tokenName, token)
    } else {
      return localStorage.setItem(tokenName, token)
    }
  } else {
    return localStorage.setItem(tokenName, token)
  }
}

/**
 * @description 移除token
 * @param tokenName
 * @param storage
 * @returns {void|Promise<void>}
 */
export function removeToken(tokenName, storage) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.removeItem(tokenName)
    } else if ('cookie' === storage) {
      return cookie.remove(tokenName)
    } else {
      return localStorage.removeItem(tokenName)
    }
  } else {
    return localStorage.removeItem(tokenName)
  }
}
