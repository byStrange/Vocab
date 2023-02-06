import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const store = createStore({
  state() {
    return {
      topics: null,
      isLoaded: false,
      access: {
        BIN_ID: "63d16138ace6f33a22c7d290",
        API_KEY: "$2b$10$WprOL5YhSf4LIiTxpgl6J.Oe.0GpRkAONcKwvXZdTKgp81wEBtGAe",
      },
    };
  },
  mutations: {
    loadData(state) {
      var data = [];

      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          data = JSON.parse(req.responseText);
          state.topics = data["record"];
          state.isLoaded = true;
        }
      };

      req.open(
        "GET",
        `https://api.jsonbin.io/v3/b/${state.access.BIN_ID}/latest`,
        true
      );
      req.setRequestHeader("X-Master-Key", state.access.API_KEY);
      req.send();
    },
    addWord(state, payload) {
      let topic = state.topics.find((topic) => topic.id === payload.topicId);
      topic.words.push(payload.newWord);
      this.commit("saveData");
    },
    addTopic(state, payload) {
      state.topics.push(payload.newTopic);
      this.commit("saveData");
    },
    saveData(state) {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
        }
      };

      req.open(
        "PUT",
        `https://api.jsonbin.io/v3/b/${state.access.BIN_ID}`,
        true
      );
      req.setRequestHeader("X-Master-Key", state.access.API_KEY);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(JSON.stringify(state.topics));
    }
  },
});
store.commit("loadData");

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
