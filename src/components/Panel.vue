<template>
  <div class="panel">
    <button class="btn secondary" title="Show answer" @click="showBtnClick">Show</button>
    <button class="btn" title="Next word" @click="nextBtnClick">{{ buttonName }}</button>
  </div>
</template>


<script>
export default {
  props: ['buttonName'],
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