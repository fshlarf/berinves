<template>
  <div class="mt-3">
    <div class="btn-block">
      <button class="btn-add mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              @click="createIdea"
      >
        <i class="material-icons">add</i>
      </button>
    </div>
    <div class="">
      <div class="card-columns">
        <div class="card" v-for="user in users" v-bind:key="user.idea" v-show="user.idea"  >
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div>
            <div class="card-body" >
              <!-- <h5 class="card-title" style="color: dodgerblue" @click="openDetail(user)">{{ user.title }}</h5> -->
              <nuxt-link class="nuxt-link" :to="'/details/'+user._id">
                <h5>{{ user.title }}</h5>
              </nuxt-link>
                <p class="author">
                  Penggagas usaha : {{ user.firstname }}
                </p>
                <p class="card-text" >{{ user.idea | truncate(160) }}</p>
              <nuxt-link class="nuxt-link" :to="'/details/'+user._id" style="color: white">
                   <button class="btn btn-primary btn-sm">
                    Join
                  </button>
              </nuxt-link>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "navbar",
  async asyncData() {
    const { data } = await axios.get("http://localhost:4000/userdata");
    return { users: data };
  },
  methods: {
    createIdea() {
      this.$router.replace({ path: "/idea/createIdea" });
    },

    openDetail(data) {
      // this.$store.commit('setuserIdea', data)
      this.$store.dispatch("setuserIdea", data);
      this.$router.replace({ path: "/detail" });
      console.log(data);
    }
  },
  filters: {
     truncate(string, value) {
      if (!string == '') {
        if (string.length > 160) {
          return string.substring(0, value) + ' …'
        } else {
          return string + '.'
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.nuxt-link:active {
  text-decoration: none;
}

.nuxt-link:hover {
  text-decoration: none;
}

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

