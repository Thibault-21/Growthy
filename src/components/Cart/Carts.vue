<template>
  <div class="main">
    <Cart class="cart"></Cart>
    <!-- <CartVegetable class="vegetables" v-for="vegetableCart in vegetablesAddedToCart" :key="vegetableCart.id" :stockVegetable="vegetableCart"></CartVegetable> -->
  </div>
</template>

<script>
import Cart from './Cart'

// import CartVegetable from './CartVegetable'

export default {
  name: 'Carts',
  components: {
    Cart,
  }, computed: {
    getamount(){
      return this.$store.getters.getAmount;
    }
  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 40% 60%;
  margin: 20px auto;
}
.cart {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;

}
</style>
