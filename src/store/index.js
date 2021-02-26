import { createStore } from 'vuex'
import preModules from './preModules'
// const modulesFiles = require.context('./modules', true, /\.js$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // ...modules
    ...preModules
  }
})
