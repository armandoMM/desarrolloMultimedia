<template>
  <div id="app" topmargin="0">
    <header><img src="@/assets/img/banner.png" alt="" /></header>
    <myMenu />
    <cards>
      <template v-slot:Cards></template>
    </cards>
    <router-view />
  </div>
</template>
<script>
import cards from "./components/cards.vue";
import myMenu from "./components/my-menu.vue";
export default {
  components: {
    cards,
    myMenu,
  },
};
</script>
<style>
body {
  /* background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2380e573' fill-opacity='0.52'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E"); */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2324d1ae' fill-opacity='0.16'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  font-family: "Exo 2", sans-serif;
}

.mensaje {
  font-family: "Piedra", cursive;
  text-align: center;
}

.menu {
  padding: 10px 0px 0px 0px;
  background-color: #88b85a;
  font-size: 145%;
  width: 300px;
  height: 690px;
  float: left;
}

p {
  font-size: 110%;
}

li {
  list-style: none;
  margin: 50px 0 0 5px;
}

.routes {
  text-decoration: none;
  color: #3c3f3a;
}

.banner {
  max-width: 1360px;
  width: 100%;
}

.card {
  font-size: 96;
  width: auto;
  overflow: hidden;
}

.my-card {
  margin: 20px 60px 0px 60px;
}

.title-cont {
  color: #4f9c7a;
  text-align: center;
  font-size: 200%;
}

.image {
  border-radius: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  width: 140px;
  height: 75px;
  background-color: #4f9c7a;
  color: #ffffff;
}

.btn2 {
  position: relative;
  left: 500px;
}
</style>
