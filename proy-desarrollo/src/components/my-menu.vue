<template>
  <nav class="menu">
    <ul>
      <li v-for="opt in options" v-bind:key="opt">
        <a href="">{{ opt }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "my-menu",
  data() {
    return {
      options: [
        "¿QUÉ ES EL 5G?",
        "¿CÓMO FUNCIONA?",
        "CARACTERÍSTICAS",
        "VENTAJAS",
        "DESVENTAJAS",
        "5G EN MÉXICO",
        "¿MI TELÉFONO SOPORTARÁ 5G?",
      ],
    };
  },
};
</script>
