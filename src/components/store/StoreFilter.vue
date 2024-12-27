<template>
  <div class="category-filter">
    <button 
      v-for="category in categories" 
      :key="category.value"
      class="category-btn"
      :class="{ active: modelValue === category.value }"
      @click="$emit('update:modelValue', category.value)"
    >
      {{ category.label }}
    </button>
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
  { label: '图书', value: 'books' },
  { label: '艺术版画', value: 'prints' },
  { label: '文创用品', value: 'goods' }
]
</script>

<style scoped>
.category-filter {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
}

.category-btn {
  padding: 8px 20px;
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn.active {
  font-weight: 600;
  border-bottom: 2px solid #fff;
}
</style> 