<template>
  <div class="navigators">
    <div class="nav to-left d-center" @click="this.$router.back()">
      <span></span>
    </div>
    <div class="nav to-right d-center" @click="this.$router.forward()">
      <span></span>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>