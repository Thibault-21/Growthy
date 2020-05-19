<template>
  <!--  -->
  <div class="cart">
    <div class="title">
      <h3>Your Cart : {{getCartAmount}} € </h3>
    </div>
    <div class="content">
      <!-- <CartFruit class="fruits" v-for="fruit in fruitsAddedToCart" :key="fruit.id" :stockFruit="fruit"></CartFruit> -->
    </div>
  </div>
  <!--  -->
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
  border: 2px solid rgb(1, 166, 79) ;
  padding: 20px;
  border-radius: 5px;
  color: rgb(1, 166, 79) ;
  height: 100px;
}
h3 {
  margin: 0 auto;
}
@media only screen and (max-width: 375px) {
  .cart{
    border: 2px solid rgb(1, 166, 79) ;
    padding: 20px;
    border-radius: 5px;
    color: rgb(1, 166, 79) ;
    height: 100px;
    width: 700px;
  }
}
</style>
