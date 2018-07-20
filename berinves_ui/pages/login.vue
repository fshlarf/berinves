<template>
  <section  class="container cont-login">
    <img class="img-bg" src="https://image.freepik.com/free-photo/te-and-headphones-near-laptop_23-2147772355.jpg" alt="">
    <div class="card demo-card-wide mdl-card mdl-shadow--2dp" align="center">
      <!-- Textfield with Floating Label -->
      <div class="card-inner">
        <h5>Login</h5>
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="email" v-model="form.email">
            <label class="mdl-textfield__label" >Email</label>
          </div>
        </form>
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" v-model="form.password">
            <label class="mdl-textfield__label" >Password</label>
          </div>
        </form>
        <div>
          <div class="error" v-html="errorEmpty || errorWrongPassword" style="font-size: 12px;"></div>
          <br>
        </div>
        <div class="mdl-card__actions">
          <nuxt-link to="/" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 10px;">
              Daftar
          </nuxt-link>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="loginUser">
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from "axios"

export default {
  layout: "welcome",
 
  data() {
    return {
      users: [],
      form: {
        email: "",
        password: ""
      },
      errorWrongPassword: null,
      errorEmpty: null
    };
  },
  methods: {
    loginUser() {
      var newUserLogin = {
        email : this.form.email,
        password : this.form.password
      }

      if( this.form.email == null | this.form.email == "" || this.form.password == null | this.form.password  == "" ) {
        // return alert('Email atau password tidak boleh kosong!')
        this.errorEmpty = 'Email atau password tidak boleh kosong!';

      } else {
        axios.post('http://localhost:4000/login', this.form)
        .then(response => {
          console.log(response)
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          // window.localStorage.getItem('setToken', 'setUser')
          this.$router.push({ path: "/home" })
        })
        .catch(error => {
          console.log(error);
          // return alert('Password atau email salah')
          this.errorWrongPassword = 'Password atau email salah';
          this.errorEmpty = "";
        });
      }
    }
  }
}
</script>

<style>
.bodiee {
  font-size: 14px;
  color: dodgerblue;
}

.container .cont-login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn {
  cursor: pointer;
}

.label-reg {
  margin-right: 20px;
  color: dodgerblue;
  cursor: pointer;
}

.card {
  background-color: transparent;
}

.error {
  color: red;
}

.input-bg {
  border: 10%;
  border-color: black;
  background-color: transparent;
}

.img-bg {
  object-fit: cover;
  z-index: 0;
  position: fixed;
  width: 100%;
  height: auto;
}

@media (max-width:800px) {
  .img-bg {
    background-position: left left;
    width: 800px;
    height: 800px;
  }
}

@media (max-width:800px) {
  .card-inner {
    /* background-position: left left; */
    padding: 20px
  }
}

</style>
