<template>
  <Page>
    <template #header>
      <!-- <button @click="selectedComponent = 'Home'" class="btn btn-h">Back</button>
      <h2>You are..</h2>
      <button @click="selectedComponent = 'SuppliersForm'" class="btn btn-s"> A Supplier</button>
      <button @click="selectedComponent = 'BusinessForm'" class="btn btn-a">A Food-Retail Company </button>
      <button @click="selectedComponent = 'OtherForm'" class="btn btn-o">Another </button> -->
    </template>
    <template>   
      <keep-alive>
          <component :is="selectedComponent"></component>
      </keep-alive>
      </template>
    <template #footer class="footer">
      <p>&CopyRight</p>
    </template>
  </Page>



</template>

<script>
import Page from './Page'
import Home from './Home'
// import SuppliersForm from './SuppliersForm'
// import BusinessForm from './BusinessForm'
// import OtherForm from './OtherForm'

export default {
  name: 'Contact',
  components: {
    Page,
    Home,
    // SuppliersForm, 
    // BusinessForm, 
    // OtherForm
  },
  data(){
    return {
      selectedComponent: 'Home' 
    }
  }
}
</script>

<style scoped>
p {
  color: white;
}

input {
  color: rgb(1, 166, 79);
  border-radius: 5px;
  border: 1px solid rgb(1, 166, 79);
  margin: 10px auto;
}
*:focus {
  outline: none;
}
@media only screen and (max-width: 375px) {
  .footer {
    width: 750px;
  }
}
</style>
