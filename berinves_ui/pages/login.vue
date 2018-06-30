<template>
  <section  class="container cont-login">
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
            </form>
            
            <div class="col-sm-12 row justify-content-end">
                <label class="label-reg" @click="toRegister">Daftar</label>
                <button class="btn btn-primary btn-sm" href="#" @click="toHome">Login</button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  layout: "welcome",
  data() {
    return {};
  },

  methods: {
    toRegister() {
      this.$router.replace({ path: "/" });
    },
    toHome() {
      this.$router.replace({ path: "/home" });
     
    }
  }
};
</script>

<style>
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
</style>
