<template>
  <div class="cart">
    <div class="title">
      <h3>Your Cart : {{getCartAmount}} € </h3>
    </div>
    <div class="content">
      <!-- <CartFruit class="fruits" v-for="fruit in fruitsAddedToCart" :key="fruit.id" :stockFruit="fruit"></CartFruit> -->
    </div>
  </div>
</template>

<script>
// import CartFruit from './CartFruit'
export default {
  name: 'Cart',
  components: {
        // CartFruit
  },
  computed: {
    getCartAmount(){
      return this.$store.getters.getAmount;
    }, 
    fruitsAddedToCart(){
      return this.$store.getters.fruitsCart;
    },
    vegetablesAddedToCart(){
      return this.$store.getters.vegetableCart;
    }, 
  }
}
</script>

<style scoped>
.cart{
  border: 2px solid lightcoral;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
  color: lightcoral;
}
h3 {
  margin: 0 auto;
}

</style>
