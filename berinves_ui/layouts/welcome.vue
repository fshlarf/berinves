<template>
  <div class="welcome">
 
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
export default {
  components: {
  }
}
</script>

<style>
body {
  overflow: hidden;
}
.welcome {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: whitesmoke;
  color: black;
  padding: 10px;
}
.welcome a {
  color: black;
}
</style>