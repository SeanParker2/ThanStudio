<template>
  <section :class="['section', theme, { 'full-height': isFullHeight }]">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
interface Props {
  theme?: 'light' | 'dark'
  isFullHeight?: boolean
}

withDefaults(defineProps<Props>(), {
  theme: 'dark',
  isFullHeight: true
})
</script>

<style scoped>
.section {
  width: 100%;
  position: relative;
  padding: 80px 0;
}

.section.full-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section.light {
  background-color: #fff;
  color: #000;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
}
</style> 