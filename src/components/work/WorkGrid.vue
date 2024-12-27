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
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 0 40px;
  max-width: 1600px;
  margin: 0 auto;
}

.work-item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  aspect-ratio: 16/9;
}

.work-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.work-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0,0,0,0.8);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.work-item:hover img {
  transform: scale(1.05);
}

.work-item:hover .work-info {
  transform: translateY(0);
}

.load-more {
  grid-column: 1 / -1;
  margin: 60px auto;
  padding: 12px 40px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
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
</style> 