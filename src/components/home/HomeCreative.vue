<template>
  <HomeSection>
    <div class="creative-content">
      <div class="main-text">
        <div class="text-en">We are creative explorers,</div>
        <div class="text-zh">我们是创意探索者，</div>
        <div class="text-en">redefining design through innovative thinking.</div>
        <div class="text-zh">用创新思维重新定义设计边界。</div>
      </div>
      
      <div class="description">
        <div class="text-en">
          <p>Born in 2024, Than Studio is where designers, strategists, and innovators collaborate to push the boundaries of design. Our philosophy of "I" & "∞" drives us to explore unlimited possibilities.</p>
        </div>
        <div class="text-zh">
          <p>Than Studio 诞生于 2024 年，是设计师、策略师和创新者的集合地。我们以 "创新" 与 "无限" 为信念，探索设计的无限可能。</p>
        </div>
      </div>
    </div>
  </HomeSection>
</template>

<script setup lang="ts">
import HomeSection from './HomeSection.vue'
</script>

<style scoped>
.creative-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
}

.main-text {
  margin-bottom: 60px;
}

.text-en {
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.text-zh {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.4;
  opacity: 0.9;
}

.description {
  position: relative;
  padding-left: 30px;
  border-left: 1px solid rgba(255,255,255,0.1);
}

.description p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .creative-content {
    padding: 0 40px;
  }
  
  .text-en {
    font-size: 1.8rem;
  }
  
  .text-zh {
    font-size: 1.6rem;
  }
  
  .description p {
    font-size: 1rem;
  }
}
</style> 