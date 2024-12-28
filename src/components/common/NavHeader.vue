<template>
  <header class="nav-header">
    <router-link 
      to="/" 
      class="logo"
      :class="{ 'mobile-hidden': isMobile }"
    >
      <img src="@/assets/images/logo.svg" alt="Than Studio" />
    </router-link>
    <nav class="nav-menu">
      <!-- 其他导航内容 -->
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
}

.logo {
  height: 24px;
  display: block;
}

.logo img {
  height: 100%;
  width: auto;
}

@media (max-width: 768px) {
  .nav-header {
    padding: 0 var(--mobile-padding);
  }

  .mobile-hidden {
    display: none;
  }
}
</style> 