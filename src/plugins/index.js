/*
 * @Author: h7ml
 * @Date: 2021-03-17 11:14:09
 * @LastEditTime: 2021-03-18 16:57:10
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\plugins\index.js
 * @Description:
 */
/* 公共引入,勿随意修改,修改时需经过确认 */
import './element'
import './support'
import '@/styles/vab.scss'
import '@/remixIcon'
import '@/colorfulIcon'
import '@/config/permission'
import '@/utils/errorLog'
import './vabIcon'
import VabPermissions from 'zx-layouts/Permissions'
import Vab from '@/utils/vab'
import VabCount from 'zx-count'

Vue.use(Vab)
Vue.use(VabPermissions)
Vue.use(VabCount)
