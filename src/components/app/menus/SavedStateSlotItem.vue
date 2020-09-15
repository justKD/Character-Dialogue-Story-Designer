 <template>
  <!-- saved-state-slot-item -->
  <div class="SavedStateSlotItem">
    <div class="saved-state-slot">
      <div class="saved-state-slot-number">{{ state.index }}</div>
      <div class="saved-state-slot-item" :id="state.id">
        <input
          type="text"
          class="saved-state-text-field"
          :name="state.id"
          placeholder="empty"
          data-name
          maxlength
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SavedStateSlotItem",
  props: {
    state: Object
  }
};
</script>
