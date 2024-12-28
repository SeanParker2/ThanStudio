<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="logo" alt="Than Studio" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.png'
</script>

<style scoped>
.navbar {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo img {
  height: 40px;
  width: auto;
}
</style> 