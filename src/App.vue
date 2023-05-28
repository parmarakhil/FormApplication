<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PageForm1/>
  <PageForm2/>
</template>

<script>


import PageForm1 from './components/PageForm1.vue';
import PageForm2  from './components/PageForm2.vue';


export default {
  name: 'App',
  components: {
   PageForm1,
   PageForm2,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
