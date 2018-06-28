<template>

  <div align="center">
    
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
  mounted() {
    axios.get("http://localhost:1234/users", {
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
      axios.delete("http://localhost:1234/users/" + id)
        .then((response => this.users.splice(index, 1)));
        window.location.reload();
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
  }
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
// showUser() {
//   axios.get("http://localhost:1234/crud", {
//     crossDomain: true,
//     params: {
//       perPage : this.totalDisplay
//     }
//   })
//   .then(response => {
//     console.log("Your data catched!");
//     console.log(response.data);
//     this.users = response.data;
//   })
//   .catch(error => {
//     console.log(error);
//   });
// },
</style>


