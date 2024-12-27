<template>
  <div class="cursor-container">
    <div ref="cursor" class="custom-cursor"></div>
    <div ref="follower" class="cursor-follower"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement>()
const follower = ref<HTMLElement>()

const onMouseMove = (e: MouseEvent) => {
  if (cursor.value && follower.value) {
    cursor.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    follower.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.custom-cursor {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(0, 0, 0);
  transition: transform 0.1s ease;
}

.cursor-follower {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s ease;
}
</style> 