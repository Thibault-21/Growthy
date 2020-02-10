<template>
  <div class="main">
    <header>
      <slot name="header" class="header">
      </slot>
      </header>
    <main>
      <slot name="content" class="content">*
      </slot>
    </main>
  </div>
</template>

<script>
export default {
 name: 'Page'
}
</script>

<style lang="scss" scoped>

header {
  display: grid;
  grid-template-columns: 50% 50%;
}

.btn {
  margin: 10px;
  padding: 20px;
  align-items: center;
  justify-self: center;
}
.btn-f {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  background-color: lightblue;
  color: black;
  border-radius: 5px;
  border: 1px solid lightblue;
  width: 80%;
// height: 30%;

}
.btn-v {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: lightgreen;
  color: white;
  border-radius: 5px;
  border: 1px solid lightgreen;
  width: 80%;
// height: 30%;
}
main {
 display: grid;
 grid-template-columns: 100%;
 grid-template-rows: 100%;
 margin: 10px 10px;
}


</style>
