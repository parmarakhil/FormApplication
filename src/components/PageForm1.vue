<template>
  <div>
    <h1>Page 1</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      
      <button type="submit">Next</button>
      
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      this.$store.commit('setFormData', {
        name: this.name,
        email: this.email,
      });
      this.$router.push('/page2');
    },
  },
};
</script>
