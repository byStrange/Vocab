<template>
  <div class="container d-center">
    <Nav>
      <span class="title">Choose topic</span>
    </Nav>
    <Box :topics="topics" :linky="true">
        <div class="topic d-center" style="font-size: 4rem; flex-direction: column; gap: 5px" @click="showAddTopicButton = true">
          <span v-if="!showAddTopicButton">+</span>
          <template v-else>
            <input class="form-input mini" type="text" placeholder="topic name" v-model="topicName">
            <button class="btn" @click="createTopic">save</button>
          </template>
        </div>
    </Box>

  </div>
</template>

<script>
import Box from "@/components/Main/Box.vue";
import Nav from "@/components/Main/Nav.vue";

export default {
  name: "Add",
  data() {
    return {
      access: {
        BIN_ID: "63d16138ace6f33a22c7d290",
        API_KEY: "$2b$10$WprOL5YhSf4LIiTxpgl6J.Oe.0GpRkAONcKwvXZdTKgp81wEBtGAe",
      },
      showAddTopicButton: false,
      topicName: null,
    };
  },
  computed: {
    topics() {
      return this.$store.state.topics;
    },
  },
  methods: {
    createTopic() {
      const topic = {
        name: this.topicName,
        id: String(this.topics.length + 1),
        words: [],
        choosen: false,
      };
      this.$store.commit("addTopic", { newTopic: topic });
      this.showAddTopicButton = false;
      this.topicName = null;
    },
  },
  components: {
    Box,
    Nav,
  },
};
</script>