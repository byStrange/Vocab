<template>
  <div class="box d-center">
    <div
      class="content"
      ref="word"
      v-if="showWord"
      data-current-topic-name="Hello topic"
    >
      <span> {{ wordFromChoosenTopic }}</span>
    </div>
    <div class="topics d-center" ref="topics" v-if="!showWord">
      <template v-if="isLoaded">
        <template v-for="topic in topics" :key="topic.id">
          <router-link
            v-if="linky"
            :to="{ name: 'Topic', params: { topicId: topic.id } }"
          >
            <div
              class="topic d-center"
              :class="{ choosen: topic.choosen }"
              @click="selectTopic(topic.id)"
              :data-id="topic.id"
            >
              <span>{{ topic.name }}</span>
            </div>
          </router-link>
          <div
            v-else
            class="topic d-center"
            :class="{ choosen: topic.choosen }"
            @click="selectTopic(topic.id)"
            :data-id="topic.id"
          >
            <span>{{ topic.name }}</span>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="loader">
          <div class="loader"></div>
        </div>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: [
    "showWord",
    "wordFromChoosenTopic",
    "unknownWords",
    "topics",
    "linky",
    "topicName",
  ],
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
    },
  },
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
  },
};
</script>