<template>
  <div class="main">
    <div class="title">
      <h4>{{stock.type}}</h4>
      <p>{{amount}}</p>
    </div>
    <div class="content">
      <p>{{stock.quantity}}</p>
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
  border: 1px solid black;
}
</style>
