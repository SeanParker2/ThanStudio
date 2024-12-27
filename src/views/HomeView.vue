<template>
  <div class="home-view">
    <LoadingScreen />
    <HomeFullpage :total-sections="5">
      <div class="section">
        <HomeHero />
      </div>
      <div class="section">
        <HomeCreative />
      </div>
      <div class="section">
        <HomeServices />
      </div>
      <div class="section">
        <HomeTeam />
      </div>
      <div class="section">
        <HomeContact />
      </div>
    </HomeFullpage>
    <CustomCursor />
  </div>
</template>

<script setup lang="ts">
import HomeFullpage from '@/components/home/HomeFullpage.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import HomeCreative from '@/components/home/HomeCreative.vue'
import HomeServices from '@/components/home/HomeServices.vue'
import HomeTeam from '@/components/home/HomeTeam.vue'
import HomeContact from '@/components/home/HomeContact.vue'
import HomeLoader from '@/components/home/HomeLoader.vue'
import CustomCursor from '@/components/common/CustomCursor.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
</script>

<style scoped>
.section {
  height: 100vh;
  width: 100vw;
}
</style> 