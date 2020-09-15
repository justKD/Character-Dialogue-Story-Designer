<template>
  <div class="options-container">
    <!-- <div class="fade-overlay options-fade"></div> -->
    <div class="options-container-inner">

      <div class="options-form-container">

        <form class="options-form" id="options-form" name="options-form" data-name="options-form">
          
          <LeftOptions :triangleIcon="triangleIcon" :options="options"/>
          <RightOptions :triangleIcon="triangleIcon" :options="options"/>
        
        </form>

        <!-- end .options-form-container -->
      </div>

      <!-- end .options-container-inner -->
    </div>

    <!-- end .options-container -->
  </div>
</template>

<script>
import { constant } from "/src/js/constant";
import { assets } from "/src/js/assets/assets";

import LeftOptions from "./OptionsContainerComponents/LeftOptions"
import RightOptions from "./OptionsContainerComponents/RightOptions"

export default {
  name: "OptionsContainer",
  components: {
    LeftOptions,
    RightOptions
  },
  data() {
    return {
      triangleIcon: assets.icons.triangleIcon,
      options: {
        images: constant.imageOptions,
        scenarios: constant.scenarioNames,
        types: constant.scenarioTypes,
        music: constant.musicOptions,
        leftPosition: constant.leftPositionOptions,
        rightPosition: constant.rightPositionOptions,
        animations: constant.animationOptions
      }
    };
  },
};
</script>
