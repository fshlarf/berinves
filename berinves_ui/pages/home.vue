<template>
  <div class="mt-3">

    <div class="container">
      <div class="card-columns">
        <div class="card" v-for="user in users" v-bind:key="user.key">
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div>
            <div class="card-body" >
              <h5 class="card-title">{{ user.firstname }}</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia in ipsa inventore. Harum dignissimos, delectus perferendis architecto alias consequatur fugiat magni rerum hic! Quo, ipsam nostrum? Tenetur, recusandae sunt! Magni?</p>
              <div>
                <a href="#" class="btn btn-primary">Join</a>
              </div>
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
  data() {
    return {
      users: [],
      // totalDisplay: 5,
      form: {
        nama: "",
        umur: ""
      }
    };
  },
  // computed: {
  //     user () { 
  //         return this.$store.state.firstname 
  //     },
      
  // },
  mounted() {
    axios
      .get("http://localhost:4000/userdata", {
        crossDomain: true
      })
      .then(response => {
        console.log("Your data catched!");
        console.log(response.data);
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    addToAPI() {
      var userBaru = {
        nama: this.form.nama,
        umur: this.form.umur
      };
      console.log(userBaru);
      axios
        .post("http://localhost:1234/users", this.form)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteUser(users, id) {
      axios
        .delete("http://localhost:1234/users/" + id)
        .then(response => this.users.splice(index, 1));
      window.location.reload();
    },
  }
    // async addToAPI() {
    //   try {
    //     const response = await axios.post('http://localhost:1234/users', this.form)
    //     this.users = response.data
    //     this.nama = ''
    //     this.umur = ''
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  // filters: {
  //   currencydecimal(value) {
  //     return value.toFixed(2);
  //   }
  // }
  
};
</script>

<style lang="scss" scoped>
/*
 * Card Columns Masonry - Bootstrap 4
 * https://codepen.io/JacobLett/pen/oZmWdd
 */
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
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


