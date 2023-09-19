import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'

import './style.css'
import './assets/tailwind.css'

import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')
