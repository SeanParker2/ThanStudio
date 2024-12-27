import { ref, onMounted, onUnmounted } from 'vue'

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const isIntersecting = ref(false)
  const element = ref<Element | null>(null)
  
  const observer = new IntersectionObserver(([entry]) => {
    isIntersecting.value = entry.isIntersecting
  }, {
    threshold: options.threshold || 0,
    root: options.root || null,
    rootMargin: options.rootMargin || '0px'
  })
  
  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })
  
  onUnmounted(() => {
    observer.disconnect()
  })
  
  return {
    isIntersecting,
    element
  }
} 