<template>
  <div class="main">
    <div class="header">
      <p>Tell us where you are..</p>
    </div>
    <div class="content">
      <!-- the geolocalisation -->

    </div>
    <div class="suggestion">
      <p>..And we will suggest you the finest suppliers nearest from you </p>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 60% 20% 10%;
  grid-gap: 35px;
  margin: 10px;
  padding: 5px;
}
.header{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: lightcoral;
  color: white;
  padding: 15px;
  border: 1px solid lightcoral;
  border-radius: 5px;
  height: 100%;
  margin: 10px;
  text-align: center;
}
.content{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: white;
  color: lightcoral;
  padding: 10px;
  border: 1px solid lightcoral;
  border-radius: 5px;
  height: 100%;
  margin: 10px;
  align-items: center;
}
.suggestion{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: lightsalmon;
  color: white ;
  padding: 10px;
  border: 1px solid lightsalmon;
  border-radius: 5px;
  height: 100%;
  margin: 10px;
  text-align: center;
}
.footer{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: lightcoral;
  color: white;
  padding: 10px;
  border: 1px solid lightcoral;
  border-radius: 5px;
  height: 100%;
  margin: 10px;
}
</style>
