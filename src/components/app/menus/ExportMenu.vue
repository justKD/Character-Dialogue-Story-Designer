<template>
  <div class="popup-container" id="import-export-popup">
    <div class="popup-container-inner" id="import-export-popup-inner">
      <div class="popup-close-button" id="import-export-close">
        <div>X</div>
      </div>

      <div class="popup-content-container" id="popup-content-export">
        <div class="popup-content-header">
          <button
            class="popup-content-button"
            id="download-button"
            v-on:click="handleDownload"
          >Download</button>
          <button class="popup-content-button" id="upload-button" v-on:click="handleUpload">Upload</button>
          <button class="popup-content-button" id="export-button" v-on:click="handleExport">Export</button>
        </div>
      </div>
    </div>

    <div class="popup-container-inner" id="popup-content-export-options">
      <div class="export-options-inner">
        <div class="popup-content-header">
          <div class="export-scenario-label"></div>
          <div class="export-select-group">
            <div class="export-select-container left">Intro</div>
            <div class="export-select-container">Outro</div>
          </div>
        </div>

        <div class="export-option-slot" id="home-scenario-group">
          <div class="export-scenario-label">
            <div>Home</div>
          </div>

          <ExportSelect v-bind:options="options"/>
        </div>

        <div class="export-option-slot" id="school-scenario-group">
          <div class="export-scenario-label">
            <div>School</div>
          </div>

          <ExportSelect v-bind:options="options"/>
        </div>

        <div class="export-option-slot" id="library-scenario-group">
          <div class="export-scenario-label">
            <div>Library</div>
          </div>

          <ExportSelect v-bind:options="options"/>
        </div>

        <div class="export-option-slot" id="hospital-scenario-group">
          <div class="export-scenario-label">
            <div>Hospital</div>
          </div>

          <ExportSelect v-bind:options="options"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExportSelect from "./ExportSelect";

export default {
  name: "ExportMenu",
  props: {
    handleDownload: Function,
    handleUpload: Function,
    handleExport: Function,
    options: Object
  },
  components: {
    ExportSelect
  }
};
</script>
