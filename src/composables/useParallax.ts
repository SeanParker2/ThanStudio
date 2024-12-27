import { ref, onMounted, onUnmounted } from 'vue'

interface ParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
}

export function useParallax(options: ParallaxOptions = {}) {
  const {
    speed = 0.5,
    direction = 'vertical',
    reverse = false
  } = options
  
  const element = ref<HTMLElement | null>(null)
  const offset = ref(0)
  
  const handleScroll = () => {
    if (!element.value) return
    
    const rect = element.value.getBoundingClientRect()
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const factor = reverse ? -speed : speed
      const movement = direction === 'vertical'
        ? (scrollPosition * factor)
        : (scrollPosition * factor)
      
      offset.value = movement
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return {
    element,
    offset
  }
} 