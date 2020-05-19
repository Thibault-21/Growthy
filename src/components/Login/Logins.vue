<template>
  <div class="main">
    <div class="header">
      <div class="top"></div>
      <div class="login">
        <div class="title">
        <h3>Welcome back ! </h3>
        <p class="subscription"> You don't have already a Growthy account ? <a href="">Subscription</a></p>
        </div>
        <div class="userInfos">
          <label class="mail">
            <input type="text" placeholder="Your Mail">
          </label>
          <label class="password">
            <input type="password" placeholder="Your password">
          </label>
        </div>
        <div class="connexion">
          <button class="btn">CONNEXION</button>
          <p class="forgot">You forgot your password ? <a href="">Reinitialized it</a> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logins'
}
</script>

<style scoped>
.main {
  background-color: lightgrey;
  height: 100%;
}
.header {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 30% 30% 40%;
  grid-gap: 5px;  
}
.top {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.login {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;

  display: grid;
  background-color: white;
  border: 3px solid rgb(18, 206, 105);
  padding: 35px;
  border-radius: 5px;
  height: 100%;
}
.title {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-gap: 5px; 
}

h3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

 text-align: center; 
}
.subscription {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  text-align: center;
  font-size: 12px;
  margin-top: 5px;
}
a {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  text-decoration: none;
  color: rgb(18, 206, 105);
  font-size: 12px;
}
.userInfos {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  grid-gap: 0px; 
  justify-self: center;
  
}
input {
  border-radius: 5px;
  padding: 10px;
  margin: 0px;
  justify-self: center;
}
input::placeholder {
  color: rgb(18, 206, 105);
}
input:hover {
  border: 1px solid rgb(18, 206, 105);
}
.connexion {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;

  justify-self: center;
  height: 100%;
  padding: 20px;
}
button {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  background-color: rgb(18, 206, 105);
  border-radius: 5px;
  color: white;
  border: 1px solid rgb(18, 206, 105);
  padding: 0px 55px;
  margin: 5px;
}
.forgot {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 12px;
}
*:focus {
  outline: none;
}
</style>
