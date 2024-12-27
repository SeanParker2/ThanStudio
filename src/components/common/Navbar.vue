<template>
  <nav class="main-nav">
    <div class="nav-logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="THAN Logo">
      </router-link>
    </div>
    <div class="nav-items">
      <router-link 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: currentRoute === item.path }"
      >
        {{ item.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path)

const navItems = [
  { label: 'WORK', path: '/work' },
  { label: 'STORY', path: '/story' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'STORE', path: '/store' }
]
</script>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.nav-logo {
  width: 120px;
}

.nav-logo img {
  width: 100%;
  height: auto;
}

.nav-items {
  display: flex;
  gap: 40px;
}

.nav-item {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: #fff;
}

.nav-item.active {
  color: #fff;
  font-weight: 600;
}

@media (max-width: 768px) {
  .main-nav {
    padding: 15px 20px;
  }

  .nav-logo {
    width: 100px;
  }

  .nav-items {
    gap: 20px;
  }

  .nav-item {
    font-size: 12px;
  }
}
</style> 