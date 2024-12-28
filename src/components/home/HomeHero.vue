<template>
  <div class="hero-section">
    <div class="video-container">
      <video 
        class="hero-video" 
        autoplay 
        loop 
        muted 
        playsinline
        preload="metadata"
      >
        <source 
          src="/studio.mp4" 
          type="video/mp4"
        >
      </video>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="text-reveal">THAN STUDIO</span>
      </h1>
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
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  aspect-ratio: 16/9;
}

@media (max-width: 768px) {
  .video-container {
    width: 100%;
    height: 100vh;
  }

  .hero-video {
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.1);
  }
}
</style> 