<template>
  <div class="products-grid">
    <div 
      v-for="product in filteredProducts" 
      :key="product.id"
      class="product-item"
      :data-category="product.category"
    >
      <div class="product-image">
        <img :src="product.image" :alt="product.title">
        <div class="product-overlay">
          <button class="view-details" @click="viewDetails(product)">
            查看详情
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p class="product-desc">{{ product.description }}</p>
        <div class="product-price">¥{{ product.price }}</div>
      </div>
    </div>
  </div>
  
  <button 
    v-if="hasMore" 
    class="load-more"
    @click="$emit('load-more')"
  >
    加载更多
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
}

const props = defineProps<{
  products: Product[]
  currentCategory: string
  hasMore: boolean
}>()

const emit = defineEmits<{
  (e: 'load-more'): void
}>()

const filteredProducts = computed(() => {
  if (props.currentCategory === 'all') {
    return props.products
  }
  return props.products.filter(product => product.category === props.currentCategory)
})

const viewDetails = (product: Product) => {
  // 实现查看详情的逻辑
  console.log('查看商品:', product.title)
}
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  padding: 0 40px;
  max-width: 1600px;
  margin: 0 auto;
}

/* 其他样式保持不变 */
</style> 