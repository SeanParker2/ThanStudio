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
  .hero-text h1 {
    font-size: 48px;
  }
}
</style> 