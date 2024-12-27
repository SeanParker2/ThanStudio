import { App, createApp, toRaw } from 'vue'
import Toast from '@/components/common/Toast.vue'

export interface ToastInstance {
  show(message: string, type?: 'success' | 'error' | 'info'): void
}

let toastInstance: ToastInstance | null = null

export const useToast = () => {
  if (!toastInstance) {
    throw new Error('Toast plugin not installed')
  }
  return toastInstance
}

export const ToastPlugin = {
  install(app: App) {
    const container = document.createElement('div')
    document.body.appendChild(container)
    
    const toastApp = createApp(Toast)
    const instance = toRaw(toastApp.mount(container)) as unknown as ToastInstance
    toastInstance = instance
    
    app.config.globalProperties.$toast = instance
  }
} 