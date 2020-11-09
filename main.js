Vue.component("my-menu", {
  template: `
  <nav class="menu">
    <ul>
      <li v-for=" opc in options">{{ opc }}</li>
    </ul>
  </nav>
  `,
  data() {
    return {
      options: [
        "¿QUÉ ES EL 5G?",
        "COMO FUNCIONA",
        "CARACTERÍSTICAS",
        "VENTAJAS",
        "DESVANTAJAS",
        "5G EN MÉXICO",
        "¿MI TELÉFONO SOPORTARÁ 5G?",
      ],
      title: "",
      desciption: "",
    };
  },
  methods: {},
});
