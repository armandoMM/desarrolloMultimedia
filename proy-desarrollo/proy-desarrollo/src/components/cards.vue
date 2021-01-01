<template>
  <section class="card">
    <article class="my-card">
      <slot name="Cards"> </slot>
    </article>
  </section>
</template>

<script>
export default {
  name: "Cards",
  props: {},
  data() {
    return {
      title: "¿QUÉ ES EL 5G?",
      desciption: "mi descripcioin sobre el tema que se esta viendo",
    };
  },
};
</script>
