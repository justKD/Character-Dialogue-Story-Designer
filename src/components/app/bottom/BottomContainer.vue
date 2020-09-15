<template>
  <div class="bottom-container">
    <CardContainer v-bind:cards="cards"/>
    <OptionsContainer/>
  </div>
</template>

<script>
import CardContainer from "./cards/CardContainer";
import OptionsContainer from "./options/OptionsContainer";
export default {
  name: "BottomContainer",
  components: {
    CardContainer,
    OptionsContainer
  },
  props: {
    cards: Array,
  },
};
</script>