<template>
  <div class="main">
    <div class="gallery">
      <div class="sup-1">
        <div class="title">
          <h1>Les fermes de Gally</h1>
          <p> https://www.lesfermesdegally.com/</p>
        </div>
        <div class="content">
          <img src="">
        </div>
      </div>
      <div class="sup-2">
        <div class="title">
          <h1>Les fermes de Collonges</h1>
        </div>
        <div class="content">
          <img src="">
        </div>
      </div>
      <div class="sup-3">
        <div class="title">
          <h1>Les fermes de Gally</h1>
        </div>
        <div class="content">
          <img src="">
        </div>
      </div>
      <div class="sup-4">
        <div class="title">
          <h1>Les fermes de Gally</h1>
        </div>
        <div class="content">
          <img src="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  display: grid;
}
.gallery {
  display: grid;
  grid-template-columns: 50% 50%; 
  grid-template-rows: 50% 50%; 
  grid-gap: 10px; 
  margin: 10px 10px;
}
.sup-1 {
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  border: 2px solid lightcoral;
}
.sup-2 {
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  border: 2px solid lightcoral;
  }
.sup-3 {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid lightcoral;
  }
.sup-4 {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid lightcoral;}

</style>
