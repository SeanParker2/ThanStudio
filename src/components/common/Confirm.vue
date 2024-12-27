<template>
  <Modal v-model="isOpen" :title="title">
    <p class="confirm-message">{{ message }}</p>
    <template #footer>
      <div class="confirm-buttons">
        <button 
          class="cancel-button"
          @click="handleCancel"
        >
          {{ cancelText }}
        </button>
        <button 
          class="confirm-button"
          @click="handleConfirm"
        >
          {{ confirmText }}
        </button>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'

interface ConfirmOptions {
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
}

const isOpen = ref(false)
const title = ref('')
const message = ref('')
const confirmText = ref('确认')
const cancelText = ref('取消')

let resolvePromise: ((value: boolean) => void) | null = null

const show = (options: ConfirmOptions): Promise<boolean> => {
  title.value = options.title || '确认'
  message.value = options.message
  confirmText.value = options.confirmText || '确认'
  cancelText.value = options.cancelText || '取消'
  isOpen.value = true
  
  return new Promise(resolve => {
    resolvePromise = resolve
  })
}

const handleConfirm = () => {
  isOpen.value = false
  resolvePromise?.(true)
}

const handleCancel = () => {
  isOpen.value = false
  resolvePromise?.(false)
}

defineExpose({ show })
</script>

<style scoped>
.confirm-message {
  margin: 20px 0;
  color: rgba(255, 255, 255, 0.9);
}

.confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.confirm-button,
.cancel-button {
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.confirm-button {
  background: #2196f3;
  color: #fff;
}

.cancel-button {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.confirm-button:hover,
.cancel-button:hover {
  opacity: 0.9;
}
</style> 