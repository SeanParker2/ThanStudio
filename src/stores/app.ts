import { defineStore } from 'pinia'

interface AppState {
  isLoading: boolean
  isDarkTheme: boolean
  currentSection: number
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isLoading: true,
    isDarkTheme: true,
    currentSection: 0
  }),
  
  actions: {
    setLoading(status: boolean) {
      this.isLoading = status
    },
    
    setTheme(isDark: boolean) {
      this.isDarkTheme = isDark
    },
    
    setCurrentSection(index: number) {
      this.currentSection = index
    }
  }
}) 