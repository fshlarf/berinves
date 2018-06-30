<template>
  <section  class="container cont-reg">
    <div  class="card col-md-5">
      <div>
        <div class="card-body">
          <h4>
            Registrasi
          </h4>
          <br>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Nama Depan </label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Jon" v-model="form.firstname">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Nama Belakang </label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Smith" v-model="form.lastname">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-5 col-form-label" align="left">Email</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="email@example.com" v-model="form.email">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label" align="left">Password</label>
              <div class="col-sm-7">
                <input type="password" class="form-control" id="inputPassword" placeholder="password" v-model="form.password">
              </div>
            </div>
          </form>

          <div class="col-sm-12 row justify-content-end">
            <label class="label-login" @click="toLogin">Login</label>
            <button class="btn btn-primary btn-sm" href="#" @click="registerUser">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

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
        password: ""
      }
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
      axios.post("http://localhost:4000/register", this.form)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.$router.replace({ 'path' : '/home' });
    },
    toLogin (){
      this.$router.replace({ 'path' : '/login' });
    }
  }  
}
</script>

<style>
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

</style>
