import '@unocss/reset/tailwind.css'
import '@/styles/style.css'
import 'uno.css'
import 'vfonts/OpenSans.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
