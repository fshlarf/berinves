<template>
    <nav class="navbar navbar-expand-lg">
        <!-- <div v-if="!$store.state.article.title" class="container"> -->
      <div v-if="!$store.state.userIdea.title" class="container">
          <!-- <img class="img-nav" src="https://png.icons8.com/metro/1600/nfc-logo.png" alt=""> -->
          
          <a class="nav-link tech" href="#" @click="openHome()">Home <span class="sr-only">(current)</span></a>
          <!-- <a class="nav-link" href="#" @click="openProfile">Profil</a> -->
          <i class="nav-link fa fa-user-o" href="#" @click="openProfile"></i>
          <a class="nav-link about" href="#" @click="openAbout()">About</a>
          <!-- <form action="#">
              <label for="search">
                  <input type="text" placeholder="Search" @blur="state='close'"/>
                  <img src="https://webiconspng.com/wp-content/uploads/2016/12/Search-Icon-File.png" alt="search img" style="width: 18px; margin-left: -25px;">
              </label>
            </form> -->
      </div>
      <div v-else class="container">
        <a class="navbar-brand" href="#" @click="goBack()">
          <i class="fa fa-arrow-left" style="color: white"></i>
          <span> Back</span>
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  methods : {
    openAbout(){
        this.$router.replace({ 'path' : '/about' })
    },
    openHome(){
        this.$router.replace({ 'path' : '/home' })
    },
    openProfile(){
        this.$router.replace({ 'path' : '/profile' })
    },
    goBack() {
      this.$store.commit('setuserIdea', "")
      this.$router.replace({ 'path' : '/home' })
      location.reload()
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  span {
    font-size: 20px;
    color: white;
  }
}

.navbar {
    background-color: lightseagreen;
}

.nav-link {
    color: white;
}

.navbar-toggler-icon {
    color:  white;
}


</style>