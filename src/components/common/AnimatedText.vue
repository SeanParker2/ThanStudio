<template>
  <div class="animated-text">
    <transition-group 
      name="char"
      tag="div"
      class="text-container"
    >
      <span 
        v-for="(char, index) in characters"
        :key="`${char}-${index}`"
        :style="{ 
          transitionDelay: `${index * 50}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }"
      >
        {{ char }}
      </span>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const props = defineProps<{
  text: string
}>()

const characters = computed(() => props.text.split(''))
const { element, isIntersecting } = useIntersectionObserver({
  threshold: 0.5
})
const isVisible = ref(false)

// 监听元素可见性变化
watch(isIntersecting, (value) => {
  if (value) {
    isVisible.value = true
  }
})
</script>

<style scoped>
.animated-text {
  overflow: hidden;
}

.text-container {
  display: flex;
  flex-wrap: wrap;
}

span {
  display: inline-block;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: pre;
}
</style> 