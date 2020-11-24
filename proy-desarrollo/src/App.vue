<template>
  <div id="app">
    <header>
      <img src="../5G/banner.png" alt="banner" class="banner" />
    </header>
    <myMenu />
    <!-- <cards /> -->
    <router-view />
  </div>
</template>
<script>
//import cards from "./components/cards.vue";
import myMenu from "./components/my-menu.vue";
export default {
  components: {
    //cards,
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
  font-size: 96;
}

.menu {
  padding: 20px 0px 0px 0px;
  background-color: #88b85a;
  width: 300px;
  height: 600px;
  float: left;
}

li {
  list-style: none;
  margin: 55px 0 0 5px;
}

.banner {
  max-width: 1360px;
  width: 100%;
}

.card {
  width: auto;
  overflow: hidden;
}

.my-card {
  margin: 30px 0px 0px 60px;
}

.title-cont {
  color: #4f9c7a;
  text-align: center;
}

.title {
  color: #88b85a;
}

.home {
  text-align: center;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
                                                   
#nav {
  padding: 30px;
}
                                                    
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
                                                  
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
