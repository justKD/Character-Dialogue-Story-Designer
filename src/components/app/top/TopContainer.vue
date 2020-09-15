<template>
  <div class="top-container">
    <ThumbnailContainer v-bind:thumbnails="thumbnails"/>
    <MenuContainer/>
  </div>
</template>

<script>
import MenuContainer from "./TopContainerComponents/MenuContainer";
import ThumbnailContainer from "./TopContainerComponents/ThumbnailContainer";

export default {
  name: "TopContainer",
  components: {
    MenuContainer,
    ThumbnailContainer
  },
  props: {
    thumbnails: Array
  }
};
</script>
