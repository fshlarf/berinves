<template>
  <div>
    <!-- Navigation -->
    <Navigationback/>
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
import Navigationback from '~/components/Navigationback.vue'
export default {
  components: {
    Navigationback,
  }
}
</script>