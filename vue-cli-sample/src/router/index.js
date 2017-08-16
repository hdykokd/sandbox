import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PushNotification from '@/components/PushNotification'
import Promise from '@/components/Promise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pn',
      name: 'PushNotification',
      component: PushNotification
    },
    {
      path: '/promise',
      name: 'Promise',
      component: Promise
    }
  ]
})
