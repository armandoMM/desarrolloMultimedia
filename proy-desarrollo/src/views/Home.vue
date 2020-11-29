<template>
  <cards>
    <template v-slot:Cards>
      <div class="card my-card">
        <section>
          <h1 class="title-cont">BIENVENIDOS</h1>
          <p>
            En esta página encontrarás todo lo que necesitas saber acerca de la
            red 5G.
          </p>
          <img src="../assets/images.jpg" alt="5G" />
          <p>
            Además de información tenemos audios y videos complementarios para
            que puedas entender de forma clara a la red 5G
          </p>
          <p>
            Te suguiero que sigas el orden en el que aparecen los temas en el
            menú, para que puedas entender todo lo que sigue. Si ya tienes
            conocimientos acerca del 5G, puedes saltarte directamente los temas
            que te interesan.
          </p>
          <h3>SIN NADAMÁS QUE DECIR QUE TENGAS UN BUEN VIAJE INTERNAUTA.</h3>
        </section>
      </div>
    </template>
  </cards>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import cards from "../components/cards.vue";
export default {
  name: "Home",
  components: {
    cards,
    //HelloWorld
  },
};
</script>
