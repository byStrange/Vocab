<template>
  <div class="container d-center">
    <Nav
      @showList="data_switched = 'on'"
      :data_switched="data_switched"
      @showTopics="showWord = false"
    />
    <Box
      :showWord="showWord"
      :unknownWords="unknownWords"
      @changeShowWord="changeShowWord($data)"
      @startTest="startTest($event)"
      :wordFromChoosenTopic="word"
    />
    <Panel
      @nextBtnClick="nextWord"
      @showBtnClick="makeWordReversed"
      :buttonName="buttonName"
    />
    <List :data_switched="data_switched" @closeListModal="closeListModal" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Box from "./components/Box.vue";
import List from "./components/List.vue";
import Panel from "./components/Panel.vue";
import { getData } from "@/composables/getData.js";

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
      console.log(this.currentIndex);
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
  name: "App",
  components: {
    Nav,
    Box,
    List,
    Panel,
  },
};
</script>
