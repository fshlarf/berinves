<template>
  <div class="mt-3">
    <div class="btn-block">
      <button class="btn btn-primary btn-add btn-lg" @click="createIdea">
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <div class="">
      <div class="card-columns">
        <div class="card" v-for="user in users" v-bind:key="user.idea" v-show="user.idea"  >
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div>
            <div class="card-body" >
              <!-- <h5 class="card-title" style="color: dodgerblue" @click="openDetail(user)">{{ user.title }}</h5> -->
              <nuxt-link :to="'/details/'+user._id">
                {{ user.title }}
              </nuxt-link>
              <p class="author">
                Penggagas usaha : {{ user.firstname }}
              </p>
              <p class="card-text" >{{ user.idea }}</p>
              <div>
                <button href="#" class="btn btn-primary btn-sm" @click="openDetail(user)"> Join </button>
              </div>
            </div>
            
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'navbar',
   async asyncData() {
    const { data } = await axios.get('http://localhost:4000/userdata')
    return { users: data }
  },
  methods: {
     createIdea(){
      this.$router.replace({ 'path' : '/idea/createIdea' })
    },
    
    openDetail (data) {
      // this.$store.commit('setuserIdea', data)
      this.$store.dispatch('setuserIdea', data)
      this.$router.replace({ 'path': '/detail' })
      console.log(data)
    }
  
  }
};
</script>

<style lang="scss" scoped>

.author {
  color: rgb(158, 158, 158);
  font-size: 12px;
}

.btn-block {
  position: fixed;
  color: #fff;
  width: 90%;
  padding: 20px;
  margin-top: 500px;
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



  // addToAPI() {
  //     var userBaru = {
  //       nama: this.form.nama,
  //       umur: this.form.umur
  //     };
  //     console.log(userBaru);
  //     axios
  //       .post("http://localhost:1234/users", this.form)
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },

  //   deleteUser(users, id) {
  //     axios
  //       .delete("http://localhost:1234/users/" + id)
  //       .then(response => this.users.splice(index, 1));
  //     window.location.reload();
  //   },
</style>

