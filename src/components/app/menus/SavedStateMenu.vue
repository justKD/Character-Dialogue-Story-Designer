<template>
  <div class="popup-container" id="saved-state-popup">
    <div class="popup-container-inner" id="saved-state-popup-inner">
      <div class="popup-close-button" id="saved-state-close">
        <div>X</div>
      </div>

      <div v-on:click="focus" class="popup-content-container" id="popup-content-states">
        <div class="popup-content-header">
          <button
            class="popup-content-button popup-content-button-faded"
            id="save-state-button"
            v-on:click="handleSave"
          >Save</button>
          <button
            class="popup-content-button popup-content-button-faded"
            id="load-state-button"
            v-on:click="handleLoad"
          >Load</button>
          <button
            class="popup-content-button popup-content-button-faded"
            id="rename-state-button"
            v-on:click="checkRename"
          >Rename</button>
          <button
            class="popup-content-button popup-content-button-faded"
            id="delete-state-button"
            v-on:click="handleDelete"
          >Delete</button>
          <div></div>
        </div>

        <div class="popup-content-columns">
          <div class="popup-column left-column">
            <saved-state-slot-item
              v-for="state in savedStates.left"
              v-bind:state="state"
              v-bind:key="state.index"
            ></saved-state-slot-item>
          </div>

          <div class="popup-column right-column">
            <saved-state-slot-item
              v-for="state in savedStates.right"
              v-bind:state="state"
              v-bind:key="state.index"
            ></saved-state-slot-item>
          </div>
        </div>

        <div class="popup-content-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SavedStateMenu",
  props: {
    focus: Function,
    handleSave: Function,
    handleLoad: Function,
    checkRename: Function,
    handleDelete: Function,
    savedStates: Object
  }
};
</script>
