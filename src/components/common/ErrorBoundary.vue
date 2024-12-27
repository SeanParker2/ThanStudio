<template>
  <div v-if="error" class="error-container">
    <div class="error-content">
      <h2>{{ error.message || '发生了一些错误' }}</h2>
      <p>{{ error.details || '请稍后再试' }}</p>
      <button @click="retry" class="retry-button">
        重试
      </button>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

interface ErrorState {
  message: string
  details?: string
}

const error = ref<ErrorState | null>(null)
const emit = defineEmits<{
  (e: 'error', error: Error): void
}>()

onErrorCaptured((err: Error) => {
  error.value = {
    message: err.message,
    details: err.stack
  }
  emit('error', err)
  return false
})

const retry = () => {
  error.value = null
}
</script>

<style scoped>
.error-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.error-content {
  max-width: 500px;
}

.error-content h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.error-content p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

.retry-button {
  padding: 12px 24px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.retry-button:hover {
  opacity: 0.9;
}
</style> 