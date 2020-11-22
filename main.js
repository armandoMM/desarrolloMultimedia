Vue.component("my-menu", {
  template: `
  <nav class="menu">
    <ul>
      <li v-for=" opc in options" v-model="option"><a href="">{{ opc }}</a></li>
    </ul>
  </nav>
  `,
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
      title: "",
    };
  },
  methods: {},
});
