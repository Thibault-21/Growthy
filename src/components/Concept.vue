<template>
  <div class="main">
      <div class="who">
        <h4>Who we are..</h4>
        <p> We are the digital generation trying to support French agriculture by providing natural, beautiful and healthy products from the best organic farms!</p>
      </div>
      <div class="box who-img">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
             alt="team growthy">
      </div>
      <div class="concept-img">
        <img src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1484&q=80" 
             alt="delivery growthy guy">
      </div>
      <div class="box concept">
        <h4>Our concept is simple ! </h4>
        <ul>
          <li> We create partnership with bio french farms and buy theirs fruits and vegetables in a large scale</li>
          <li> We offer you to buy seasonal products online via our application </li>
          <li> We deliver in less than 12 hours</li>
          </ul>
      </div>
      <!--  -->
      <div class="box value-proposition">
        <h4>Why us ?</h4>
        <ul>
          <li>Easy and fast buy</li>
          <li>Fast delivering</li>
          <li>Availabilties and choice of the finest natural products thanks to a large scale purchasing with a fair price</li>
          <li>High quality products, highest customer satisfaction in your restaurant, etc..</li>
        </ul>
      </div>
      <div class="why-image">
        <img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
            alt="image of products fruits and vegetables">
      </div>
      <div class="footer">
        <p>copyright</p>
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
  grid-template-rows: 30% 30% 30% 10%;
  grid-gap: 10px;
  font-family: Helvetica, Arial, sans-serif;
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
  margin: 10px;
}
.who-img {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
img {
  height: 350px;
  width: 600px;
  padding: 15px;
  border-radius: 5px;
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
  background-color: lightblue;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  height: 80%;
}
.footer {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: black;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0px;
  color: white;
}
h4 {
  text-align: center;
}
ul, li {
  padding: 10px;
}
@media only screen and (max-width: 375px) {
  .main {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;
    font-family: Helvetica, Arial, sans-serif;
    width: 375px;
    height: 1500px;
  }
  .who {
    background-color: lightblue;
    border-radius: 5px;
    margin: 10px 20px;
    padding: 10px;
    margin: 10px 10px 5px 5px;
    width: 100%;
    height: 200px;
  }
  img {
  visibility: hidden;
  }
  .concept {
    grid-column-start: 1;
    grid-column-end: 2;
    border-radius: 5px;
    margin: 10px 10px;
    padding: 10px;
    margin: 10px 0px 5px 5px;
    width: 100%;
    height: 350px;
  }
  .value-proposition {
    border-radius: 5px;
    margin: 10px 20px;
    padding: 10px;
    margin: 10px 0px 5px 5px;
    width: 100%;
    height: 375px;
  }
  .footer {
    width: 375px;
  }
}
</style>
