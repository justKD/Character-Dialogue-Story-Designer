<template>
  <div class="eltemplate">
    <ExampleContainer
      :prop="false"
    />
  </div>
</template>

<script>
import ExampleContainer from "";

export default {
  name: "",

  components: {
    ExampleContainer,
  },

  props: {
  },

  methods: {
  },

  data() {
    return {
    };
  },

  /** Vue Lifecycle Hooks */

  created() {
    /** Before DOM ready */
  },

  mounted() {
    /** After Dom ready */
  },

  beforeUpdate() {
    /** Before a reactive update is processed */
  },

  updated() {
    /** After a reactive update is processed */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./scss/app.scss";
</style>