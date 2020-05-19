<template>
    <div class="main">
      <Vegetable :key="vegetable.id" v-for="vegetable in vegetables" :vegetable="vegetable"></Vegetable>
    </div>
</template>

<script>
import Vegetable from './Vegetable'

export default {
  name: 'Vegetables',
  components: {
    Vegetable
  }, 
  computed: {
    vegetables(){
      return this.$store.getters.getVegetables;
    }
  }
}
</script>

<style scoped>
.main {
/* background: lightgray; */
padding: 20px;
margin: 10px; 
border-radius: 5px;
}
</style>
