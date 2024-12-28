<template>
  <div class="background-video">
    <video 
      ref="videoRef"
      autoplay 
      muted 
      loop 
      playsinline 
      preload="auto"
      :class="{ 'mobile-video': isMobile }"
    >
      <source src="/studio.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const videoRef = ref<HTMLVideoElement>()
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
  
  if (videoRef.value) {
    videoRef.value.load()
    const playPromise = videoRef.value.play()
    
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const playOnInteraction = () => {
          videoRef.value?.play()
          document.removeEventListener('touchstart', playOnInteraction)
          document.removeEventListener('click', playOnInteraction)
        }
        document.addEventListener('touchstart', playOnInteraction)
        document.addEventListener('click', playOnInteraction)
      })
    }
  }
})
</script>

<style scoped>
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.background-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .mobile-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
  }
}
</style> 