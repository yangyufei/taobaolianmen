import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './config/common'
import installElementPlus from './plugins/element'

// Vue.prototype.$common = common

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$common = common
app.mount('#app')
installElementPlus(app)
// app.use(store).use(router).mount('#app')