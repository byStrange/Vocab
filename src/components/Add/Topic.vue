<template>
  <div class="container d-center">
    <div class="box d-center"></div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  created() {
    console.log(this.$route.params.topicId);
  },
};
</script>