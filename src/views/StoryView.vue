<template>
  <div class="story-page">
    <!-- 英雄区域 -->
    <div class="story-hero">
      <div class="hero-content">
        <h1>
          <span class="text-outline">DESIGN</span>
          <span class="text-filled">FUTURE</span>
        </h1>
        <p class="hero-subtitle">用设计定义未来</p>
      </div>
      <ScrollIndicator />
    </div>

    <!-- 关于我们 -->
    <section class="story-section about-section">
      <div class="section-content">
        <h2>关于我们</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>Than Studio 成立于2024年，是一家专注于品牌设计与数字创新的设计工作室。</p>
            <p>我们相信设计不仅是视觉的呈现，更是思维的革新。每一个项目都是一次探索，每一次合作都是一次突破。</p>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">24+</span>
              <span class="stat-label">合作伙伴</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">成功项目</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label">城市办公室</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌愿景 -->
    <section class="story-section vision-section">
      <div class="section-content">
        <h2>品牌愿景</h2>
        <StoryVision />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ScrollIndicator from '@/components/common/ScrollIndicator.vue'
import StoryVision from '@/components/story/StoryVision.vue'
</script>

<style scoped>
.story-page {
  background: var(--bg-color);
}

.story-hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  font-size: 8rem;
  line-height: 1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.text-outline {
  -webkit-text-stroke: 1px var(--text-color);
  color: transparent;
}

.text-filled {
  color: var(--text-color);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.story-section {
  padding: 150px 0;
}

.section-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

.story-section h2 {
  font-size: 2.5rem;
  margin-bottom: 60px;
  text-align: center;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 6rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 4rem;
  }

  .story-section {
    padding: 100px 0;
  }

  .section-content {
    padding: 0 20px;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .stat-item {
    padding: 20px;
  }

  .story-section h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
}
</style> 