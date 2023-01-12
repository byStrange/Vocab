<template>
  <div class="box d-center">
    <div class="content" ref="word" v-if="showWord">
      <span> {{ wordFromChoosenTopic }}</span>
    </div>
    <div class="topics d-center" ref="topics" v-if="!showWord">
      <template v-for="topic in topics" :key="topic.id">
        <div
          class="topic d-center"
          :class="{ choosen: topic.choosen }"
          @click="selectTopic(topic.id)"
          :data-id="topic.id"
        >
          <span>{{ topic.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { data } from "@/composables/getData.js";

export default {
  name: "Box",
  props: ["showWord", "wordFromChoosenTopic"],
  data() {
    return {
      topics: data
    };
  },
  methods: {
    selectTopic(e) {
      const topicId = e;
      const topic = this.topics.find((topic) => topic.id === topicId);
      topic.choosen = true;

      this.topics.forEach((topic) => {
        if (topic.id !== topicId) {
          topic.choosen = false;
        }
      });

      this.$emit("changeShowWord", true);
      this.$emit("startTest", topic);
      console.log(topic)
    },
  },
};
</script>