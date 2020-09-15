export const constant = {
  imagesFilePath: "images/characters/",

  imagePositionSuperClass: "card-image-container",

  transparentImage: "transparent.png",

  emptyFocusedCard: {
    index: null,
    id: null,
    card: null,
  },

  musicOptions: [
    new Option("no music", null),
    new Option("home_intro_music_placeholder", "home_intro_music_placeholder"),
    new Option("home_good_ending_example", "home_good_ending_example"),
  ],

  imageOptions: [
    new Option(null, "no change"),
    new Option("test_chibi^normal", "Test Chibi - Normal"),
    new Option("test_chibi^happy", "Test Chibi - Happy"),
    new Option("test_chibi^smiling", "Test Chibi - Smiling"),
    new Option("test_chibi^talking", "Test Chibi - Talking"),
    new Option("test_chibi^lecturing", "Test Chibi - Happy"),
    new Option("test_chibi^sad", "Test Chibi - Sad"),
    new Option("test_chibi^scared", "Test Chibi - Scared"),
    new Option("test_chibi^upset", "Test Chibi - Upset"),
    new Option("test_chibi^dazed", "Test Chibi - Dazed"),
    new Option("test_chibi^whatever", "Test Chibi - Whatever"),
    new Option("test_chibi^tired", "Test Chibi - Tired"),

    new Option("test2_chibi^normal", "2 Test Chibi - Normal"),
    new Option("test2_chibi^happy", "2 Test Chibi - Happy"),
    new Option("test2_chibi^smiling", "2 Test Chibi - Smiling"),
    new Option("test2_chibi^talking", "2 Test Chibi - Talking"),
    new Option("test2_chibi^lecturing", "2 Test Chibi - Happy"),
    new Option("test2_chibi^sad", "2 Test Chibi - Sad"),
    new Option("test2_chibi^scared", "2 Test Chibi - Scared"),
    new Option("test2_chibi^upset", "2 Test Chibi - Upset"),
    new Option("test2_chibi^dazed", "2 Test Chibi - Dazed"),
    new Option("test2_chibi^whatever", "2 Test Chibi - Whatever"),
    new Option("test2_chibi^tired", "2 Test Chibi - Tired"),

    new Option("testChar3", "3 Another Test Char"),

    new Option("test_data_example", "Data Example Image"),
  ],

  animationOptions: [
    new Option(null, "none"),
    new Option("shake", "shake"),
    new Option("tiltLeft", "tilt left"),
    new Option("tiltRight", "tilt right"),
    new Option("jiggle", "jiggle"),
    new Option("flip", "flip"),
  ],

  leftPositionOptions: [
    new Option(null, "no change"),
    new Option("left hidden", "hidden"),
    new Option("left near", "near"),
    new Option("left mid", "mid"),
    new Option("left far", "far"),
  ],

  rightPositionOptions: [
    new Option(null, "no change"),
    new Option("right hidden", "hidden"),
    new Option("right near", "near"),
    new Option("right mid", "mid"),
    new Option("right far", "far"),
  ],

  leftInputs: {
    txt: "#option-left-text",
    img: "#option-left-image-select",
    pos: "#option-left-position-select",
    ani: "#option-left-animation-select",
  },

  rightInputs: {
    txt: "#option-right-text",
    img: "#option-right-image-select",
    pos: "#option-right-position-select",
    ani: "#option-right-animation-select",
  },

  scenarioNames: [
    new Option("Home", 5),
    new Option("School", 1),
    new Option("Library", 7),
    new Option("Hospital", 6),
  ],

  scenarioTypes: [new Option("Intro", 1), new Option("Outro", -1)],
};
