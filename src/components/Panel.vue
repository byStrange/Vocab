<template>
  <div class="panel">
    <button class="btn secondary" title="Show answer" @click="showBtnClick">Show</button>
    <button class="btn" title="Next word" @click="nextBtnClick">Next</button>
  </div>
</template>


<script>
export default {
  name: "Nav",
  methods: {
    nextBtnClick() {
      this.$emit("nextBtnClick");
    },
    showBtnClick() {
      this.$emit("showBtnClick");
    },
  },
};
</script>