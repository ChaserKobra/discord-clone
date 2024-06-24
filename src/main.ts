import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import 'uno.css'
import 'primevue/resources/themes/aura-dark-indigo/theme.css'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.mount('#app')
