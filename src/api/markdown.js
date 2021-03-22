/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:35:32
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\api\markdown.js
 * @Description:
 */
export function getList() {
  return axios({
    url: 'https://cdn.jsdelivr.net/gh/prettier/prettier@master/docs/options.md',
    method: 'get',
  })
}
