<template>
  <div 
    ref="container" 
    class="parallax-container"
    :style="containerStyle"
  >
    <img 
      :src="src" 
      :alt="alt"
      class="parallax-image"
      :style="imageStyle"
      @load="onImageLoad"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useParallax } from '@/composables/useParallax'

const props = defineProps<{
  src: string
  alt?: string
  speed?: number
  height?: string
}>()

const isLoaded = ref(false)
const { element: container, offset } = useParallax({
  speed: props.speed || 0.5
})

const containerStyle = computed(() => ({
  height: props.height || '400px'
}))

const imageStyle = computed(() => ({
  transform: `translateY(${offset.value}px)`,
  opacity: isLoaded.value ? 1 : 0
}))

const onImageLoad = () => {
  isLoaded.value = true
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  will-change: transform;
  transition: opacity 0.3s ease;
}
</style> 