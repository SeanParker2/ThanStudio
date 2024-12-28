<template>
  <div class="hero-section">
    <video 
      class="hero-video" 
      autoplay 
      loop 
      muted 
      playsinline
    >
      <source src="/studio.mp4" type="video/mp4">
    </video>
    <div class="hero-content">
      <!-- 内容保持不变 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768
  })
})
</script>

<style scoped>
@media (max-width: 768px) {
  .hero-video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style> 