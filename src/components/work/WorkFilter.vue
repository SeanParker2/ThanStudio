<template>
  <div class="filter-container">
    <div class="filter-group">
      <button 
        v-for="category in categories" 
        :key="category.value"
        class="filter-btn"
        :class="{ active: modelValue === category.value }"
        @click="$emit('update:modelValue', category.value)"
      >
        {{ category.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const categories = [
  { label: '全部', value: 'all' },
  { label: '品牌设计', value: 'brand' },
  { label: '数字设计', value: 'digital' },
  { label: '空间设计', value: 'space' },
  { label: '包装设计', value: 'package' }
]
</script>

<style scoped>
.filter-container {
  padding: 20px 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 40px 0;
}

.filter-group {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
}

.filter-btn {
  padding: 8px 0;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  color: rgba(255,255,255,0.6);
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  color: #fff;
}
</style> 