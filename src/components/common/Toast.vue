<template>
  <transition name="toast">
    <div v-if="isVisible" class="toast" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const message = ref('')
const type = ref<'success' | 'error' | 'info'>('info')
const timeout = ref<number | null>(null)

const show = (msg: string, toastType: 'success' | 'error' | 'info' = 'info') => {
  message.value = msg
  type.value = toastType
  isVisible.value = true

  if (timeout.value) {
    clearTimeout(timeout.value)
  }

  timeout.value = window.setTimeout(() => {
    isVisible.value = false
  }, 3000)
}

defineExpose({ show })
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 24px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  z-index: 10000;
  transition: all 0.3s ease;
}

.success {
  background: #4caf50;
}

.error {
  background: #f44336;
}

.info {
  background: #2196f3;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 