<template>
  <div class="main">
    <Cart class="cart"></Cart>
    <!-- <CartVegetable class="vegetables" v-for="vegetable in vegetablesInCart" :key="vegetable.id" :stockVegetable="vegetable"></CartVegetable> -->
    <div class="footer">
      <p>Copyright</p>
    </div>
  </div>
</template>

<script>
import Cart from './Cart'
// import CartVegetable from './CartVegetable'

export default {
  name: 'Carts',
  components: {
    Cart,
    // CartVegetable
  }, 
  computed: {
    getamount(){
      return this.$store.getters.getAmount;
    },
    fruitsInCart(){
      return this.$store.getters.fruitsCart;
    },
    vegetablesInCart(){
      return this.$store.getters.vegetableCart;
    }, 
  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 80% 20%;
  margin: 20px auto;
  height: 615px;
}
.cart {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;

}
.footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  background-color: black;
  color: white;
  padding: 10px;
}
@media only screen and (max-width: 375px) {
  .main {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 80% 20%;
  margin: 20px auto;
  height: 615px;
}
.cart {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;

}
.footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  background-color: black;
  color: white;
  padding: 10px;
  width: 870px;
  }
}
</style>
