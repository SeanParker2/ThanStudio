<template>
  <div class="loading-spinner" :class="{ small }">
    <div class="spinner"></div>
    <div v-if="text" class="loading-text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
  small?: boolean
}>()
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-spinner.small .spinner {
  width: 24px;
  height: 24px;
  border-width: 2px;
}

.loading-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 