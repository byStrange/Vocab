<template>
  <div class="panel">
    <slot></slot>
    <button class="btn" @click="showTopics" v-if="showButtons">topics</button>
    <button class="btn" @click="showList" v-if="showButtons">List</button>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    showButtons: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    showList() {
      this.$emit("showList");
    },
    showTopics() {
      this.$emit("showTopics");
    },
  },
};
</script>