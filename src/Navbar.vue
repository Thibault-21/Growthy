<template>
  <nav>
    <router-link class="navbar" active-class="active" exact to="/">Home</router-link>
    <router-link class="navbar" active-class="active" to="/concept">Concept</router-link>
    <router-link class="navbar" active-class="active" to="/suppliers">Our Suppliers</router-link>
     <router-link class="navbar" active-class="active" to="/store">Store</router-link>
     <router-link class="navbar" active-class="active" to="/cart">Cart  {{cartAmount}} €</router-link>
    <router-link class="navbar" active-class="active" to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    cartAmount(){
      return this.$store.getters.getAmount;
    }
  }
}
</script>

<style scoped>
nav {
  background-color: lightcoral;
  color: white;
  padding: 30px;
}
.navbar {
  text-decoration: none;
  color: white;
  margin: 10px;
  padding: 20px;
}
.active {
  border: 1px solid white;
  border-radius: 5px;
}

</style>
