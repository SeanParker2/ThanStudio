<template>
  <section :class="['home-section', theme]">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  theme?: 'light' | 'dark'
}>()
</script>

<style scoped>
.home-section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  padding: 80px;
  box-sizing: border-box;
  position: relative;
}

.home-section.light {
  background-color: #fff;
  color: #000;
}

@media (max-width: 768px) {
  .home-section {
    padding: 40px 20px;
  }
}
</style> 