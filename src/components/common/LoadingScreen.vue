<template>
  <div class="loading-screen" :class="{ hidden: !isLoading }">
    <div class="loader-content">
      <div class="loader-text">THAN STUDIO</div>
      <div class="loader-line">
        <div class="loading-progress"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(true)

// 监听路由变化，根据路由判断是否显示加载动画
watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/') {
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    } else {
      isLoading.value = false
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.loading-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

.loader-content {
  text-align: center;
}

.loader-text {
  font-size: 24px;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

.loader-line {
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.loading-progress {
  width: 100%;
  height: 100%;
  background: #fff;
  animation: progress 1s ease-in-out;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes progress {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
</style> 