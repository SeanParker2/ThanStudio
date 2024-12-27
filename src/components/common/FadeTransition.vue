<template>
  <transition
    name="fade"
    mode="out-in"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '0'
  ;(el as HTMLElement).style.transform = 'translateY(20px)'
}

const enter = (el: Element, done: () => void) => {
  setTimeout(() => {
    (el as HTMLElement).style.opacity = '1'
    ;(el as HTMLElement).style.transform = 'translateY(0)'
  }, 50)
  setTimeout(done, 300)
}

const leave = (el: Element, done: () => void) => {
  (el as HTMLElement).style.opacity = '0'
  ;(el as HTMLElement).style.transform = 'translateY(-20px)'
  setTimeout(done, 300)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style> 