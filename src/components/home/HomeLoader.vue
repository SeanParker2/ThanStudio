<template>
  <div class="page-loader" :class="{ hidden: !isLoading }">
    <div class="loader-content">
      <div class="loader-text">THAN STUDIO</div>
      <div class="loader-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<style scoped>
.page-loader {
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

.page-loader.hidden {
  opacity: 0;
  pointer-events: none;
}
</style> 