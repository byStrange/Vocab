<template>
  <div class="container d-center">
    <Nav
      @showList="data_switched = 'on'"
      :data_switched="data_switched"
      @showTopics="showWord = false"
      :showButtons="true"
    />
    <Box
      :showWord="showWord"
      :unknownWords="unknownWords"
      @changeShowWord="changeShowWord($data)"
      @startTest="startTest($event)"
      :wordFromChoosenTopic="word"
      :topics="topics"
      :linky="false"
      :topicName="choosenTopic?.name"
    />
    <Panel
    v-if="showWord"
      @nextBtnClick="nextWord"
      @showBtnClick="makeWordReversed"
      :buttonName="buttonName"
    />
    <List
      :data_switched="data_switched"
      @closeListModal="closeListModal"
      :topics="topics"
    />
  </div>
</template>
  
  <script>
import Nav from "@/components/Main/Nav.vue";
import Box from "@/components/Main/Box.vue";
import List from "@/components/Main/List.vue";
import Panel from "@/components/Main/Panel.vue";

export default {
  data() {
    return {
      data_switched: "off",
      showWord: false,
      choosenTopic: null,
      word: null,
      fullWord: null,
      unknownWords: [],
      currentIndex: 0,
      buttonName: "Next", 
    };
  },
  computed: {
    topics() {
      return this.$store.state.topics;
    },
  },
  methods: {
    changeShowWord(value) {
      this.showWord = value;
    },
    startTest($event) {
      this.currentIndex = 0;
      this.choosenTopic = $event;
      this.fullWord = this.choosenTopic.words[this.currentIndex];
      this.word = this.fullWord["translation"];
    },
    nextWord() {
      if (this.choosenTopic.words.length - 1 == this.currentIndex) {
        this.currentIndex = 0;
        this.buttonName = "Restart";
        return;
      } else this.buttonName = "Next";
      this.fullWord = this.choosenTopic.words[this.currentIndex];
      this.currentIndex += 1;
      this.word = this.fullWord["translation"];
    },
    makeWordReversed() {
      if (!this.unknownWords.includes(this.fullWord)) {
        this.unknownWords.push(this.fullWord);
      }
      this.word =
        this.fullWord["translation"] === this.word
          ? this.fullWord["word"]
          : this.fullWord["translation"];
    },
    closeListModal() {
      this.data_switched = "off";
    },
  },
  mounted() {},
  name: "Main",
  components: {
    Nav,
    Box,
    List,
    Panel,
  },
};
</script>
  