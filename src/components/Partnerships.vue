<template>
  <div class="main">
     <div class="header">
        <h3>Some partnerships in France..</h3>
      </div>
    <div class="gallery">
      <div class="sup sup-1">
        <div class="title">
          <h4>Les vergers de Gally <a href="https://www.lesfermesdegally.com/"></a></h4>
        </div>
        <div class="content">
         <img src="https://www.lesfermesdegally.com/sites/default/files/styles/text_image_475/public/img/lieu-stcyr_S.jpg?itok=8W1vR0OC">      
        </div>
      </div>
      <div class="sup sup-2">
        <div class="title">
          <h4>Les vergers de Champlain <a href="https://www.vergersdechamplain.fr/"></a></h4>
          </div>
        <div class=" content">
          <img src="https://www.vergersdechamplain.fr/img/img/vdchistorique2.jpg">
        </div>
      </div>
      <div class="sup sup-3">
        <div class="title">
          <h4>La vergers de St Eustache <a href="https://v-st-eustache.com/fr/"></a></h4>
        </div>
        <div class="content">
          <img src="https://v-st-eustache.com/img/vergers-st-eustache.jpg">
        </div>
      </div>
      <div class="sup sup-4">
        <div class="title">
          <h4>Les vergers de la Valloire <a href="https://www.vergersvalloire.fr/"></a></h4>
        </div>
        <div class="content">
          <img src="https://cdn.website-editor.net/db5fd18f2c88435ebf31fe22b288c60b/dms3rep/multi/desktop/d6b74ce3-0a56-409a-8e51-88a1079ef1c2.jpg">
        </div>
      </div>
    </div>
    <div class="before-footer">
      <p>And more outside of the boundaries soon..</p>
    </div>
    <div class="footer">
      <p>copyright</p>
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
  grid-template-rows: 5% 80% 5% 10%;
  grid-gap: 10px;
}
.header {
  color: rgb(1, 166, 79);
  text-align: center;
}
.gallery {
  display: grid;
  grid-template-columns: 50% 50%; 
  grid-template-rows: 50% 50%; 
  grid-gap: 30px; 
  margin: 15px 35px 25px 15px;
}
.sup {
  padding: 10px;
  border-radius: 5px;
  margin: 15px 0px;
  border: 2px solid rgb(1, 166, 79);
  height: 90%;
}
.sup:hover {
  background-color: rgb(1, 166, 79);
  color: white;
}
.content {
  height: 100%;
}
img {
  height: 70%;
  width: 70%;
  padding: 10px;
  border-radius: 10px;
}
a {
  text-decoration: none;
  padding: 10px;
  margin: 10px;
}
.before-footer {
  color: rgb(1, 166, 79);
  text-align: center;
}
.footer {
  background-color: black;
  margin: 30px 0px 5px 0px;
  padding: 10px;
  color: white;
}
@media only screen and (max-width: 375px) {
  .main {
    display: grid;
    grid-template-rows:85% 15%;
    grid-gap: 10px;
    height: 730px;
    width: 375px;
  }
  .header {
  color: rgb(1, 166, 79);
  text-align: left;
}
  .gallery {
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    grid-template-columns: 100%; 
    grid-template-rows: 50% 50%; 
    grid-gap: 30px; 
    margin: 15px 35px 25px 15px;
  }
  .sup {
    padding: 10px;
    border-radius: 5px;
    margin: 15px 0px;
    border: 2px solid rgb(1, 166, 79);
    height: 90%;
  }
  .before-footer {
    color: rgb(1, 166, 79);
    text-align: center;
    visibility: hidden;
  }
  .footer {
    visibility: hidden;
  }
  h3 {
    visibility: hidden;
  }
}
</style>
