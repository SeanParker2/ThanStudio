<template>
  <HomeSection>
    <div class="services-content">
      <div class="services-list">
        <h2>专业服务</h2>
        <div class="services-grid">
          <div class="services-column">
            <div class="service-item">品牌策略</div>
            <div class="service-item">视觉识别</div>
            <div class="service-item">包装设计</div>
            <div class="service-item">空间展示</div>
          </div>
          <div class="services-column">
            <div class="service-item">数字产品</div>
            <div class="service-item">用户体验</div>
            <div class="service-item">创意营销</div>
            <div class="service-item">艺术指导</div>
          </div>
        </div>
      </div>

      <div class="partners-list">
        <h2>合作伙伴</h2>
        <div class="partners-grid">
          <div class="partner-item">Tmall 天猫</div>
          <div class="partner-item">ByteDance 字节跳动</div>
          <div class="partner-item">VANKE 万科</div>
          <div class="partner-item">SDX Joint 三联</div>
          <div class="partner-item">CHISAGE 中哲</div>
          <div class="partner-item">NWD 新世界</div>
          <div class="partner-item">Green Town 绿城</div>
          <div class="partner-item">PEACBIRD 太平鸟</div>
        </div>
      </div>
    </div>
  </HomeSection>
</template>

<script setup lang="ts">
import HomeSection from './HomeSection.vue'
</script>

<style scoped>
.services-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

h2 {
  font-size: 2.4rem;
  margin-bottom: 40px;
  position: relative;
}

h2:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -12px;
  width: 40px;
  height: 2px;
  background: currentColor;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.service-item {
  font-size: 1rem;
  padding: 12px 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.service-item:hover {
  background: rgba(255,255,255,0.08);
  transform: translateX(6px);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.partner-item {
  font-size: 1rem;
  padding: 12px 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.partner-item:hover {
  background: rgba(255,255,255,0.08);
  transform: translateX(6px);
}

@media (max-width: 1200px) {
  .services-content {
    gap: 60px;
    padding: 0 60px;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .services-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 30px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style> 