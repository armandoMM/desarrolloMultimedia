<template>
  <nav class="menu">
    <ul>
      <li><router-link class="routes" to="/">HOME</router-link></li>
      <li><router-link class="routes" to="/que-es">¿QUÉ ES?</router-link></li>
      <li>
        <router-link class="routes" to="/como-funciona">
          ¿CÓMO FUNCIONA?
        </router-link>
      </li>
      <li>
        <router-link class="routes" to="/caracteristicas"
          >CARACTERÍSTICAS</router-link
        >
      </li>
      <li>
        <router-link class="routes" to="/ventajas">VENTAJAS</router-link>
      </li>
      <li>
        <router-link class="routes" to="/desventajas">DESVENTAJAS</router-link>
      </li>
      <li>
        <router-link class="routes" to="/5G-en-mexico"
          >5G EN MÉXICO</router-link
        >
      </li>
      <li>
        <router-link class="routes" to="/telefonos-con-soporte-5G"
          >¿MI TELÉFONO SOPORTARÁ 5G?</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "my-menu",
};
</script>
