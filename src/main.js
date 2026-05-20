import { createApp } from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter } from 'vue-router'

import First from './components/First.vue'
import Second from './components/Second.vue'
import Third from './components/Third.vue'

const routes = [
    {path:'/', component:First},
    {path:'/Second', component:Second},
    {path:'/Third', component:Third}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
