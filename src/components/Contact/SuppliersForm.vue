<template>
  <form action="" method="PUT" class="main">
    <div class="userInfos">
      <label>
      <p>Your Company Name</p>
      <input type="text" placeholder="...">
    </label>
    <label>
      <p>Your Position</p>
       <input type="text" placeholder="Your job position">
    </label>
    <label>
      <p>Your Name</p>
      <input type="text" placeholder="Your name">
    </label>
    <label>
      <p>Your request</p>
      <textarea placeholder="Tape your request here.."></textarea>
    </label>
    <label>
      <p>Your email</p>
       <input type="text" placeholder="Your mail">
    </label>
    <label>
      <p>Your phone</p>
       <input type="number" placeholder="Your phone">
    </label>
    
    <button class="btn-submit">Submit</button>
    </div>
  
  </form>
</template>

<script>
export default {
  name: "SuppliersForm"
}
</script>

<style scoped>
.main {
  margin: 30px 5px;;
  border-radius: 5px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
  background-color: lightsalmon;
  padding: 50px;
}
p {
  color: white;
  margin: 10px;
}
input {
  border-radius: 5px;
  border: 1px solid lightsalmon;
  padding: 15px;
  margin: 10px;
}
input::placeholder {
  color: lightsalmon;
}
textarea {
  margin: 10px 10px;
  padding: 30px;
}
textarea::placeholder {
  color: lightsalmon;
}
.userInfos {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 10px;
}
.btn-submit {
  border-radius: 5px;
  padding: 10px;
  margin: 30px 10px;
  background-color: lightsalmon;
  border: 1px solid white;
  color: white;
  grid-column-start: 3;
  grid-row-start: 3;
  width: 50%;
}
.btn-submit:hover {
  background-color: white;
  border: 1px solid lightcoral;
  color: lightsalmon;
}
</style>
