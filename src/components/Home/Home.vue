<template>
  <div class="main">
    <div class="header">
      <p>Tell us where you are..</p>
    </div>
    <div class="content">
      <!-- the geolocalisation -->
<!-- this tutotrial => https://levelup.gitconnected.com/how-to-add-geolocation-to-a-vue-js-app-14716b90d87b -->

        <button @click="geolocate" class="find-me">Locating</button>
        <p class="status"></p>
        <a class="map-link" target="_blank"></a>

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
  methods: {
    geolocate(){
      return 
    }
  }
// geolocation : 

  // this.$getLocation(options)
  // .then(coordinates => {
  //   console.log(coordinates);
  // });
  // // watch a location 
  // this.$watchLocation(options)
  // .then(coordinates => {
  //   console.log(coordinates);
  // })
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 60% 20% 10%;
  grid-gap: 40px;
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
  padding: 20px;
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
  margin: 20px 10px;
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
.find-me {
  /* border-radius: 50px; */
  background-color: lightcoral;
  /* padding: 30px; */
  clip-path: circle(8% at 50% 50%);
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
  border: 1px solid lightcoral;
  justify-self: center;
  animation-name: stretch;
  animation-duration: 1.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}
/* 
@keyframes stretch {
  0% {
    transform: scale(.3);
    background-color: lightcoral;
    border-radius: 100%;
  }
  25% {
    background-color: rgb(165, 88, 88);
  }
  50% {
    transform: scale(1.5);
    background-color: rgb(124, 70, 70);
  }
} */
</style>
