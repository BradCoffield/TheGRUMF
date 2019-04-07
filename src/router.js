import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-submission',
      name: 'add-submission',
      component: () => import(/* webpackChunkName: "addSub" */ './views/AddSubmission.vue')
    },
    {
      path: '/view-submissions',
      name: 'view-submissions',
      component: () => import(/* webpackChunkName: "viewSub" */ './views/ViewSubmissions.vue')
    },
    {
      path: '/edit-submission/:id',
      name: 'editSubmission',
      component: () => import(/* webpackChunkName: "editSub" */ './views/EditSubmission.vue')
    },
    {
      path: '/rate-submission/:id',
      name: 'rateSubmission',
      component: () => import(/* webpackChunkName: "rateSub" */ './views/RateSubmission.vue')
    },
    {
      path: '/final-decision/:id',
      name: 'finalDecision',
      component: () => import(/* webpackChunkName: "rateSub" */ './views/FinalDecision.vue')
    },
  
  ]
})
