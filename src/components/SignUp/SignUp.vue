<template>
  <div class="main">
    <div class="subscription">
      <div class="title">
        <h3>Your best purchasing and simplified</h3>
        <p class="slogan">Until 30% off</p>
      </div>
      <form class="userInfos">
        <input type="text" placeholder="firstName">
        <input type="text" placeholder="lastName">
        <input type="text" placeholder="mail">
        <input type="password" placeholder="password">
      </form>
      <div class="connexion">
        <p class="condition">
          <input type="checkbox">
            <label for="checkbox">In subscribing, you accept our conditions..</label>
        </p>
        <button class="btn">Subscribe</button>
        <p class="login">You already have a Growthy Account ? <a href="">Login</a></p>
      </div>
    </div>
    <!--  -->
    <div class="addvertising">
      <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="image de fruits et légumes sur un marché">
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
  grid-template-columns: 40% 60%;
  grid-template-rows: 100;
  padding: 20px;
  height: 100%;
}
.subscription {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  display: grid; 
  grid-template-columns: 100%;
  grid-template-rows: 15% 55% 30%;
  grid-gap: 10px;
  height: 100%;
  border: 1px solid rgb(18, 206, 105);
  border-radius: 5px;
  margin: 10px;
  padding: 10px 5px;
}
.title {
  display: grid; 
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 100%;
  text-align: center;
  /* padding:10px; */
}
h3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 16px;
  margin: 5px;
}
.slogan {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 100%;
  font-size: 12px;
  margin: 15px;
}
.userInfos {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 25% 25% 25%; 
  margin: 20px;
  /* padding: 0px; */
  height: 100%;
  justify-self: center;
}

input {
  height: 20%;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  border: 1px solid lightgray;
}
input::placeholder {
  color: rgb(18, 206, 105);
}
input:hover {
  border: 1px solid rgb(18, 206, 105);
}
.connexion {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;

  display: grid; 
  grid-template-columns: 100%;
  grid-template-rows: 33% 33% 33%;
  height: 100%;
  margin: 0px;
  justify-self: center;
}
.condition {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  margin: 20px;
  width: 100%;
  justify-self: center;
}
.btn {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

  border-radius: 5px;
  background-color: rgb(18, 206, 105);
  border: 1px solid rgb(103, 196, 103);
  color: white;
  height: 50%;
  margin: 20px 65px;
  width: 75%;
}
.login {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;

  height: 70%;
  font-size: 12px;
  text-align: center;
}
a {
  text-decoration: none;
  color: rgb(103, 196, 103);
}
.addvertising {
  display: grid; 
  height: 100%;
}
img {
  border-radius: 5px;
  margin: 10px;
}
@media only screen and (max-width: 375px) {
  .main {
  display: grid; 
  grid-template-columns: 40% 60%;
  grid-template-rows: 100;
  padding: 20px;
  height: 100%;
  width: 375px;
}
.subscription {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  display: grid; 
  grid-template-columns: 100%;
  grid-template-rows: 15% 55% 30%;
  grid-gap: 10px;
  height: 100%;
  border: 1px solid rgb(18, 206, 105);
  border-radius: 5px;
  margin: 10px;
  padding: 10px 5px;
  width: 375px;
}
  img {
    visibility: hidden;
  }
}
</style>
