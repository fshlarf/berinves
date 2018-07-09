<template>
  <section  class="container cont-reg">
    <img class="img-bg" src="https://image.freepik.com/free-photo/office-desk-with-square-space-in-middle_23-2147731412.jpg" alt="">
    <div class="card col-md-5">
      <div>
        <div class="card-body bodiee">
          <br>
          <h5 style="color: black">
            Registrasi
          </h5>
          <br>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Nama Depan </label>
              <div class="col-sm-7">
                <input type="text" class="form-control form-control-sm input-bg" placeholder="Contoh: Jhon" v-model="form.firstname">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Nama Belakang </label>
              <div class="col-sm-7">
                <input type="text" class="form-control form-control-sm input-bg" placeholder="Contoh: Smith" v-model="form.lastname">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Email</label>
              <div class="col-sm-7">
                <input type="text" class="form-control form-control-sm input-bg" placeholder="email@example.com" v-model="form.email">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label" align="left">Password</label>
              <div class="col-sm-7">
                <input type="password" class="form-control form-control-sm input-bg" id="inputPassword" placeholder="password" v-model="form.password">
              </div>
            </div>
          </form>

          <div class="error" v-html="errorEmpty || errorRegisteredEmail"></div>
          <br>
          <div class="col-sm-12 row justify-content-end">
            <label class="label-login" @click="toLogin">Login</label>
            <button class="btn btn-primary btn-sm" href="#" @click="registerUser">Daftar</button>
          </div>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
// import Vuetify from 'vuetify';
// import '../node_modules/vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)

import axios from 'axios';
export default {
  layout: "welcome",
  
  data() {
    return {
      users: [],
      form: {
        firstname: "",
        lastname: "",
        email:"",
        password: "",
      },
      errorEmpty: null,
      errorRegisteredEmail: null
    }
  },
  
  methods: {
    registerUser() {
      var newUser = {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        email: this.form.email,
        password: this.form.password
      };
      if(  this.form.firstname == null | this.form.firstname == ""
        || this.form.lastname == null | this.form.lastname == ""
        || this.form.email == null | this.form.email == ""
        || this.form.password == null | this.form.password == ""){
        // return alert('Data yang kamu isi belum lengkap');
        this.errorEmpty = "Data yang kamu isi belum lengkap"
      } else {
        axios.post("http://localhost:4000/register", this.form)
        .then(response => {
          console.log(response);
          this.$router.replace({ 'path' : '/home' });
        })
        .catch(error => {
          console.log(error);
          // return alert('email yang anda buat sudah terdaftar')
          this.errorRegisteredEmail = 'Email yang kamu masukkan sudah terdaftar'
          this.errorEmpty = ""
        });
      }
    },
    toLogin (){
      this.$router.replace({ 'path' : '/login' });
    },

  }  
}
</script>

<style>

.bodiee {
  font-size: 14px;
  color: dodgerblue;
}

.container .cont-reg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn {
  cursor: pointer;
}

.label-login {
  margin-right: 20px;
  color: dodgerblue;
  cursor: pointer;
}

.error {
  color: red
}

.card {
  background-color: transparent;
}

.img-bg {
  object-fit: cover;
  z-index: 0;
  position: fixed;
  width: 100%;
  height: auto;
}

.input-bg {
  border: 10%;
  border-color: black;
  background-color: transparent;
}


@media (max-width:800px) {
  .img-bg {
    background-position: left left;
    width: 800px;
    height: 800px;
  }
}

</style>


