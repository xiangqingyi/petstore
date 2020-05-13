import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main';
import Form from '@/components/Form';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true
    },
    {
      path: '/form',
      name: Form,
      component: Form,
      props: true
    }
  ]
})
