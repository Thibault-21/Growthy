<template>
  <div class="main">
    <div class="infos">
    <p><strong>Our location: </strong></p>
    <p><strong>Phone: </strong>+33 6 99 27 61 58</p>
    <p><strong>mail:</strong> thib.dec.pro@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.infos {
  background-color: white;
  border: 1px solid white;
  padding: 10px;
  margin: 5px 5px;;
  border-radius: 5px;
  color: black;
  height: 558px;
  place-self: center;
}
@media only screen and (max-width: 480px) {
  .infos {
    background-color: white;
    height: 730px;
  }
}
</style>
