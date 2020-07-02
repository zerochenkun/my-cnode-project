import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../components/Article"
import Postlist from "../components/Postlist"
import UserInfo from "../components/UserInfo"
Vue.use(VueRouter)
// ======↓↓↓↓↓↓↓↓↓ vue 自带 ↓↓↓↓↓↓↓↓↓======
//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router
// ====== ↑↑↑↑↑↑↑↑ vue 自带 ↑↑↑↑↑↑↑↑======

export default new VueRouter({
  routes:[
    {
      name:'root',
      path:'/',
      components:{
        main:Postlist
      }
    },
    {
      name:'post_content',
      path:'/topic/:id',
      components:{
        main:Article
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})