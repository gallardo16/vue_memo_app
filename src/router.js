import Vue from 'vue'
import Router from 'vue-router'
import Update from './views/Update.vue'
import Memos from './views/Memos.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [{ path: '/', component: Memos }, { path: "/add", component: Add }, { path: "/update", component: Update }]
})
