<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from '@/components/common/Navbar.vue'
</script>

<style>
:root {
  --bg-color: #000;
  --text-color: #fff;
  --primary-color: #fff;
}

body {
  margin: 0;
  background: var(--bg-color);
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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
