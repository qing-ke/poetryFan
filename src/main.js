import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import HomeA from './components/body/HomeA'
import HomeB from './components/body/HomeB'
import HomeC from './components/body/HomeC'
import HomeD from './components/body/HomeD'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */

// new Vue({
//   el: '#app',
//   components: { App }
// })
//
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '', redirect: '/HomeA' },
  { path: '/HomeA', component: HomeA },
  { path: '/HomeB', component: HomeB },
  { path: '/HomeC', component: HomeC },
  { path: '/HomeD', component: HomeD }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
 // linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  components: { App },
  router
})
