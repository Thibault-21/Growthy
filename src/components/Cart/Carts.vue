<template>
  <div class="main">
    <Cart class="cart"></Cart>
    <!-- <CartVegetable class="vegetables" v-for="vegetable in vegetablesInCart" :key="vegetable.id" :stockVegetable="vegetable"></CartVegetable> -->
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
  grid-template-rows: 40% 60%;
  margin: 20px auto;
}
.cart {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;

}
</style>
