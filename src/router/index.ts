import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardOverview.vue'),
    },
    {
      path: '/user-listing',
      name: 'userListing',
      component: () => import('../views/UserListing.vue'),
    },
    {
      path: '/job-listing',
      name: 'jobListing',
      component: () => import('../views/JobListing.vue'),
    },
    {
      path: '/company-listing',
      name: 'companyListing',
      component: () => import('../views/CompanyListing.vue'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedbackAndReview.vue'),
    },
    {
      path: '/job-application',
      name: 'jobApplication',
      component: () => import('../views/JobApplication.vue'),
    },
    {
      path: '/role-permission',
      name: 'rolePermission',
      component: () => import('../views/RoleAndPermission.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/SystemAndSetting.vue'),
    },
  ],
})

export default router
