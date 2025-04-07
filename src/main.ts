import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(head)

// Add default meta tags
head.push({
  title: 'Hilazia - Online Store',
  meta: [
    {
      name: 'description',
      content: 'Tienda de kombucha, macramé, plantas y moda en Puebla, México',
    },
  ],
})
app.mount('#app')
