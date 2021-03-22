/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:35:23
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\api\github.js
 * @Description:
 */
export function getRepos(params) {
  return axios({
    url: 'https://api.github.com/repos/chuzhixin/vue-admin-beautiful',
    method: 'get',
    params,
    timeout: 10000,
  })
}

export function getStargazers(params) {
  return axios({
    url:
      'https://api.github.com/repos/chuzhixin/vue-admin-beautiful/stargazers',
    method: 'get',
    params,
    timeout: 10000,
  })
}
