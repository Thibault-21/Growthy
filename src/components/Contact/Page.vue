<template>
  <div class="main">
    <header>
      <slot name="header"></slot>      
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

header {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
}
h2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 20px auto 0px auto;
}

.btn-s {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

  background-color: lightsalmon;
  border: 2px solid lightsalmon;
  color: white;
}
.btn-a {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  background-color: lightcoral;
  border: 2px solid lightcoral;
  color: white;
}
.btn-o {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: lightseagreen;
  border: 2px solid lightseagreen;
  color: white;
}

.btn-h {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;

  background-color: white;
  border: 2px solid lightgray;
  color: black;
}
.btn {
  border-radius: 10px;
  padding: 45px;
  margin: 10px 20px 20px 20px;
}
main {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows:  25% 25% 25% 25% ;
  margin: 10px auto;
}

footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: lightcoral;
  padding: 20px;
}

</style>
