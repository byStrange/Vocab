<template>
  <router-view>
      <Main />
  </router-view>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};

</script>