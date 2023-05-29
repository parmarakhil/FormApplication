<template>
    <div class="page-container">
    <h1 class="page-title"> Hey! Welcome to Keen and Able</h1>
    <div class="data-container">
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Number: {{formData.number}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    formData() {
      return this.$store.state.name;
    },
  },
};
</script>
<style>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100vw;
  background-color: #f9f9f9;
}

.page-title {
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 20px;
  padding:10px;
}

.data-container {
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideIn 1s;
  margin:10px;
}
@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.data-heading {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
   margin-bottom: 10px;
}

.data-item {
  margin-bottom: 5px;
   font-family: "Times New Roman", Times, serif;
}
</style>