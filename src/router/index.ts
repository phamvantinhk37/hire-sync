import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      meta: { title: 'Dashboard', subTitle: 'A high-level summary of key metrics, platform stats, and recent activity' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardOverview.vue'),
    },
    {
      path: '/user-listing',
      name: 'userListing',
      meta: { title: 'Users', subTitle: 'Manage user accounts, roles, and personal details across the platform' },
      component: () => import('../views/UserListing.vue'),
    },
    {
      path: '/job-listing',
      name: 'jobListing',
      meta: { title: 'Job Listings', subTitle: "View, create, or edit job openings available for applicants"},
      component: () => import('../views/JobListing.vue'),
    },
    {
      path: '/company-listing',
      name: 'companyListing',
      meta: { title: 'Companies', subTitle: 'Access company profiles, contact info, and employer-related data' },
      component: () => import('../views/CompanyListing.vue'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      meta: { title: 'Feedback / Review', subTitle: "Monitor ratings, comments, or suggestions shared by users" },
      component: () => import('../views/FeedbackAndReview.vue'),
    },
    {
      path: '/job-application',
      name: 'jobApplication',
      meta: { title: 'Job Applications', subTitle: "Track submitted applications and manage their recruitment status" },
      component: () => import('../views/JobApplication.vue'),
    },
    {
      path: '/role-permission',
      name: 'rolePermission',
      meta: { title: 'Role & Permission', subTitle: "Configure access rights for different user groups and roles" },
      component: () => import('../views/RoleAndPermission.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      meta: { title: 'Settings', subTitle: "Customize system preferences, notifications, and other configurations" },
      component: () => import('../views/SystemAndSetting.vue'),
    },
  ],
})

export default router
