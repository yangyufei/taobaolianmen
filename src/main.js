import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './config/common'

// Vue.prototype.$common = common

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$common = common
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
