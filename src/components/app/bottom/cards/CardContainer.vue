<template>
  <div class="card-container" id="card-container">
    <!-- <div class="fade-overlay card-fade"></div> -->
    <div class="card-container-inner" id="card-container-inner">
      <transition-group name="card-list-transitions">
        <CardItem v-for="card in cards" v-bind:card="card" v-bind:key="card.id"/>
      </transition-group>

      <div class="card-spacer"></div>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardContainerItems/CardItem";

export default {
  name: "CardContainer",
  components: {
    CardItem
  },
  props: {
    cards: Array,
  }
};
</script>
