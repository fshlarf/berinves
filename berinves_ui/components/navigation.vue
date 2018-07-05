<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div v-if="!$store.state.userIdea.title" class="container">
        <a class="navbar-brand" style="color: white" href="" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openHome">berinves.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-navicon" style="color: white"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <!-- home -->
                <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openHome">Home </a>
            </li>
            <li class="nav-item active">
                <!-- profile -->
                <!-- <i class="nav-link fa fa-user-o" href="#" @click="openProfile"></i> -->
                <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openProfile">Profile</a>
            </li>
            <li class="nav-item active">
                <!-- home -->
                <a class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="openAbout">About </a>
            </li>
            <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li> -->
            
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" style="color: white">Search</button>
            </form>
        </div>
        </div>
        <div v-else class="container">
            <a class="navbar-brand" href="" @click="goBack()">
                <i class="fa fa-arrow-left" style="color: white"></i>
                <span> Back</span>
            </a>
         </div>
    </nav>
    <!-- <nav class="navbar navbar-expand-lg">
      <div v-if="!$store.state.userIdea.title" class="container">
          
          <a class="nav-link tech" href="#" @click="openHome()">Home <span class="sr-only">(current)</span></a>
          <i class="nav-link fa fa-user-o" href="#" @click="openProfile"></i>
          <a class="nav-link about" href="#" @click="openAbout()">About</a>
          
      </div>
      <div v-else class="container">
        <a class="navbar-brand" href="#" @click="goBack()">
          <i class="fa fa-arrow-left" style="color: white"></i>
          <span> Back</span>
        </a>
      </div>
    </nav> -->
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
    openProfile() {
      this.$router.replace({ path: "/profile" });
    },
    goBack() {
      this.$store.commit("setuserIdea", "");
      this.$router.replace({ path: "/home" });
    //   location.reload();

    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
    color: white;
    font-size: 20px;
}


.navbar {
  background-color: lightseagreen;
  color: white;
}

.nav-link {
  color: white;
}

</style>