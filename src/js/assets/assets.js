import { cardBackground } from "./backgrounds/cardBackground";
import { transparentBackground } from "./backgrounds/transparentBackground";

import { exportIcon } from "./icons/exportIcon";
import { helpIcon } from "./icons/helpIcon";
import { redoIcon } from "./icons/redoIcon";
import { savedStatesIcon } from "./icons/savedStatesIcon";
import { triangleIcon } from "./icons/triangleIcon";
import { undoIcon } from "./icons/undoIcon";

import { chibiDazed } from "./characters/chibi/dazed";
import { chibiHappy } from "./characters/chibi/happy";
import { chibiLecturing } from "./characters/chibi/lecturing";
import { chibiNormal } from "./characters/chibi/normal";
import { chibiSad } from "./characters/chibi/sad";
import { chibiScared } from "./characters/chibi/scared";
import { chibiSmiling } from "./characters/chibi/smiling";
import { chibiTalking } from "./characters/chibi/talking";
import { chibiTired } from "./characters/chibi/tired";
import { chibiUpset } from "./characters/chibi/upset";
import { chibiWhatever } from "./characters/chibi/whatever";

import { chibi2Dazed } from "./characters/chibi2/dazed";
import { chibi2Happy } from "./characters/chibi2/happy";
import { chibi2Lecturing } from "./characters/chibi2/lecturing";
import { chibi2Normal } from "./characters/chibi2/normal";
import { chibi2Sad } from "./characters/chibi2/sad";
import { chibi2Scared } from "./characters/chibi2/scared";
import { chibi2Smiling } from "./characters/chibi2/smiling";
import { chibi2Talking } from "./characters/chibi2/talking";
import { chibi2Tired } from "./characters/chibi2/tired";
import { chibi2Upset } from "./characters/chibi2/upset";
import { chibi2Whatever } from "./characters/chibi2/whatever";

import { dataExample } from "./characters/other/dataExample";
import { testChar3 } from "./characters/other/testChar3";

export const assets = {
  backgrounds: {
    cardBackground: cardBackground,
    transparentBackground: transparentBackground,
  },
  icons: {
    exportIcon: exportIcon,
    helpIcon: helpIcon,
    redoIcon: redoIcon,
    savedStatesIcon: savedStatesIcon,
    triangleIcon: triangleIcon,
    undoIcon: undoIcon,
  },
  characters: {
    chibi: {
      dazed: chibiDazed,
      happy: chibiHappy,
      lecturing: chibiLecturing,
      normal: chibiNormal,
      sad: chibiSad,
      scared: chibiScared,
      smiling: chibiSmiling,
      talking: chibiTalking,
      tired: chibiTired,
      upset: chibiUpset,
      whatever: chibiWhatever,
    },
    chibi2: {
      dazed: chibi2Dazed,
      happy: chibi2Happy,
      lecturing: chibi2Lecturing,
      normal: chibi2Normal,
      sad: chibi2Sad,
      scared: chibi2Scared,
      smiling: chibi2Smiling,
      talking: chibi2Talking,
      tired: chibi2Tired,
      upset: chibi2Upset,
      whatever: chibi2Whatever,
    },
    other: {
      dataExample: dataExample,
      testChar3: testChar3,
    },
  },
};
