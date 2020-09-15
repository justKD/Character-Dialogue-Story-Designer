<template>
  <div class="app">
    <MainContainer
      v-bind:focus="false"
      v-bind:handleSave="()=>{}"
      v-bind:handleLoad="()=>{}"
      v-bind:checkRename="()=>{}"
      v-bind:handleDelete="()=>{}"
      v-bind:savedStates="{}"
      v-bind:thumbnails="thumbnails"
      v-bind:cards="cards"
    />
  </div>
</template>

<script>
import MainContainer from "./components/app/MainContainer";
import { Card, CardSide, History, State } from "./js/classes";
import { assets } from "./js/assets/assets";
import { assign, copy } from "./js/utility";

export default {
  name: "App",
  components: {
    MainContainer,
  },
  data() {
    return {
      thumbnails: [],
      cards: [],
      history: new History(),
    };
  },
  mounted() {
    /**
     * Startup.
     */
    this.start();
  },
  methods: {
    start() {

      /** Add first empty card */
      (()=>{
        const firstCard = new Card(
          this.getUniqueId(),
          new CardSide(null, assets.backgrounds.transparentBackground, "left near", null),
          new CardSide(null, assets.backgrounds.transparentBackground, "right near", null)
        );
        this.cards.push(firstCard);

        this.updateThumbnailTrack();
        this.history.append(this.cards);
      })();

    },
    
    getUniqueId() {
      return (
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    },

    prepareThumbnail(card) {
      const thumbnail = assign(card);
      const id = "thumbnail-id+" + thumbnail.id.split("+")[1];
      thumbnail.id = id;
      return thumbnail;
    },

    updateThumbnailTrack() {
      const thumbnails = [];
      const cards = this.cards;
      cards.forEach(card => {
        const thumbnail = this.prepareThumbnail(card);
        thumbnails.push(thumbnail);
      });

      this.thumbnails = thumbnails;
    },

  },
  
  props: {
    focus: Boolean,
    handleSave: Function,
    handleLoad: Function,
    checkRename: Function,
    handleDelete: Function,
    savedStates: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./scss/app.scss";
</style>