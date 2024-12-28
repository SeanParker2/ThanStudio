<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Let's Create Together</h1>
      <p>开启一段创意合作之旅</p>
    </div>
    
    <div class="contact-content">
      <!-- 左侧联系信息 -->
      <div class="contact-info">
        <div class="info-block business">
          <div class="block-header">
            <span class="label">01</span>
            <h2>业务咨询</h2>
          </div>
          <div class="links-wrapper">
            <a href="mailto:info@than.studio" class="hover-link">
              <span class="link-text">info@than.studio</span>
              <span class="link-icon">↗</span>
            </a>
            <a href="tel:+86574288783780" class="hover-link">
              <span class="link-text">+86 574 2887 8378</span>
              <span class="link-icon">↗</span>
            </a>
          </div>
        </div>
        
        <div class="info-block career">
          <div class="block-header">
            <span class="label">02</span>
            <h2>加入我们</h2>
          </div>
          <div class="links-wrapper">
            <a href="mailto:career@than.studio" class="hover-link">
              <span class="link-text">career@than.studio</span>
              <span class="link-icon">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 右侧社交媒体 -->
      <div class="social-section">
        <div class="block-header">
          <span class="label">03</span>
          <h2>社交媒体</h2>
        </div>
        <div class="social-grid">
          <a href="#" class="social-item" target="_blank" 
             @mouseenter="updateCursor(true)" 
             @mouseleave="updateCursor(false)">
            <span class="social-name">Instagram</span>
            <span class="social-handle">@thanstudio</span>
          </a>
          <a href="#" class="social-item" target="_blank"
             @mouseenter="updateCursor(true)" 
             @mouseleave="updateCursor(false)">
            <span class="social-name">Behance</span>
            <span class="social-handle">Than Studio</span>
          </a>
          <a href="#" class="social-item" target="_blank"
             @mouseenter="updateCursor(true)" 
             @mouseleave="updateCursor(false)">
            <span class="social-name">WeChat</span>
            <span class="social-handle">thanstudio</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 自定义光标 -->
    <div class="custom-cursor" :class="{ active: cursorActive }" ref="cursor"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const cursorActive = ref(false)

const updateCursor = (active: boolean) => {
  cursorActive.value = active
}

const moveCursor = (e: MouseEvent) => {
  if (cursor.value) {
    cursor.value.style.left = e.clientX + 'px'
    cursor.value.style.top = e.clientY + 'px'
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<style scoped>
.contact-page {
  padding: 120px 0 80px;
  min-height: 100vh;
  position: relative;
}

.contact-header {
  text-align: center;
  margin-bottom: 100px;
  padding: 0 20px;
}

.contact-header h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.block-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.label {
  font-size: 1rem;
  opacity: 0.5;
}

.info-block {
  margin-bottom: 60px;
}

.info-block h2 {
  font-size: 1.8rem;
}

.links-wrapper {
  padding-left: 40px;
}

.hover-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 15px 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hover-link:hover {
  color: #fff;
  padding-left: 20px;
}

.link-icon {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.hover-link:hover .link-icon {
  opacity: 1;
  transform: translateX(0);
}

.social-grid {
  display: grid;
  gap: 20px;
}

.social-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
}

.social-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.social-handle {
  opacity: 0.5;
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  z-index: 9999;
}

.custom-cursor.active {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
  }
  
  .custom-cursor {
    display: none;
  }
}
</style> 