import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
