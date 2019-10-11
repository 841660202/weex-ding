/**
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 21:18:44
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 22:35:16
 * @Descripttion:
 */
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page0 from '@/views/page0'
import Page1 from '@/views/page1'
import Page2 from '@/views/page2'
import Page3 from '@/views/page3'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page0',
      name: 'page0',
      component: Page0
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3
    }
  ]
})
