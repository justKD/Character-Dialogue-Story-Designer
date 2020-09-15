<template>
  <div class="options-section" id="left-options-section">

    <OptionsHeader :title="title" />
    <OptionsTextArea :side="side"/>
    <OptionsImageSelect :side="side" :triangleIcon="triangleIcon" :options="options.images"/>

    <div class="option-container-group" id="left-options-group">
      <OptionsPositionSelect :side="side" :triangleIcon="triangleIcon" :options="options.leftPosition"/>
      <OptionsAnimationSelect :side="side" :triangleIcon="triangleIcon" :options="options.animations"/>
    </div>

  </div>
</template>

<script>
import OptionsHeader from "./options/OptionsHeader"
import OptionsTextArea from "./options/OptionsTextArea"
import OptionsImageSelect from "./options/OptionsImageSelect"
import OptionsPositionSelect from "./options/OptionsPositionSelect"
import OptionsAnimationSelect from "./options/OptionsAnimationSelect"

export default {
  name: "LeftOptions",
  components: {
    OptionsHeader,
    OptionsTextArea,
    OptionsImageSelect,
    OptionsPositionSelect,
    OptionsAnimationSelect,
  },
  props: {
    triangleIcon: String,
    options: Object,
  },
  data() {
    return {
      title: "Left",
      side: "left",
    };
  },
};
</script>
