<template>
  <!-- thumbnail-item -->
  <div class="ThumbnailItem">'
    <div tabindex="0" class="thumbnail" :id="thumbnail.id">
      <div class="card-inner">
        <div class="card-text-container thumbnail-text-container">
          <div class="card-text-line thumbnail-text-line">
            <div class="card-text thumbnail-text">{{ thumbnail.left.text }}</div>
          </div>
          <div class="card-text-line thumbnail-text-line">
            <div class="card-text thumbnail-text right">{{ thumbnail.right.text }}</div>
          </div>
        </div>
      </div>
      <div class="card-inner">
        <div :class="thumbnail.left.position">
          <img :src="thumbnail.left.image" class="card-image thumbnail-image">
        </div>
        <div :class="thumbnail.right.position">
          <img :src="thumbnail.right.image" class="card-image thumbnail-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailItem",
  props: {
    thumbnail: Object
  }
};
</script>