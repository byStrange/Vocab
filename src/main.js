import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const store = createStore({
  state() {
    return {
      topics: null,
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
          state.topics = data["record"]["topics"];
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
  },
});
store.commit("loadData");

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
