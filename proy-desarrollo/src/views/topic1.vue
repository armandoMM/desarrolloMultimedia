<template>
  <cards>
    <template v-slot:Cards>
      <div class="card my-card">
        <section>
          <h1 class="title-cont">¿QUÉ ES UNA RED 5G?</h1>
          <p></p>
          <img
            src="../assets/dispositivos-5g.jpg"
            alt="dispositivos 5G"
            class="image"
          />
        </section>
      </div>
    </template>
  </cards>
</template>

<script>
import cards from "../components/cards.vue";
export default {
  name: "topicOne",
  components: {
    cards,
  },
};
</script>
<style scoped>
.image {
  width: 350px;
  height: 280px;
}
</style>
