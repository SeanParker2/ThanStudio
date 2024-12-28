<template>
  <div class="works-grid">
    <TransitionGroup name="work-item">
      <div 
        v-for="item in filteredWorks" 
        :key="item.id"
        class="work-item"
      >
        <img :src="item.image" :alt="item.title">
        <div class="work-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </TransitionGroup>
    
    <button 
      v-if="hasMore" 
      class="load-more"
      @click="$emit('load-more')"
    >
      加载更多
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface WorkItem {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const props = defineProps<{
  works: WorkItem[]
  currentCategory: string
  hasMore: boolean
}>()

defineEmits<{
  (e: 'load-more'): void
}>()

const filteredWorks = computed(() => {
  if (props.currentCategory === 'all') {
    return props.works
  }
  return props.works.filter(work => work.category === props.currentCategory)
})
</script>

<style scoped>
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1440px;
}

.work-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 16/9;
  background: rgba(255,255,255,0.05);
  transition: transform 0.3s ease;
}

.work-item:hover {
  transform: translateY(-5px);
}

.work-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.work-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.work-info h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.work-info p {
  font-size: 1rem;
  opacity: 0.8;
}

.load-more {
  grid-column: 1 / -1;
  margin: 80px auto;
  padding: 15px 50px;
  border: 1px solid rgba(255,255,255,0.3);
  background: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.load-more:hover {
  background: #fff;
  color: #000;
}

/* 过渡动画 */
.work-item-enter-active,
.work-item-leave-active {
  transition: all 0.3s ease;
}

.work-item-enter-from,
.work-item-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
  
  .work-item {
    aspect-ratio: 4/3;
    border-radius: 12px;
  }

  .work-info {
    padding: 12px;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.8) 0%,
      rgba(0,0,0,0.4) 60%,
      transparent 100%
    );
  }

  .work-info h3 {
    font-size: 1.2rem;
    margin-bottom: 6px;
  }

  /* 优化触摸反馈 */
  .work-item:active {
    transform: scale(0.98);
    transition: transform 0.2s ease;
  }
}
</style> 