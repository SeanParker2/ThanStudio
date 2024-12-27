<template>
  <transition name="fade">
    <button 
      v-show="showButton"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="回到顶部"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M12 4l-8 8h6v8h4v-8h6z" 
          fill="currentColor"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const scrollThreshold = 300

const checkScroll = () => {
  showButton.value = window.pageYOffset > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'ArrowUp') {
    scrollToTop()
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-to-top:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 