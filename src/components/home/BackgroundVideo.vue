<template>
  <div class="background-video">
    <video 
      ref="videoRef"
      autoplay 
      muted 
      loop 
      playsinline 
      preload="auto"
    >
      <source src="@/assets/videos/studio.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const videoRef = ref<HTMLVideoElement>()
const hasError = ref(false)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.log("视频自动播放失败:", error)
      hasError.value = true
    })
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
}

.background-video video,
.fallback-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.fallback-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style> 