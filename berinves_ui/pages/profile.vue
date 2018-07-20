<template>
    <div class="mt-3" align="center">
        <div class="col-md-6">
            <div class="card h-profile">
                <!-- <img class="img-profile" src="https://image.freepik.com/free-photo/abstract-urban-night-light-bokeh-defocused-background_1421-468.jpg" alt="">
                
                <div class="card-body" align="center" >
                    <br>
                    <h5></h5>
                    <h6></h6>
                    
                </div> -->
                
                <img class="img-profile" src="https://image.freepik.com/free-psd/top-view-workspace-mockup-with-tablet_23-2147792345.jpg" alt="John" style="width:100%">
                <br>
                <div >
                    <h4 class="col-md-4 header-4" align="left"><b>{{user.firstname}}</b></h4>
                    <div class="col-md-12" align="right">
                        <i class="icon-profile fa fa-user-circle-o img-circle"></i>
                    </div>
                </div>
                <p class="title">Pekerjaan</p>
                <p @click="gotoEdit" style="color: dodgerblue">edit profile</p>
                <p>{{user.email}}</p>
                <a href="#"><i class="fa fa-whatsapp"> 0822222222</i></a> 
                <br>
                <!-- <p><button>Contact</button></p> -->
            </div>
            <div v-show="user.title" class="card" style="margin-top: 15px;">
               <div class="card-body row" align="left">
                    <div class="col-2 ">
                        <i class="fa fa-commenting-o icon-idea" style="color: lightseagreen; font-size: 25px"></i>
                    </div>
                    <div class="span-idea col-9" style="color: dodgerblue">
                        {{user.title}}
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
    layout: 'navbar',
        data () {
            return {
        }
    },
    computed: {
        user () { 
            return this.$store.state.user 
        }
    },
    methods: {
        gotoEdit() {
            this.$router.replace({ path: "/editprofile" });
        }
    }
}
</script>


<style lang="scss" scoped>


.icon-profile {
    position: relative;
    color: black;
    background: white;
    padding:10px;
    border-radius: 50%;
    margin-right: 25px;
    font-size: 100px
}

.icon-idea {
    background: rgb(243, 241, 241);
    padding: 10px;
    border-radius: 50%;
}

.img-profile {
    position: absolute;
    object-fit: cover;
    z-index: -1;
    max-height: 30%;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    text-align: center;
}

.title {
    color: grey;
    font-size: 18px;
}


a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}

button:hover, a:hover {
    opacity: 0.7;
}


.header-4 {
    position: fixed;
    margin-top: 30px;
    margin-left: 100px;
    color: white
}

.span-idea {
    margin-left: 20px;
}

@media (max-width:800px) {
    .header-4 {
        position: fixed;
        margin-top: 20px;
        margin-left: 50px;
    }
}


@media (max-width:800px) {
    .icon-profile {
        position: relative;
        color: black;
        background: white;
        padding:3px;
        border-radius: 50%;
        margin-top: 15px;
        margin-right: 10px;
        font-size: 60px
    }
}

@media (max-width:800px) {
    .span-idea {
        margin-left: 5px;
    }

}

</style>

