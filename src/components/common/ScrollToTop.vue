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
@media (max-width: 768px) {
  .scroll-to-top {
    right: 15px;
    bottom: calc(var(--mobile-nav-height) + 15px);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .scroll-to-top:active {
    transform: scale(0.95);
  }
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