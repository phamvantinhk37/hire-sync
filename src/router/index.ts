import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      meta: { title: 'Dashboard', subTitle: 'View statistics of system' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardOverview.vue'),
    },
    {
      path: '/user-listing',
      name: 'userListing',
      meta: { title: 'Users' },
      component: () => import('../views/UserListing.vue'),
    },
    {
      path: '/job-listing',
      name: 'jobListing',
      meta: { title: 'Job Listings' },
      component: () => import('../views/JobListing.vue'),
    },
    {
      path: '/company-listing',
      name: 'companyListing',
      meta: { title: 'Companies' },
      component: () => import('../views/CompanyListing.vue'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      meta: { title: 'Feedback / Review' },
      component: () => import('../views/FeedbackAndReview.vue'),
    },
    {
      path: '/job-application',
      name: 'jobApplication',
      meta: { title: 'Job Applications' },
      component: () => import('../views/JobApplication.vue'),
    },
    {
      path: '/role-permission',
      name: 'rolePermission',
      meta: { title: 'Role & Permission' },
      component: () => import('../views/RoleAndPermission.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      meta: { title: 'Settings' },
      component: () => import('../views/SystemAndSetting.vue'),
    },
  ],
})

export default router
