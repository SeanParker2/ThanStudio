import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaPersistedstate } from './plugins/persist'
import App from './App.vue'
import router from './router'

import '@/assets/styles/main.css'
import '@/assets/styles/animations.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
