<template>
  <div class="mt-3">
    <div class="container">
      <div class="card-columns">
        <div class="card" v-for="user in users" v-bind:key="user.idea" v-show="user.idea" >
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div>
            <div class="card-body" >
              <h5 class="card-title" style="color: dodgerblue">{{ user.title }}</h5>
              <p class="author">
                <b>Penggagas usaha : {{ user.firstname }}</b>
              </p>
              <p class="card-text" >{{ user.idea }}</p>
              <div>
                <a href="#" class="btn btn-primary btn-sm"> Join </a>
              </div>
              <!-- button add idea -->
            </div>
            
          <div class="block">
            <button class="btn btn-primary btn-add btn-lg" @click="createIdea">
              <i class="fa fa-plus"></i>
            </button>
          </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueStringFilter from 'vue-string-filter';

export default {
  layout: 'navbar',
  data() {
    return {
      users: [],
      
      form: {
        nama: "",
        umur: ""
      }
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/userdata", {
        crossDomain: true
      })
      .then(response => {
        console.log("Your data catched!");
        console.log(response.data);
        this.users = response.data;
        // this.user.idea = response.data.idea;
      })
      .catch(error => {
        console.log(error);
      });
  },
 

  methods: {
     createIdea(){
        this.$router.replace({ 'path' : '/idea/createIdea' })
    },
    
    // addToAPI() {
    //   var userBaru = {
    //     nama: this.form.nama,
    //     umur: this.form.umur
    //   };
    //   console.log(userBaru);
    //   axios
    //     .post("http://localhost:1234/users", this.form)
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },

    // deleteUser(users, id) {
    //   axios
    //     .delete("http://localhost:1234/users/" + id)
    //     .then(response => this.users.splice(index, 1));
    //   window.location.reload();
    // },
  }
};
</script>

<style lang="scss" scoped>

.author {
  color: rgb(158, 158, 158);
  font-size: 12px;
}

.block {
  position: fixed;
  color: #fff;
  width: 90%;
  padding: 20px;
  margin-top: 120px;
  z-index: 1;
}

.btn {
  padding-right: 15px;
  padding-left: 15px;
  
}

.btn-add {
  float: right;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .card-columns {
    column-count: 3;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .card-columns {
    column-count: 3;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .card-columns {
    column-count: 3;
  }
}



</style>


