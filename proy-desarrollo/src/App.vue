<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  /* background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2380e573' fill-opacity='0.52'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E"); */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2324d1ae' fill-opacity='0.16'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  font-family: "Exo 2", sans-serif;
}

.menu {
  padding: 20px 0px 0px 0px;
  background-color: #88b85a;
  font-size: 96;
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
  font-size: 96;
  width: auto;
  overflow: hidden;
}

.my-card {
  margin: 30px 0px 0px 60px;
}

.title-cont {
  color: #4f9c7a;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  font-size: 184;
}

.title {
  color: #88b85a;
}
</style>
