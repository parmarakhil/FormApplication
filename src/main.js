import App from './App.vue';
import { createApp } from 'vue'
import router from './router'
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      count: 1
    }
  }
})

createApp(App).use(router).use(store).mount('#app')
 