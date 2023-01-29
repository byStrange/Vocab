<template>
  <div class="container d-center">
    <div
      class="box"
      style="
        flex-direction: column;
        overflow: auto;
        padding: 10px;
        min-height: 0;
      "
    >
      <details>
        <summary>Words</summary>
        <template v-for="word in currentTopic.words" :key="word">
          <span class="word"> {{ word.word }} - {{ word.translation }} </span>
        </template>
      </details>
      <details>
        <summary>Add Word</summary>
        <div class="add">
          <div class="field">
            <input type="text" placeholder="Word" v-model="data.word" />
            <input
              type="text"
              placeholder="Translation"
              v-model="data.translation"
            />
          </div>
          <textarea type="text" placeholder="Example" v-model="data.example" />
          <textarea
            type="text"
            placeholder="Explanation"
            v-model="data.explanation"
          />
          <button class="btn secondary" @click="add">Add</button>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  data() {
    return {
      currentTopic: null,
      data: {
        word: "",
        translation: "",
        example: "",
        explanation: "",
      },
    };
  },
  computed: {
    topics() {
      return this.$store.state.topics;
    },
  },
  watch: {
    topics() {
      this.currentTopic = this.topics.find(
        (topic) => topic.id === this.$route.params.topicId
      );
    },
  },
  methods: {
    add() {
      this.$store.commit("addWord", {
        topicId: this.$route.params.topicId,
        word: this.data.word,
        translation: this.data.translation,
        example: this.data.example,
        explanation: this.data.explanation,
      });
      this.data = {
        word: "",
        translation: "",
        example: "",
        explanation: "",
      };
    }
  },
};
</script>