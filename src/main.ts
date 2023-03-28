import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.sass'
import './assets/main.css'
// @ts-ignore
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(store)
app.use(router)

app.mount('#app')
