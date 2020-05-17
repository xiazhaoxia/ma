// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import About from './components/about'
import Product from './components/product'
import Solution from './components/solution'
import News from './components/news'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/product',
  component: Product
}, {
  path: '/solution/:id',
  component: Solution
}, {
  path: '/news',
  component: News
}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = '天津启航物联-UWB定位专家'
  next()
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
