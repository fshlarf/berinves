<template>
  <div>
    <!-- Navigation -->
    <Navigation/>
    <!-- Content -->
    <div class="container content">
      <!-- Content -->
      <nuxt/>
    </div>
    <!-- Footer -->
    <!-- <div class="footer">
      Copyright here
    </div> -->
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Navigation,
  }
}
</script>