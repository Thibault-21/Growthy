<template>
    <Page>
      <template #header>
        <button @click="selectedComponent ='Fruits'" class="btn btn-f">Fruits</button>
        <button @click="selectedComponent = 'Vegetables'" class="btn btn-v">Vegetables</button>
      </template>
      <template #content>   
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </template>
    </Page>
  
</template>

<script>
import Fruits from './Fruits/Fruits';
import Vegetables from './Vegetables/Vegetables';
import Page from './Page';

export default {
  components: {
    Fruits, 
    Vegetables, 
    Page
    },
  data(){
    return {
      selectedComponent: 'Fruits' 
    }
  }
}
</script>

<style scoped>

</style>
