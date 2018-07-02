<template>
    <nav class="navbar navbar-expand-lg">
        <!-- <div v-if="!$store.state.article.title" class="container"> -->
      <div class="container">
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
    </nav>
</template>

<script>
export default {
  methods : {
  //   goBack () {
  //       this.$store.commit('setArticle', {})
  //       this.$router.replace({ 'path' : '/' })
  //   },
    openAbout(){
        this.$router.replace({ 'path' : '/about' })
    },
    openHome(){
        this.$router.replace({ 'path' : '/home' })
    },
    openProfile(){
        this.$router.replace({ 'path' : '/profile' })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  span {
    font-size: 32px;
    
  }
}

.img-nav {
    width: 20px;
    margin-left: 10px;
    margin-right: -50px;
}

.navbar {
    background-color: lightseagreen;
}

.nav-link {
    color: white;
    margin-left:0;
}

// .nav-link.tech{
//     color: white;
//     text-align: left;
//     margin-left: -400px;
    
// }

// .nav-link.entertain{
//     color: white;
//     text-align: left;
//     margin-left: -440px;
    
// }

// .nav-link.about{
//     color: white;
//     text-align: left;
//     margin-left: -440px;
    
// }



// @media (max-width: 768px) {  
//     .nav-link.tech{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.entertain{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.about{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }
// }
// /* Large devices (desktops, 992px and up) */
// @media (max-width: 992px) { 
//     .nav-link.tech{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.entertain{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.about{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }
// }
 
// /* Extra large devices (large desktops, 1200px and up) */
// @media (max-width: 1200px) {  
//     .nav-link.tech{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.entertain{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }

//     .nav-link.about{
//         color: white;
//         text-align: left;
//         margin-left: 0;
        
//     }
// }

.navbar-toggler-icon {
    color:  white;
}



@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F0AD4E;
}
label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 25px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
    background-color: #F0AD4E;
    transition: all 1s ease 0.5s;
  }
  input{
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  i{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
      transition: all 0.3s ease;
    }
    i{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      -webkit-appearance:none
    } 
  }
}


</style>