<template>
  <div class="vision-container">
    <div class="vision-grid">
      <div class="vision-text">
        <div class="vision-header">
          <span class="vision-label">Our Vision</span>
          <h3>创新设计，塑造未来</h3>
        </div>
        <div class="vision-quotes">
          <p class="quote-en">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <p class="quote-zh">
            设计不仅关乎外表和感受，更关乎其中的运作方式。
          </p>
        </div>
        <div class="vision-description">
          <p>我们致力于通过创新设计，为品牌创造独特的视觉语言。</p>
          <p>用专业的设计思维，帮助客户实现商业价值。</p>
          <p>让每一个项目都成为艺术与商业的完美结合。</p>
        </div>
      </div>
      <div class="vision-images">
        <div class="image-grid">
          <div class="image-item main-image">
            <img :src="visionImage1" alt="Vision 1">
          </div>
          <div class="image-item">
            <img :src="visionImage2" alt="Vision 2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import visionImage1 from '@/assets/images/10003.png'
import visionImage2 from '@/assets/images/10004.png'
</script>

<style scoped>
.vision-container {
  position: relative;
  overflow: hidden;
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.vision-text {
  padding-right: 40px;
}

.vision-header {
  margin-bottom: 40px;
}

.vision-label {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.vision-header h3 {
  font-size: 2.5rem;
  line-height: 1.2;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-quotes {
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}

.quote-en {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.9);
}

.quote-zh {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

.vision-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.vision-description p {
  margin-bottom: 15px;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

.main-image {
  grid-column: span 2;
}

@media (max-width: 1024px) {
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .vision-text {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .vision-header h3 {
    font-size: 2rem;
  }

  .quote-en {
    font-size: 1.2rem;
  }

  .quote-zh {
    font-size: 1rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .main-image {
    grid-column: span 1;
  }
}
</style> 