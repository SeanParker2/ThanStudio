<template>
  <div class="scroll-indicator" :class="{ hidden: !showIndicator }">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showIndicator = ref(true)

const handleScroll = () => {
  showIndicator.value = window.scrollY < 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: opacity 0.3s ease;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7),
    transparent
  );
  margin-bottom: 10px;
  animation: scrollAnimation 2s infinite;
}

.scroll-indicator.hidden {
  opacity: 0;
}

@keyframes scrollAnimation {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50.1% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
</style> 