import { PiniaPluginContext } from 'pinia'
import { watch } from 'vue'

export function piniaPersistedstate(context: PiniaPluginContext) {
  const store = context.store
  const storageKey = `${store.$id}-storage`

  // 从 localStorage 恢复状态
  const fromStorage = localStorage.getItem(storageKey)
  if (fromStorage) {
    store.$patch(JSON.parse(fromStorage))
  }

  // 监听状态变化并保存到 localStorage
  watch(
    () => store.$state,
    (state) => {
      localStorage.setItem(storageKey, JSON.stringify(state))
    },
    { deep: true }
  )
} 