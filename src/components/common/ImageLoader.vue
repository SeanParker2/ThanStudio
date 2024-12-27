<template>
  <div 
    class="image-loader"
    :class="{ loaded: isLoaded, error: hasError }"
  >
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      @load="onLoad"
      @error="onError"
    >
    <LoadingSpinner 
      v-if="!isLoaded && !hasError"
      small
    />
    <div v-if="hasError" class="error-message">
      图片加载失败
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps<{
  src: string
  alt?: string
}>()

const isLoaded = ref(false)
const hasError = ref(false)

const onLoad = () => {
  isLoaded.value = true
}

const onError = () => {
  hasError.value = true
}
</script>

<style scoped>
.image-loader {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
}

.image-loader img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
</style> 