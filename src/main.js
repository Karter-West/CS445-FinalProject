import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
    theme: { 
        preset: Aura,
        options : {
            prefix: 'p',
            cssLayer: false,
            darkModeSelector: false
        }
    }
 });
app.use(router);

app.mount('#app');
