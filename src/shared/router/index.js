import Vue from 'vue'
import Router from 'vue-router'
import Act from '@/app/activity/guoqing/index'
import Award from '@/app/activity/guoqing/award'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/activity/guoqing'
    },
    {
      path: '/activity/guoqing',
      name: 'guoqing',
      component: Act
    },
    {
      path: '/activity/guoqing/award',
      name: 'guoqingaward',
      component: Award
    }

  ]
})
