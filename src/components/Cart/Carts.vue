<template>
  <div class="main">
    <Cart v-for="stock in stockCart" :key="stock.id" :stock="stock" :amount="getamount"></Cart>
  </div>
</template>

<script>
import Cart from './Cart'

export default {
  name: 'Carts',
  components: {
    Cart
  }, 
  computed: {
    addedToCart(){
      return this.$store.getters.stockCart;
    }, 
    getamount(){
      return this.$store.getters.getAmount;
    }
  }
}
</script>

<style>

</style>
