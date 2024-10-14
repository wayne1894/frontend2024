import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
		{
      path: '/course/:id', // 這裡定義了 course 的動態路由
      name: 'course-id',
			props: true, // 這樣可以讓 `id` 作為 props 傳入到 CourseView 中
			component: () => import('../views/CourseView.vue')
    }
  ]
})

export default router
