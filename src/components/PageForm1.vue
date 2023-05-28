<template>

  
  <div class="page-container">
    <h1 class="page-title"> Please Provide Your Details to help you serve better </h1>
    <form @submit.prevent="submitForm" class="form-container">

      <label for="name" class="form-label"><h4>Enter Your Name:</h4></label>
      <input type="text" id="name" v-model="name" class="form-input" required>
      
      <label for="email"  class="form-label"><h4>Enter Your Email:</h4></label>
      <input type="email" id="email" v-model="email" class="form-input" required>
 
      <label for="number"  class="form-label"><h4>Enter Your Number:</h4></label>
     <input type="number" id="number" v-model="number" class="form-input" required>

    <button type="submit" class="form-button" >Next</button>
      
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      number:'',
    };
  },
  methods: {
    submitForm() {
      this.$store.commit('setFormData', {
        name: this.name,
        email: this.email,
        number: this.number,
      });
      this.$router.push('/page2');
    },
  },
};
</script>

<style scoped>


.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100vw;
  background-color: #f2f2f2;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
   font-family: "Times New Roman", Times, serif;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideIn 1s;
  border:1px solid black;
  border-radius:10px;
  padding:20px;
  margin:10px;
}



.form-label {
  font-size: 16px;
  margin-bottom: 10px;
  color: #000;
  font-family: "Times New Roman", Times, serif;
}

.form-input {
  padding: 8px;
  margin-bottom: 20px;
  width: 300px;
  border-radius:5px;
}
.form-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size:20px;
  border: none;
  cursor: pointer;
  border-radius:3px;
  transform:all linear 0.3s;
  font-family: "Times New Roman", Times, serif;
}

.form-button:hover{
  background-color:MediumSeaGreen;
}
</style>