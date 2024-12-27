import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import StoryView from '@/views/StoryView.vue'
import ContactView from '@/views/ContactView.vue'
import StoreView from '@/views/StoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresReset: true }
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 清除之前页面可能存在的样式和状态
  document.body.style.overflow = ''
  
  // 如果是需要重置的页面，添加特定的处理
  if (to.meta.requiresReset) {
    // 触发一个自定义事件，让相关组件知道需要重置
    window.dispatchEvent(new Event('pageReset'))
  }
  
  next()
})

export default router
