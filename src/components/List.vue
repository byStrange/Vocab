<template>
  <div class="list" ref="list" :data-switched="data_switched">
    <ul v-for="i in topics" :key="i.id">
      <template v-if="i.choosen">
        <li v-for="w in i.words" :key="w"><span>{{ w[0]  }}</span> - <span>{{ w[1] }}</span></li>
      </template>
    </ul>
  </div>
</template>

<script>
import { data } from '@/data.js'
export default {
  data() {
    return {
      topics: data,
    };
  },
  props: ["data_switched"],
  name: "List",
};
</script>