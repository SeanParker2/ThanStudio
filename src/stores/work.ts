import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WorkItem } from '@/types/work'

export const useWorkStore = defineStore('work', () => {
  const works = ref<WorkItem[]>([
    {
      id: 1,
      title: '品牌设计项目',
      description: '品牌策略 / 视觉识别 / 2024',
      category: 'brand',
      image: '/src/assets/images/10001.jpg'
    },
    {
      id: 2,
      title: '数字产品设计',
      description: 'UI设计 / 用户体验 / 2024',
      category: 'digital',
      image: '/src/assets/images/10002.png'
    },
    {
      id: 3,
      title: '空间设计',
      description: '室内设计 / 展览设计 / 2024',
      category: 'space',
      image: '/src/assets/images/10003.png'
    },
    {
      id: 4,
      title: '包装设计',
      description: '产品包装 / 视觉设计 / 2024',
      category: 'package',
      image: '/src/assets/images/10004.png'
    },
    {
      id: 5,
      title: '品牌设计',
      description: '品牌策略 / 视觉识别 / 2024',
      category: 'brand',
      image: '/src/assets/images/10005.png'
    },
    {
      id: 6,
      title: '数字设计',
      description: 'UI设计 / 交互设计 / 2024',
      category: 'digital',
      image: '/src/assets/images/10006.png'
    },
    {
      id: 7,
      title: '空间设计',
      description: '展览设计 / 空间规划 / 2024',
      category: 'space',
      image: '/src/assets/images/10007.png'
    },
    {
      id: 8,
      title: '包装设计',
      description: '产品包装 / 创意设计 / 2024',
      category: 'package',
      image: '/src/assets/images/10008.png'
    }
  ])

  const currentCategory = ref('all')
  const currentPage = ref(1)
  const hasMore = ref(false)

  return {
    works,
    currentCategory,
    hasMore
  }
}) 