<template>
  <div class="main">
    <div class="box">
      <div class="title">
        <h4>{{fruit.type}}<p>Price: {{fruit.price}}€ /kg</p> </h4>
        <p>Stock: {{fruit.stock}}</p>
      </div>
      <div class="content">
        <input v-model="quantity" type="number" placeholder="quantity"/>
        <button @click="buyFruits">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fruit', 
  props:['fruit'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
  buyFruits(){
      const order = {
        fruitId: this.fruit.id,
        price: this.fruit.price,
        quantity: this.quantity
      };
       /*eslint-disable */
      console.log(order);
      this.$store.dispatch('buyFruits', order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  /* border: 5px solid blue; */
  grid-gap: 20px;
  margin: 10px 0px;
}
.box {
  border-radius: 5px;
  background-color: white;
  margin: 20px 0px;
  padding: 5px;
  width: 70%;
  border: 3px solid rgb(143, 204, 224);
  align-items: center;
  justify-self: center;
}
.title {
  background-color: rgb(143, 204, 224);
  padding: 1px 15px;
  border-radius: 5px;
  margin: 5px auto;
  color: white;
  /* text-align: center */
}
.content {
  border-radius: 5px;
  background-color: white;
  margin: 20px 0px;
  padding: 5px;
  width: 0%;
}
input {
  border-radius: 5px;
  border: 1px solid rgb(143, 204, 224);
  margin: 10px auto;
  padding: 20px;
}
button {
  border-radius: 5px;
  background-color: rgb(143, 204, 224);
  color: white;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid rgb(143, 204, 224);
}
@media only screen and (max-width: 375px) {
  .main {
    display: grid; 
    grid-template-columns: 100%;
    /* border: 5px solid blue; */
    margin: 10px 0px;
    height: 600px;
  }
  .box {
    border-radius: 5px;
    background-color: white;
    margin: 20px 0px;
    padding: 5px;
    width: 250px;
    border: 3px solid rgb(143, 204, 224);
    align-items: center;
    justify-self: center;
    height: 300px;
  }
  .title {
    background-color: rgb(143, 204, 224);
    padding: 1px 15px;
    border-radius: 5px;
    margin: 5px auto;
    color: white;
    /* text-align: center */
  }
  .content {
    border-radius: 5px;
    background-color: white;
    margin: 20px 0px;
    padding: 5px;
    width: 0%;
  }
  input {
    border-radius: 5px;
    border: 1px solid rgb(143, 204, 224);
    margin: 10px auto;
    padding: 20px;
  }
  button {
    border-radius: 5px;
    background-color: rgb(143, 204, 224);
    color: white;
    padding: 20px;
    margin-left: 20px;
    border: 1px solid rgb(143, 204, 224);
  }
}
</style>
