<template>
   <div class="main">
    <div class="box">
      <div class="title">
        <h4> {{vegetable.type}}<p>Price: {{vegetable.price}}€ / unit</p> </h4>
        <p>Stock: {{vegetable.quantity}}</p>
      </div>
      <div class="content">
        <input type="number" placeholder="quantity"/>
        <button>Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['vegetable']
}
</script>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  /* border: 5px solid blue; */
  grid-gap: 20px;
  margin: 10px 0px;
}
.box {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 5px;
  background-color: white;
  margin: 20px 0px;
  padding: 5px;
  width: 70%;
  border: 3px solid rgb(100, 214, 100);
  /* align-items: ; */
  justify-self: center;
}
.title {
  background-color: rgb(100, 214, 100);
  padding: 1px 15px;
  border-radius: 5px;
  margin: 5px auto;
  color: white;
  /* text-align: center */
}
.content {
  border-radius: 5px;
  background-color: white;
  margin: 20px 0px;
  padding: 5px;
  width: 0%;
}
input {
  border-radius: 5px;
  border: 1px solid rgb(100, 214, 100);
  margin: 10px auto;
  padding: 20px;
}
button {
  border-radius: 5px;
  background-color: rgb(100, 214, 100);
  color: white;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid rgb(100, 214, 100);
}
</style>
