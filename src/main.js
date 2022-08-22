import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'
import store from './store'
import { VueCookies } from 'vue-cookies'

const app = createApp(App).use(store);
app.use(router)
app.use(VueCookies)
app.mount('#app');
