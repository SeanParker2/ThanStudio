<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="THAN STUDIO">
    </router-link>
    <div class="nav-links">
      <router-link 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="nav-item"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { name: 'WORK', path: '/work' },
  { name: 'STORY', path: '/story' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'STORE', path: '/store' }
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 1000;
  background: transparent;
}

.logo img {
  height: 32px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  position: relative;
  padding: 5px 0;
  transition: all 0.3s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: #fff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #fff;
}

.nav-item:hover::after,
.nav-item.router-link-active::after {
  width: 100%;
}
</style> 