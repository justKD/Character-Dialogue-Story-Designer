<template>
  <div class="thumbnail-container">
    <!-- Thumbnail Track -->
    <div class="thumbnail-container-inner" id="thumbnail-container-inner">
      <!-- Add Button -->
      <div id="thumbnail-add-button" class="thumbnail-add-container">
        <div class="thumbnail-add">
          <div>+</div>
        </div>
      </div>

      <!-- Thumbnail Section -->
      <div class="thumbnail-section">
        <div class="thumbnail-section-inner">
          <transition-group
            name="thumbnail-list-transitions"
            tag="div"
            class="thumbnail-section-transition-wrapper"
          >
            <ThumbnailItem
              v-for="thumbnail in thumbnails"
              v-bind:thumbnail="thumbnail"
              v-bind:key="thumbnail.id"
            />
          </transition-group>
          <div class="thumbnail-spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailItem from "./ThumbnailContainerComponents/ThumbnailItem"

export default {
  name: "ThumbnailContainer",
  components: {
    ThumbnailItem,
  },
  props: {
    thumbnails: Array
  }
};
</script>
