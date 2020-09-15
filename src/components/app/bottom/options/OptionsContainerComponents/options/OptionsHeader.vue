<template>
    <div class="options-section-heading-container">
      <div class="options-section-heading">{{ title }}</div>
      <div class="options-section-line"></div>
    </div>
</template>

<script>
export default {
  name: "OptionsHeader",
  props: {
    title: String,
  },
};
</script>
