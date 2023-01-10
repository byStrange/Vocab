<template>
  <div class="list" ref="list" :data-switched="data_switched" @dblclick="close">
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
      this.data_switched = "off"
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