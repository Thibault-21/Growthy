<template>
  <div class="main">
      <div class="who">
        <h1>Who we are</h1>
        <p> We are the digital generation trying to support French agriculture by providing natural, beautiful and healthy products from the best organic farms!</p>
      </div>
      <div class="concept">
        <h1>Our concept</h1>
        <p>Our concept is simple ! </p>
        <ul>
          <li>1/ We create partnership with bio french farms and buy theirs fruits and vegetables in a large scale</li>
          <li>2/ We offer you to buy seasonal products online via our application </li>
          <li>3/ We deliver in less than 12 hours</li>
          </ul>
      </div>
      <!--  -->
      <div class="value-proposition">
        <ul>
          <li>Easy and fast buy</li>
          <li>Fast delivering</li>
          <li>Availabilties and choice of the finest natural products thanks to a large scale purchasing with a fair price</li>
          <li>High quality products, highest customer satisfaction in your restaurant, etc..</li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home', 
  components: {

  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 10px;
}

.who {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: lightblue;
  border-radius: 5px;
  margin: 10px 10px;
  padding: 10px;
  padding: 20px;
  margin: 10px;
}
.concept {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: lightcyan;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}
.value-proposition {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: lightcyan;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}

</style>
