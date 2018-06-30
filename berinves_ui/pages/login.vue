<template>
  <section  class="container">
    <div  class="card col-md-5">
      <div>
        <div class="card-body">
          <h4>
            Login
          </h4>
          <br>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Email</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="email@example.com">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label" align="left">Password</label>
              <div class="col-sm-7">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" >
              </div>
            </div>
            
            <div class="col-sm-12 row justify-content-end">
              <label class="label-reg" @click="toRegister">Daftar</label>
              <button class="btn btn-primary btn-sm" href="#" @click="toHome">Login</button>
              
            </div>
          </form>
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
    }
  },
  
  methods: {
      toRegister() {
        this.$router.replace({ 'path' : '/' });
      },
      toHome() {
        this.$router.replace({ 'path' : '/home' });
      }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.btn {
  cursor: pointer;
}

.label-reg {
    margin-right: 20px;
    color: dodgerblue;
}

</style>
