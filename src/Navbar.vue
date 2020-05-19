<template>   
    <nav>
       <div class="nav-2">
      <img src="@/assets/cover.png" alt="logo">
      </div>
      <router-link class="navbar" active-class="active" to="/store">MarketPlace</router-link>
      <router-link class="navbar" active-class="active" to="/concept">Concept</router-link>
      <router-link class="navbar" active-class="active" to="/partnerships">Partnerships</router-link>
      <router-link class="navbar" active-class="active" to="/cart">Cart  {{cartAmount}} €</router-link>
      <router-link class="navbar" active-class="active" to="/contact">Contact</router-link>
      <router-link class="navbar nav-bar3" active-class="active" to="/logins">Login</router-link>
      <router-link class="navbar nav-bar4" active-class="active" to="/signUp">SignUp</router-link>
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
  background-color: rgb(1, 166, 79);
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
.nav-2 {
  margin: 10px;
  padding: 10px;
  align-self: center;
}

img {
  height: 20%;
  width: 20%;
  align-self: center;
}
.nav-bar3 {
  margin: 0px 0px 0px 800px;
  justify-self: right;
  text-align: right;
}
.nav-bar4
{
   margin: 0px 0px 0px 10px;
}
@media only screen and (max-width: 375px) {
  nav {
    background-color: rgb(1, 166, 79);
    color: white;
    padding: 30px;
    width: 375px;
    display: grid;
  }
  .active {
    border: 1px solid white;
    border-radius: 5px;
    width: 300px;
  }
    .navbar {
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 10px;

  }
  .nav-2 {
    margin: 10px;
    padding: 10px;
    align-self: center;
  }
  img {
    height: 15%;
    width: 15%;
    align-self: center;
  }
  .nav-bar3 {
    margin: 0px 0px 10px 10px;
    justify-self: left;
    text-align: left;
  }
  .nav-bar4 {
     margin: 0px 0px 0px 10px;
  }
}
</style>
