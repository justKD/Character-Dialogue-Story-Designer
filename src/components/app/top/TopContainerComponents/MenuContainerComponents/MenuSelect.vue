<template>
  <!-- menu-select-container -->
  <div class="menu-container-inner-inner">
    <div class="menu-item group-left">
      <div class="menu-select-container">
        <div class="menu-select-image-container">
          <img class="menu-select-image" :src="triangleIcon">
        </div>
        <select class="menu-select" id="scenario-name-select" name data-name>
          <option v-for="option in options.scenarios" v-bind:key="option.text">{{ option.text }}</option>
        </select>
      </div>
    </div>
    <div class="menu-item group-left middle">
      <div class="menu-select-container">
        <div class="menu-select-image-container">
          <img class="menu-select-image" :src="triangleIcon">
        </div>
        <select class="menu-select" id="scenario-type-select" name data-name>
          <option v-for="option in options.types" v-bind:key="option.text">{{ option.text }}</option>
        </select>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-select-container">
        <div class="menu-select-image-container">
          <img class="menu-select-image" :src="triangleIcon">
        </div>
        <select class="menu-select" id="scenario-music-select" name data-name>
          <option v-for="option in options.music" v-bind:key="option.text">{{ option.text }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { constant } from "/src/js/constant";
import { assets } from "/src/js/assets/assets"

export default {
  name: "MenuSelect",
  data() {
    return {
      triangleIcon: assets.icons.triangleIcon,
      options: {
        scenarios: constant.scenarioNames,
        types: constant.scenarioTypes,
        music: constant.musicOptions
      }
    };
  }
};
</script>
