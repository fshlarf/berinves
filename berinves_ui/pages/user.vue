<template>

  <div align="center">
    <!-- <form type="form-group" @submit.prevent="showUser()">
      <label >Jumlah user yang akan ditampilkan</label>
      <input type="form-control" v-model="totalDisplay">
      <span type="input-group-btn">
        <button class="btn btn-primary" type="submit">
          submit
        </button>
      </span>
    </form> -->

    <table class="table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.key">
          <!-- <tr> -->
            <td>{{ user.nama }}</td>
            <td>{{ user.umur }}</td>
            <td>
              <button class="btn btn-primary" @click="deleteUser(user, user._id)">delete</button>
            </td>
          </tr>
        </tbody>
    </table>
    
    <div align="left">
      <h4>Add User</h4>
      <form @submit.prevent="addToAPI()">
        <div class="form-group"> 
          <label class="pull-left">Nama</label>
          <input type="text" class="form-control" placeholder="Isi nama kamu" v-model="form.nama">
        </div>
        <div class="form-group"> 
          <label class="pull-left">Umur</label>
          <input type="text" class="form-control" placeholder="Isi umur kamu" v-model="form.umur" >
        </div>
      <button type="submit" class="btn btn-large btn-block btn-primary">Submit</button>
      </form>
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


