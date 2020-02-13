<template>
  <form action="" method="PUT" class="main">
    <div class="userInfos">
      <label v-if="step === 0">
      <p>Your Company Name</p>
      <input type="text" placeholder="..." v-model="user.company">
      <p>Your Position</p>
       <input type="text" placeholder="Your job position" v-model="user.jobPosition">
      <button class="btn" @click.prevent="next">Next</button>
      </label>

    <label v-else-if="step === 1">
      <p>Your Name</p>
      <input type="text" placeholder="Your name" v-model="user.userName">
       <button class="btn" @click.prevent="next">Next</button>
       <button class="btn-p" @click.prevent="previous">back</button>
    </label>

    <label v-else-if="step === 2">
      <p>Your phone</p>
       <input type="number" placeholder="Your phone" v-model="user.phone">
        <button class="btn" @click.prevent="next">Next</button>
        <button class="btn-p" @click.prevent="previous">back</button>
    </label>

    <label v-else-if="step === 3">
      <p>Your email</p>
       <input type="text" placeholder="Your mail" v-model="user.mail">
        <button class="btn" @click.prevent="next">Next</button>
        <button class="btn-p" @click.prevent="previous">back</button>
    </label>

    <label v-else-if="step === 4">
      <p>Your request</p>
      <textarea placeholder="Tape your request here.." v-model="user.request"></textarea>
       <!-- <button class="btn" @click.prevent="next">Next</button> -->
      <button class="btn-submit" @click="submit">Submit</button>   
    </label>
   </div>
  </form>
</template>

<script>
export default {
  name: "SuppliersForm",
  data(){
    return {
      step: 0, 
      user: {
        company: '',
        jobPosition: '',
        userName: '',
        phone: '',
        mail: '',
        request: ''
      }
    }
  },
  methods: {
    next(){
      return this.step++;
    }, 
    previous(){
      return this.step--;
    }, 
    submit(){
      this.$http.post('https://vuex-app-51196.firebaseio.com/suppliersForm.json', this.user)
        .then(response => {
          /*eslint-disable */
          console.log(response);
        }, error => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
.main {
  margin: 30px 20px;;
  border-radius: 5px;
  grid-column-start: 1;
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
label {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  
}
input {
  border-radius: 5px;
  border: 1px solid lightsalmon;
  padding: 15px;
  margin: 10px;
}
input::placeholder {
  color: lightsalmon;
  font-family: Arial, Helvetica, sans-serif;
}
textarea {
  margin: 10px 10px;
  padding: 30px;
  border-radius: 5px;
}
textarea::placeholder {
  color: lightsalmon;
  font-family: Arial, Helvetica, sans-serif;
}
.userInfos {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 10px;
  justify-self: center;
}
.btn-submit {
  border-radius: 5px;
  padding: 10px;
  margin: 30px 10px;
  background-color: lightsalmon;
  border: 1px solid white;
  color: white;
  grid-column-start: 3;
  grid-row-start: 4;
  width: 50%;
}
.btn-submit:hover {
  background-color: white;
  border: 1px solid lightcoral;
  color: lightsalmon;
}
.btn {
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px 20px 20px;
  background-color: lightsalmon;
  border: 1px solid white;
  color: white;
}
.btn-p {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px 20px 20px;
  background-color: lightsalmon;
  border: 1px solid white;
  color: white;
}
*:focus {
  outline: none;
}
</style>
