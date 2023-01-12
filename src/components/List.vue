<template>
  <div class="list" ref="list" :data-switched="data_switched">
    <div class="close d-center" @click="close">
      <span>&times;</span>
    </div>
    <ul v-for="i in topics" :key="i.id">
      <template v-if="i.choosen">
        <li v-for="w in i.words" :key="w"><span>{{ w.word  }}</span> - <span>{{ w.translation }}</span></li>
      </template>
    </ul>
  </div>
</template>

<script>
import { data } from "@/composables/getData.js";

export default {
  data() {
    return {
      topics: data,
    };
  },
  methods: {
    close() {
        this.$emit("closeListModal")
    },
  },
  props: {
    data_switched: {
      type: String,
    },
  },
  name: "List",
};
</script>