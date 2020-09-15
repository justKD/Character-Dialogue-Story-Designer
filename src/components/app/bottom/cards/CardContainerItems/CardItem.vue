<template>
  <!-- card -->
  <div
    tabindex="0"
    class="card"
    :style="`background-image: url(${cardBackgroundImage})`"
    :id="card.id"
  >
    <div class="card-inner">
      <div class="card-text-container">
        <div class="card-text-line">
          <div class="card-text">{{ card.left.text }}</div>
        </div>
        <div class="card-text-line">
          <div class="card-text right">{{ card.right.text }}</div>
        </div>
      </div>
    </div>
    <div class="card-inner">
      <div :class="card.left.position">
        <img :src="card.left.image" class="card-image">
      </div>
      <div :class="card.right.position">
        <img :src="card.right.image" class="card-image">
      </div>
    </div>
  </div>
</template>

<script>
import { assets } from "/src/js/assets/assets";
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
  data() {
    return {
      cardBackgroundImage: assets.backgrounds.cardBackground,
    }
  },
};
</script>
