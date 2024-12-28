<template>
  <HomeSection>
    <div class="hero-container">
      <BackgroundVideo />
    </div>
  </HomeSection>
</template>

<script setup lang="ts">
import HomeSection from './HomeSection.vue'
import BackgroundVideo from './BackgroundVideo.vue'
</script>

<style scoped>
.hero-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-text h1 {
  font-size: 72px;
  line-height: 1.2;
  margin: 10px 0;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: calc(100vh - 96px);
  }

  .hero-content {
    padding: 0 20px;
    position: absolute;
    bottom: 20%;
    width: 100%;
  }

  .hero-title {
    font-size: 2.4rem;
    line-height: 1.2;
    margin-bottom: 15px;
  }

  .hero-subtitle {
    font-size: 1rem;
    max-width: 280px;
    opacity: 0.8;
  }

  .hero-cta {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}
</style> 