<template>
  <nav class="navbar navbar-padding navbar-expand-lg navbar-light">
      <div class="container">
          <a class="navbar-brand" style="color: white" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openHome" >Usahabaik.com</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-navicon" style="color: white"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              <li class="nav-item active" style="background-color: transparent">
                  <!-- home -->
                  <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openHome"  >Home </a>
              </li>
              <li class="nav-item">
                  <!-- profile -->
                  <!-- <i class="nav-link fa fa-user-o" href="#" @click="openProfile"></i> -->
                  <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openProfile" >Profile</a>
              </li>
              <li class="nav-item">
                  <!-- About -->
                  <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openAbout" >About </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="logout" >Logout </a>
              </li>
              </ul>
                  <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" style="color: white">Search</button>
                  </form>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openAbout() {
      this.$router.replace({ path: "/about" });
    },
    openHome() {
      this.$router.replace({ path: "/home" });
    },
    openProfile(user) {
      this.$router.replace({ path: "/profile" });
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.replace({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  color: white;
  font-size: 20px;
}

.navbar-brand:hover {
  opacity: none;
  background: none;
}

.navbar {
  background-color: lightseagreen;
  color: white;
}

a:hover {
  opacity: 0.7;
  background: rgba(221, 221, 221, 0.363);
  cursor: pointer;
}

@media (max-width: 800px) {
  .navbar-padding {
    /* background-position: left left; */
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>