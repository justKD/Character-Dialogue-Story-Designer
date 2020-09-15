<template>
  <div class="option-container">
    <label class="option-field-label" :for="`option-${side}-text`">Text</label>
    <textarea
      class="option-text-field"
      :id="`option-${side}-text`"
      :name="`option-${side}-text`"
      placeholder="none"
      :data-name="`option-${side}-text`"
      maxlength
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "OptionsTextArea",
  props: {
    side: String,
  },
};
</script>
