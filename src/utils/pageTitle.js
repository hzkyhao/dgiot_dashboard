/*
 * @Author: h7ml
 * @Date: 2021-03-12 10:00:15
 * @LastEditTime: 2021-03-15 12:41:02
 * @LastEditors: h7ml
 * @FilePath: \dgiot_dashboard\src\utils\pageTitle.js
 * @Description:
 */
import { title, titleReverse, titleSeparator } from '@/config'
import i18n from '@/i18n'
import store from '../store/index'
/**
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (i18n.te(`vabI18n.${pageTitle}`))
    pageTitle = i18n.t(`vabI18n.${pageTitle}`)
  let newTitles = []
  if (pageTitle) newTitles.push(pageTitle)
  if (title) newTitles.push(title)
  if (titleReverse) newTitles = newTitles.reverse()
  let retutnTitle = newTitles.join(titleSeparator)
  if (store.getters['settings/title']) {
    retutnTitle = newTitles
      .join(titleSeparator)
      .replace('shuwa Admin Pro', store.getters['settings/title'])
  }
  return retutnTitle
}
