Vue.component("cards", {
  template: `
    <section class="card">
      <article>
        <h1>
        {{ title }}
        </h1>
        <p>
        {{ desciption }}
        </p>
      </article>
    </section>
  `,
  data() {
    return {
      title: "¿QUÉ ES EL 5G?",
      desciption: "mi descripcioin sobre el tema que se esta viendo",
    };
  },
  methods: {},
});
