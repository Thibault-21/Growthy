<template>
  <div class="main">
    <div class="cart">
      <h3>Your Cart</h3>
      <div class="order">
        <div class="title">
          <h4>Banana</h4>
          <p>{{amount}}</p>
        </div>
        <div class="content">
          <p>quantity : 
            <ul><li></li></ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['stock', 'amount'], 
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    // actions
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
