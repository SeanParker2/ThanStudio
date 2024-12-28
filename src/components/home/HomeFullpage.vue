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
import { useMediaQuery } from '@vueuse/core'
import PageIndicator from '../common/PageIndicator.vue'

const props = defineProps<{
  totalSections: number
  showIndicator?: boolean
}>()

const route = useRoute()
const isMobile = useMediaQuery('(max-width: 768px)')
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

// 移动端滚动处理
const handleMobileScroll = () => {
  if (isMobile.value) {
    const sections = document.querySelectorAll('.section')
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      if (rect.top >= -50 && rect.top <= 50) {
        currentSection.value = index
      }
    })
  }
}

onMounted(() => {
  resetState() // 每次挂载时重置状态
  if (isMobile.value) {
    window.addEventListener('scroll', handleMobileScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchmove', onTouchMove)
  resetState() // 卸载时也重置状态
  if (isMobile.value) {
    window.removeEventListener('scroll', handleMobileScroll)
  }
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
    height: 100vh;
    height: -webkit-fill-available;
    scroll-snap-align: start;
  }
}
</style>