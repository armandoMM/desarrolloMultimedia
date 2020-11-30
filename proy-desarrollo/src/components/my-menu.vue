<template>
  <nav class="menu">
    <ul>
      <li><router-link class="routes" to="/">HOME</router-link></li>
      <li><router-link class="routes" to="/que-es">¿QUÉ ES?</router-link></li>
      <li>¿CÓMO FUNCIONA?</li>
      <li>CARACTERÍSTICAS</li>
      <li>VENTAJAS</li>
      <li>DESVENTAJAS</li>
      <li>5G EN MÉXICO</li>
      <li>¿MI TELÉFONO SOPORTARÁ 5G?</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "my-menu",
};
</script>
