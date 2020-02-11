<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }, 
  created(){
    this.$store.dispatch('initFruitStocks');
    /*eslint-disable */
    console.log('created');
    // 
    this.$store.dispatch('initVegetableStocks');
      /*eslint-disable */
    console.log('created');
    // 
    // this.$store.dispatch('buyFruits', order);
    // console.log('created');
  }
}
</script>

<style scoped>
#app {
  font-family: 'Helvetica', Arial, sans-serif;

}
</style>
