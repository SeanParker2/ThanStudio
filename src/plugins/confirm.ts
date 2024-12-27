import { App, createApp, toRaw } from 'vue'
import Confirm from '@/components/common/Confirm.vue'

export interface ConfirmOptions {
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
}

export interface ConfirmInstance {
  show(options: ConfirmOptions): Promise<boolean>
}

let confirmInstance: ConfirmInstance | null = null

export const useConfirm = () => {
  if (!confirmInstance) {
    throw new Error('Confirm plugin not installed')
  }
  return confirmInstance
}

export const ConfirmPlugin = {
  install(app: App) {
    const container = document.createElement('div')
    document.body.appendChild(container)
    
    const confirmApp = createApp(Confirm)
    const instance = toRaw(confirmApp.mount(container)) as unknown as ConfirmInstance
    confirmInstance = instance
    
    app.config.globalProperties.$confirm = instance
  }
} 