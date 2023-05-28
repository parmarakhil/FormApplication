<template>
  <div>
    <h1> Form Page 2 </h1>
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    formData() {
      return this.$store.state.formData;
    },
  },
};
</script>
