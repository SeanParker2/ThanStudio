<template>
  <div class="background-video">
    <div class="video-wrapper">
      <video
        autoplay
        loop
        muted
        playsinline
        :class="{ 'mobile-video': isMobile }"
      >
        <source :src="videoSource" type="video/mp4">
      </video>
    </div>
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
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  aspect-ratio: 16/9;
}

@media (max-width: 768px) {
  .video-wrapper {
    width: 100%;
    height: 100vh;
  }

  .mobile-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
  }
}
</style> 