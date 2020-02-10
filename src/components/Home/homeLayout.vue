<template>
  <div class="main">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* .main {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%
} */
</style>
