<template>
  <div 
    class="fade-in"
    v-observe-visibility="onVisibilityChange"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const onVisibilityChange = (isVisible: boolean, entry: IntersectionObserverEntry) => {
  if (isVisible) {
    entry.target.classList.add('visible')
  }
}
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 