<template>
  <div class="work-page">
    <div class="work-header">
      <h1>Our Works</h1>
      <p>探索我们的创意作品集</p>
    </div>
    <WorkFilter v-model="currentCategory" />
    <WorkGrid 
      :works="works"
      :current-category="currentCategory"
      :has-more="hasMoreWorks"
      @load-more="loadMoreWorks"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WorkFilter from '@/components/work/WorkFilter.vue'
import WorkGrid from '@/components/work/WorkGrid.vue'

// 导入图片
import image1 from '@/assets/images/10001.jpg'
import image2 from '@/assets/images/10002.png'
import image3 from '@/assets/images/10003.png'
import image4 from '@/assets/images/10004.png'
import image5 from '@/assets/images/10005.png'
import image6 from '@/assets/images/10006.png'
import image7 from '@/assets/images/10007.png'
import image8 from '@/assets/images/10008.png'

const currentCategory = ref('all')
const hasMoreWorks = ref(true)
const currentPage = ref(1)

const works = ref([
  {
    id: 1,
    title: '品牌设计项目',
    description: '品牌策略 / 视觉识别 / 2024',
    category: 'brand',
    image: image1
  },
  {
    id: 2,
    title: '数字产品设计',
    description: 'UI设计 / 用户体验 / 2024',
    category: 'digital',
    image: image2
  },
  {
    id: 3,
    title: '空间设计',
    description: '室内设计 / 展览设计 / 2024',
    category: 'space',
    image: image3
  },
  {
    id: 4,
    title: '包装设计',
    description: '产品包装 / 视觉设计 / 2024',
    category: 'package',
    image: image4
  },
  {
    id: 5,
    title: '品牌设计',
    description: '品牌策略 / 视觉识别 / 2024',
    category: 'brand',
    image: image5
  },
  {
    id: 6,
    title: '数字设计',
    description: 'UI设计 / 交互设计 / 2024',
    category: 'digital',
    image: image6
  },
  {
    id: 7,
    title: '空间设计',
    description: '展览设计 / 空间规划 / 2024',
    category: 'space',
    image: image7
  },
  {
    id: 8,
    title: '包装设计',
    description: '产品包装 / 创意设计 / 2024',
    category: 'package',
    image: image8
  }
])

const loadMoreWorks = () => {
  currentPage.value++
  if (currentPage.value >= 3) {
    hasMoreWorks.value = false
  }
}
</script>

<style scoped>
.work-page {
  padding: 120px 0 80px;
  min-height: 100vh;
}

.work-header {
  text-align: center;
  margin-bottom: 80px;
  padding: 0 40px;
}

.work-header h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.work-header p {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .work-page {
    padding: 60px 0 40px;
  }

  .work-header {
    margin-bottom: 30px;
  }

  .work-header h1 {
    font-size: 2rem;
  }

  .filter-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  .filter-list {
    display: flex;
    gap: 10px;
    padding-bottom: 5px;
    min-width: min-content;
  }

  .filter-item {
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style> 