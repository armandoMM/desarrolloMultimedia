<template>
  <cards>
    <template v-slot:Cards>
      <div class="card my-card">
        <section>
          <h1 class="title-cont">{{ title }}</h1>
          <p v-for="cont in content" v-bind:key="cont">{{ cont }}</p>
          <br />
          <img
            src="../assets/img/nuevosEquipos.png"
            alt="Mapa 5G México"
            class="image image-2"
            v-if="img == 1"
          />
          <img
            src="../assets/img/mapa5G.png"
            alt="Mapa 5G México"
            class="image image-2"
            v-if="img == 2"
          />
          <img
            src="../assets/img/publicidad2.jpg"
            alt="Publicidad 5G"
            class="image"
            v-if="img == 3"
          />
          <video
            src="../assets/videos/Desventajas.mp4"
            width="320"
            height="240"
            controls
            v-if="datas.pages[counter].video"
          ></video>
        </section>
        <button class="btn" @click="prevPage">
          <i class="fas fa-3x fa-arrow-left"></i>
        </button>
        <button class="btn btn2" @click="nextPage">
          <i class="fas fa-3x fa-arrow-right"></i>
        </button>
      </div>
    </template>
  </cards>
</template>

<script>
import axios from "axios";
import cards from "../components/cards.vue";
import json from "../assets/json/fifthTopic.json";
export default {
  name: "topicFive",
  components: {
    cards,
  },
  data() {
    return {
      datas: json,
      title: null,
      content: null,
      counter: 0,
      img: 0,
      audio: null,
    };
  },
  mounted() {
    this.counter = 0;
    this.getContent();
  },
  methods: {
    getContent() {
      console.log(this.datas.pages[this.counter]);
      this.title = this.datas.pages[this.counter].title;
      this.content = this.datas.pages[this.counter].description;
      this.img = this.datas.pages[this.counter].imagen;
      this.audio = this.datas.pages[this.counter].audio;
    },
    nextPage() {
      if (this.counter < this.datas.pages.length - 1) {
        this.counter += 1;
      }
      this.getContent();
    },
    prevPage() {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        this.counter -= 1;
      }
      this.getContent();
    },
  },
};
</script>
<style scoped>
.image {
  width: 350px;
  height: 250px;
}
</style>
