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
      <span
        style="
          color: #fff;
          padding: 10px;
          font-size: 20px;
          display: inline-block;
        "
        >Add Word to <b>{{ currentTopic.name }}</b></span
      >
      <div class="add">
        <div class="field">
          <input
            class="form-input"
            type="text"
            placeholder="Word"
            v-model="data.word"
          />
          <input
            class="form-input"
            type="text"
            placeholder="Translation"
            v-model="data.translation"
          />
        </div>
        <textarea
          class="form-input"
          type="text"
          placeholder="Example"
          v-model="data.example"
        />
        <textarea
          class="form-input"
          type="text"
          placeholder="Explanation"
          v-model="data.explanation"
        />
        <div class="d-flex g-1 mb-1">
          <button class="btn secondary" @click="add">Add</button>
          <button
            class="btn danger"
            title="delete this topic"
            @click="deleteTopic"
          >
            Delete this topic
          </button>
        </div>
      </div>
      <details>
        <summary>Words</summary>
        <template v-for="word in currentTopic.words" :key="word">
          <span class="word d-flex jc-sb">
            <span>{{ word.word }} - {{ word.translation }}</span>
            <button class="mini danger btn" @click="deleteWord(word)">
              Del
            </button></span
          >
        </template>
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
  created() {
    this.topics = this.$store.state.topics;
    this.currentTopic = this.topics.find(
      (topic) => topic.id === this.$route.params.topicId
    );
  },
  methods: {
    add() {
      this.$store.commit("addWord", {
        topicId: this.$route.params.topicId,
        newWord: {
          word: this.data.word,
          translation: this.data.translation,
          details: {
            example: this.data.example,
            explanation: this.data.explanation,
          },
        },
      });
      this.data = {
        word: "",
        translation: "",
        example: "",
        explanation: "",
      };
    },
    deleteTopic() {
      this.$store.commit("deleteTopic", {
        topicId: this.$route.params.topicId,
      });
      this.$router.push("/add");
    },
    deleteWord(word) {
      this.$store.commit("deleteWord", {
        topicId: this.$route.params.topicId,
        word,
      });
    },
  },
};
</script>