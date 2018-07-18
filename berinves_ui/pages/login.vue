<template>
  <section  class="container cont-login">
    <img class="img-bg" src="https://image.freepik.com/free-photo/te-and-headphones-near-laptop_23-2147772355.jpg" alt="">
    <div  class="card col-md-5">
      <div>
        <div class="card-body bodiee">
            <h5 style="color: black">
                Login
            </h5>
            <br>
            <form>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Email</label>
                  <div class="col-sm-7">
                      <input type="text" class="form-control form-control-sm input-bg" placeholder="email@example.com" v-model="form.email">
                  </div>
                </div>

                <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label" align="left">Password</label>
                <div class="col-sm-7">
                    <input type="password" class="form-control form-control-sm input-bg" id="inputPassword" placeholder="Password" v-model="form.password">
                </div>
                </div>
            </form>

            <div>
              <div class="error" v-html="errorEmpty || errorWrongPassword"></div>
              <br>
            </div>
            
            <div class="col-sm-12 row justify-content-end">
                <label class="label-reg" @click="toRegister">Daftar</label>
                <button class="btn btn-primary btn-sm" href="#" @click="loginUser">Login</button>
            </div>
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

    toRegister() {
      this.$router.replace({ path: "/" });
    },
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
};
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


</style>
