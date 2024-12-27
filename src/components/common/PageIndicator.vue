<template>
  <div class="page-indicator" :class="{ 'light-theme': !isDarkTheme }">
    <div 
      v-for="index in totalSections" 
      :key="index"
      class="indicator-dot"
      :class="{ active: currentSection === index - 1 }"
      @click="handleClick(index - 1)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentSection: number
  totalSections: number
  isDarkTheme: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', index: number): void
}>()

const handleClick = (index: number) => {
  emit('change', index)
}
</script>

<style scoped>
.page-indicator {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-color);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  opacity: 1;
  transform: scale(1.2);
}

.light-theme .indicator-dot {
  background: var(--primary-color);
}
</style> 