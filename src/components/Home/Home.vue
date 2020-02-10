<template>
  <div class="main">
    <div class="fish">
      <Fish></Fish>
    </div>
    <!--  -->
    <div class="soup">
      <Thai></Thai>
    </div>
  </div>
</template>

<script>
import Thai from './Recipes/Thai'
import Fish from './Recipes/Fish'
export default {
  name: 'Home', 
  components: {
    Thai,
    Fish
  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 15% 60% 25%;
  grid-gap: 10px;
}
.fish {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: lightblue;
  border-radius: 5px;
  margin: 10px 10px;
  padding: 10px;
}
.vegetable {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: lightcyan;
  border-radius: 5px;
}
</style>
