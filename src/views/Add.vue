<template>
  <div class="container d-center">
    <Nav>
        gi
    </Nav>
    <Box :topics="topics"/>
  </div>
</template>

<script>
import Box from "@/components/Main/Box.vue";
import Nav from "@/components/Main/Nav.vue";

export default {
  name: "Add",
  data() {
    return {
      topics: null,
      access: {
        BIN_ID: "63d16138ace6f33a22c7d290",
        API_KEY: "$2b$10$WprOL5YhSf4LIiTxpgl6J.Oe.0GpRkAONcKwvXZdTKgp81wEBtGAe",
      },
    };
  },
  created() {
    var data = [];

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        data = JSON.parse(req.responseText);
        this.topics = data["record"]["topics"];
        console.log("Heloo")
      }
    };

    req.open(
      "GET",
      `https://api.jsonbin.io/v3/b/${this.access.BIN_ID}/latest`,
      true
    );
    req.setRequestHeader("X-Master-Key", this.access.API_KEY);
    req.send();
  },
  components: {
    Box,
    Nav,
  },
};
</script>