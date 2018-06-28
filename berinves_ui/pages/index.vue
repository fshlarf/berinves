<template>
  <section class="container">
    <div class="card col-md-5">
      <div>
        <div class="card-body">
          <p>
            Registrasi
          </p>
          <br>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Firstname: </label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Jon" v-model="form.firstame">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Lastname: </label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Smith" v-model="form.lastname">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Email</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="email@example.com" v-model="form.email">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label" align="left">Password</label>
              <div class="col-sm-7">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="form.password">
              </div>
            </div>
            
            <div class="col-sm-12 row justify-content-end">
              <button type="submit" class="btn btn-primary" @click="registerUser()">Submit</button>
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
      users: [],
      form: {
        firstame: "",
        lastname: "",
        email:"",
        password: ""
      }
    }
  },
  
  methods: {
    registerUser() {
      var newUser = {
        firstame: this.form.firstame,
        lastname: this.form.lastname,
        email: this.form.email,
        password: this.form.password
      };
      console.log(newUser);
      axios.post("http://localhost:4000/register", this.form)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
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
</style>
