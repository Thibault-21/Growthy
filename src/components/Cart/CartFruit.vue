<template>
  <div class="main">
    <div class="cart">
      <div class="order">
        <div class="title">
          <h4>{{stockFruit.type}}</h4>
        </div>
        <div class="content">
          <p>quantity : {{stockFruit.quantity}}</p>
          <input type="number" v-model="quantity" placeholder="Quantity to remove..">
          <button @click="removeItem">Remove from the list</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['stockFruit'], 
  data(){
    return {
      quantity: 0
    }
  },
  computed: {
    getTheAmount(){
      return this.$store.getters.getAmount;
    }
  },
  methods: {
    // actions
    removeItem(){
      const order = {
        fruitId: this.fruit.id,
        price: this.fruit.price,
        quantity: this.quantity
      };
        /*eslint-disable */
      console.log(order);
      this.removeItem();
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
.main {
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 40% 60%;
  margin: 20px auto;
}
.cart {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.order {
  color: lightcoral;
  border: 1px solid lightcoral;
  border-radius: 5px;
}
.title {
  background-color: lightcoral;
  color: white;
  border-radius: 5px;
  padding: 10px;
  /* border: 1px solid lightcoral; */
}
.content {
  grid-column-start: 2 ;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 5px;
  /* border: 1px solid lightcoral; */
  color: lightcoral;

}
</style>
