<template>
  <router-view> </router-view>
</template>

<script>
import Main from "./views/Main.vue";
import Add from "./views/Add.vue";

export default {
  name: "App",
  components: {
    Main,
    Add,
  },
};
</script>