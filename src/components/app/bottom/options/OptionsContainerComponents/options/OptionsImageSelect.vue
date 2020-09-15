<template>
  <div class="option-container">
    <label class="option-field-label" :for="forTarget">Image</label>
    <div class="option-select-container">
      <div class="option-select-image-container">
        <img
          class="option-select-image"
          :src="triangleIcon"
          >
      </div>
      <select
        class="option-select"
        :id="forTarget"
        :name="forTarget"
        :data-name="forTarget"
      >
        <option
          v-for="option in options"
          v-bind:key="option.text"
        >{{ option.value }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionsImageSelect",
  props: {
    side: String,
    triangleIcon: String,
    options: Array,
  },
  data() {
    return {
      forTarget: `option-${this.side}-image-select`,
    };
  },
};
</script>
