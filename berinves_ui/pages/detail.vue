<template>
  <div class="mt-4">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ user.title }}</h5>
                <p class="card-text">{{ user.idea }}</p>
            <button type="submit" class="btn btn-primary btn-sm"> Join </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuexPersistence from 'vuex-persistedstate' 

export default {
    layout: 'navbar',
    data () {
        return {
        }
    },
    computed: {
        user () { 
            return this.$store.state.userIdea
        },
    }
}
</script>

<style>

.card {
    width: 600px;
}

.img-fluid {
    object-fit: cover;
}

@media (min-width: 768px) {  
    .col-8 {
      width: 100px;
    }
}

</style>