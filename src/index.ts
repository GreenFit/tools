import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

// 路由
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: h => h(App)
}).$mount(root)