<template>
  <div class="fullpage-container">
    <div 
      class="sections-wrapper"
      :style="{ transform: `translateY(-${currentSection * 100}vh)` }"
      @wheel="onWheel"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
    >
      <slot></slot>
    </div>
    
    <PageIndicator
      v-if="showIndicator"
      :current-section="currentSection"
      :total-sections="totalSections"
      :is-dark-theme="isDarkTheme"
      @change="goToSection"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import PageIndicator from '../common/PageIndicator.vue'

const props = defineProps<{
  totalSections: number
  showIndicator?: boolean
}>()

const route = useRoute()
const currentSection = ref(0)
const touchStartY = ref(0)
const isScrolling = ref(false)

const isDarkTheme = computed(() => {
  return ![1, 2].includes(currentSection.value)
})

const onWheel = (e: WheelEvent) => {
  if (!isScrolling.value) {
    if (e.deltaY > 0 && currentSection.value < props.totalSections - 1) {
      goToSection(currentSection.value + 1)
    } else if (e.deltaY < 0 && currentSection.value > 0) {
      goToSection(currentSection.value - 1)
    }
  }
}

const onTouchStart = (e: TouchEvent) => {
  touchStartY.value = e.touches[0].clientY
}

const onTouchMove = (e: TouchEvent) => {
  if (!isScrolling.value) {
    const touch = e.touches[0];
    const deltaY = touchStartY.value - touch.clientY;
    const deltaTime = Date.now() - touchStartTime.value;
    
    // 计算滑动速度
    const speed = Math.abs(deltaY) / deltaTime;
    
    // 根据滑动速度和距离判断是否切换页面
    if (Math.abs(deltaY) > 30 || speed > 0.5) {
      if (deltaY > 0 && currentSection.value < props.totalSections - 1) {
        goToSection(currentSection.value + 1);
      } else if (deltaY < 0 && currentSection.value > 0) {
        goToSection(currentSection.value - 1);
      }
    }
  }
}

const goToSection = (index: number) => {
  if (!isScrolling.value) {
    currentSection.value = index
    isScrolling.value = true
    setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }
}

// 重置状态的函数
const resetState = () => {
  currentSection.value = 0
  touchStartY.value = 0
  isScrolling.value = false
}

const handleMobileScroll = () => {
  if (window.innerWidth <= 768) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const threshold = window.innerHeight * 0.3;
      
      if (rect.top >= -threshold && rect.top <= threshold) {
        section.classList.add('section-active');
      } else {
        section.classList.remove('section-active');
      }
    });
  }
}

onMounted(() => {
  resetState() // 每次挂载时重置状态
  if (window.innerWidth <= 768) {
    window.addEventListener('scroll', handleMobileScroll);
  }
})

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchmove', onTouchMove)
  resetState() // 卸载时也重置状态
  window.removeEventListener('scroll', handleMobileScroll);
})
</script>

<style scoped>
.fullpage-container {
  height: 100vh;
  overflow: hidden;
}

.sections-wrapper {
  height: 100%;
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (max-width: 768px) {
  .fullpage-container {
    height: auto;
    overflow: visible;
  }

  .sections-wrapper {
    transform: none !important;
    transition: none;
  }

  .section {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    padding: calc(60px + var(--safe-area-inset-top)) 20px
            calc(20px + var(--safe-area-inset-bottom));
  }

  .section {
    will-change: transform;
    -webkit-overflow-scrolling: touch;
  }
}
</style>