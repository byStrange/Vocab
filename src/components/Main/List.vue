<template>
  <div class="list" ref="list" :data-switched="data_switched">
    <div class="close d-center" @click="close">
      <span>&times;</span>
    </div>
    <template v-for="i in topics" :key="i.id">
      <ul v-if="i.choosen">
        <li
          v-for="w in i.words"
          :key="w"
          @click="toggleDetail($event)"
          :ref="'word' + w"
        >
          <div class="word">
            <span style="font-weight: bold">{{ w.word }}</span> -
            <span>{{ w.translation }}</span>
          </div>
          <div class="details closed">
            <i v-if="w?.details?.explanation">
              {{ w.details.explanation }}
            </i>
            <span v-if="w?.details?.example">
              {{ w.details.example }}
            </span>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("closeListModal");
    },
    toggleDetail($event) {
      $event.currentTarget.querySelector(".details").classList.toggle("closed");
    },
  },
  props: ["topics", "data_switched"],
  name: "List",
};
</script>