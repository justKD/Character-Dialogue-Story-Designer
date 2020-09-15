<template>
  <div class="menu-container">
    <div class="menu-container-inner">
      <MenuItems/>
      <MenuSelect id="menu-select"/>
    </div>
  </div>
</template>

<script>
import MenuSelect from "./MenuContainerComponents/MenuSelect";
import MenuItems from "./MenuContainerComponents/MenuItems";

export default {
  name: "MenuContainer",
  components: {
    MenuSelect,
    MenuItems
  }
};
</script>
