<template>
  <!-- <Preloader/> -->
  <!-- <HelpMenu v-bind:focus="()=>{}"/> -->
  <!-- <SavedStateMenu
      v-bind:savedStates="{}"
      v-bind:focus="()=>{}"
      v-bind:handleSave="()=>{}"
      v-bind:handleLoad="()=>{}"
      v-bind:handleDelete="()=>{}"
      v-bind:checkRename="()=>{}"
  />-->
  <!-- <ExportMenu
      v-bind:handleDownload="()=>{}"
      v-bind:handleUpload="()=>{}"
      v-bind:handleExport="()=>{}"
      v-bind:options="{
        scenarios: {}
      }"
  />-->
  <div class="main-container">
    <TopContainer v-bind:thumbnails="thumbnails"/>
    <BottomContainer v-bind:cards="cards"/>
  </div>
</template>

<script>
import Preloader from "./preloader/Preloader";

import TopContainer from "./top/TopContainer";
import BottomContainer from "./bottom/BottomContainer";

import HelpMenu from "./menus/HelpMenu";
import SavedStateMenu from "./menus/SavedStateMenu";
import ExportMenu from "./menus/ExportMenu";

export default {
  name: "MainContainer",
  components: {
    Preloader,
    TopContainer,
    BottomContainer,
    HelpMenu,
    SavedStateMenu,
    ExportMenu,
  },
  props: {
    focus: Boolean,
    handleSave: Function,
    handleLoad: Function,
    checkRename: Function,
    handleDelete: Function,
    savedStates: Object,
    thumbnails: Array,
    cards: Array,
  },
};
</script>
