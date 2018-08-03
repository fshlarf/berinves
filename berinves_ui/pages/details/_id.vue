<template>
  <div class="mt-4 user">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card card-detail">
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

import axios from 'axios'
export default {
  layout: 'navbarback',
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`http://localhost:4000/userdata/${params.id}`)
      return {user: data}
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style>

.card.card-detail {
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