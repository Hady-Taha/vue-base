import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
// Pinia
import { createPinia } from 'pinia'
// Router
import router from './router'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia) 
app.use(router)

app.mount('#app')