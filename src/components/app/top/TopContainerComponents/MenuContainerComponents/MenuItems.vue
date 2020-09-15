<template>
  <div :class="classes.container">
    <div :class="classes.menuItem" :id="ids.undo">
      <!-- undo -->
      <img :src="icons.undoIcon" :class="classes.buttonImage">
    </div>

    <div :class="classes.menuItem" :id="ids.redo">
      <!-- redo -->
      <img :src="icons.redoIcon" :class="classes.buttonImage">
    </div>

    <div :class="classes.menuItem" :id="ids.states">
      <!-- states -->
      <img :src="icons.savedStatesIcon" :class="classes.buttonImage">
    </div>

    <div :class="classes.menuItem" :id="ids.export">
      <!-- export -->
      <img :src="icons.exportIcon" :class="classes.buttonImage">
    </div>

    <div :class="classes.menuItem" :id="ids.help">
      <!-- help -->
      <img :src="icons.helpIcon" :class="classes.buttonImage">
    </div>
  </div>
</template>

<script>
import { assets } from "/src/js/assets/assets"

export default {
  name: "MenuItems",
  data() {
    return {
      classes: {
        container: "menu-container-inner-inner",
        menuItem: "menu-item button",
        buttonImage: "menu-button-image"
      },
      ids: {
        undo: "menu-undo",
        redo: "menu-redo",
        states: "menu-states",
        export: "menu-export",
        help: "menu-help"
      },
      icons: {
        undoIcon: assets.icons.undoIcon,
        redoIcon: assets.icons.redoIcon,
        savedStatesIcon: assets.icons.savedStatesIcon,
        exportIcon: assets.icons.exportIcon,
        helpIcon: assets.icons.helpIcon,
      },
    };
  }
};
</script>