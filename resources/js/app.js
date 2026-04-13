import { createApp } from 'vue'
import App from './HomePage.vue'

import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

app.mount('#app')

AOS.init({
    duration: 800,
    once: true
})