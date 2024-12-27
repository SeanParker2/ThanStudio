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
    const deltaY = touchStartY.value - e.touches[0].clientY
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0 && currentSection.value < props.totalSections - 1) {
        goToSection(currentSection.value + 1)
      } else if (deltaY < 0 && currentSection.value > 0) {
        goToSection(currentSection.value - 1)
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

onMounted(() => {
  resetState() // 每次挂载时重置状态
})

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchmove', onTouchMove)
  resetState() // 卸载时也重置状态
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
</style>