import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const isMoving = ref(false)
  let timeout: number
  
  const handleMouseMove = (event: MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY
    isMoving.value = true
    
    clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      isMoving.value = false
    }, 100)
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    clearTimeout(timeout)
  })
  
  return {
    x,
    y,
    isMoving
  }
} 