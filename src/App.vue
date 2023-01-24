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
    <Panel @nextBtnClick="nextWord" @showBtnClick="makeWordReversed" />
    <List :data_switched="data_switched" @closeListModal="closeListModal"/>
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
    };
  },
  methods: {
    changeShowWord(value) {
      this.showWord = value;
    },
    startTest($event) {
      this.choosenTopic = $event;
      this.fullWord = this.choosenTopic.words[this.currentIndex];
      this.word = this.fullWord['translation'];
    },
    nextWord() {
      if (!this.choosenTopic.words.length) {
        this.word = "THE END";
        return;
      }
      this.currentIndex+=1
      this.fullWord = this.choosenTopic.words[this.currentIndex];
      this.word = this.fullWord['translation'];
    },
    makeWordReversed() {
      if (!this.unknownWords.includes(this.fullWord)) {
        this.unknownWords.push(this.fullWord);
      }
      this.word =
        this.fullWord['translation'] === this.word ? this.fullWord['word'] : this.fullWord['translation'];
    },
    closeListModal() {
      this.data_switched = "off"
    }
  },
  mounted() {
    
  },
  name: "App",
  components: {
    Nav,
    Box,
    List,
    Panel,
  },
};
</script>
