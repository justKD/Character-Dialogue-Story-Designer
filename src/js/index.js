import { constant } from "./constant";

let self = {
  history: new History(),
  focusedCard: constant.emptyFocusedCard,
  editWarningVisible: false,
  scenario: {
    name: constant.scenarioNames[0],
    type: constant.scenarioTypes[0],
    music: constant.musicOptions[0],
  },
};
