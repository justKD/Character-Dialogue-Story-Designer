  <template>
  <!-- export-select-container -->
  <div class="ExportSelect">
    <div class="export-select-group">
      <div class="export-select-container left">
        <div class="menu-select-image-container">
          <img class="menu-select-image" src="images/triangle-3px.png">
        </div>
        <div class="export-select-wrapper">
          <select
            class="export-select"
            id="scenario-intro-select"
            name="scenario-type-select"
            data-name="scenario-type-select"
          >
            <option v-for="option in options" :key="option.key">{{ option.text }}</option>
          </select>
        </div>
      </div>
      <div class="export-select-container">
        <div class="menu-select-image-container">
          <img class="menu-select-image" src="images/triangle-3px.png">
        </div>
        <div class="export-select-wrapper">
          <select class="export-select" id="scenario-outro-select" name data-name>
            <option v-for="option in options" :key="option.key">{{ option.text }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExportSelect",
  props: {
    options: Object
  }
};
</script>
