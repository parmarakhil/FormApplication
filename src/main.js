import App from './App.vue';
import { createApp } from 'vue'
import router from './router'
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      name: "",
      email: ""
    }
  },
  mutations: {
    setFormData (state, name, email) {
      state.name = name
      state.email = email
    }
  }
})

createApp(App).use(router).use(store).mount('#app')
 