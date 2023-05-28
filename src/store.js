import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
  },
  mutations: {
    setFormData(state, data) {
      state.formData = data;
    },
  },
});
