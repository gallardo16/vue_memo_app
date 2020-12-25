import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Memos from './views/Memos.vue'
import Create from './views/Create.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/memos'
    },
    {
      path: '/memos',
      component: Memos
    },
    {
      path: "/memos/create",
      component: Create
    },
    {
      path: "/memos/:id",
      component: Show,
      props: true
    },
    {
      path: "*",
      redirect: '/memos'
    }
  ]
})
