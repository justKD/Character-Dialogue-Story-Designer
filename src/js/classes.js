import { copy } from "./utility";

/**
 * Left or right side of a card has independent data
 */
export class CardSide {
  constructor(text, image, position, animation) {
    this.text = text ? text : null;
    this.image = image;
    this.position = position
      ? `card-image-container ${position}`
      : `card-image-container`;
    this.animation = animation ? animation : null;

    this.value = {
      text: text ? text : null,
      image: image ? image : null,
      position: position ? position : null,
      animation: animation ? animation : null,
    };
  }
}

/**
 * Data for each scene in the sequence, represented as a card in this app
 */
export class Card {
  constructor(id, left, right) {
    this.left = left instanceof CardSide ? left : new CardSide();
    this.right = right instanceof CardSide ? right : new CardSide();
    this.id = id ? "card-id+" + id : null;
  }
}

// /**
//  * Data for export and for inputs - value vs human-readable text
//  */
// export class Option {
//   constructor(value, text) {
//     this.value = value;
//     this.text = text;
//   }
// }

/**
 * An app state bundled for travel
 */
export class State {
  constructor(cards) {
    this.cards = cards ? cards : [];
  }
}

/**
 * App history consisting of work session states and the current index
 */
export class History {
  constructor(states, index) {
    this.states = states ? states : [];
    this.index = index ? index : -1;
  }

  append(cards) {
    /* Overwrite left over elements if updating after undoing */
    const overwriteHistory = () => (this.states.length = this.index + 1);
    this.index < this.states.length - 1 && overwriteHistory();

    /* Prepare independent state */
    const state = new State(copy(cards));

    /* Store the independent state */
    this.states.push(state);
    this.index += 1;
  }

  // /* Recall a state in the history stack */
  // recall: (index) => {
  // const state = copy(self.history.states[index]);
  // app.components.cardContainer.cards = state.cards;
  // app.do.thumbnail.updateTrack();
  // self.history.index = index;
  // },

  // /* Recall the next state in the history stack */
  // redo: (_) => {
  //   const next = self.history.index + 1;
  //   next < self.history.states.length
  //     ? app.do.history.recall(next)
  //     : app.do.show.notification("error", "Nothing left to redo.");
  // },

  // /* Recall the previous state in the history stack */
  // undo: (_) => {
  //   const previous = self.history.index - 1;
  //   previous >= 0
  //     ? app.do.history.recall(previous)
  //     : app.do.show.notification("error", "Nothing left to undo.");
  // },
}

/**
 * All aspects of the current app state necessary for export/import/travel
 */
export class SavedState {
  constructor(cards, history, scenario, name) {
    this.cards = cards;
    this.history = history;
    this.scenario = scenario;
    this.name = name;
  }
}

/**
 * A SavedState bundled with a unique id and index for use with the saved state slots and exporting
 */
export class SavedStateItem {
  constructor(index, id, state) {
    this.index = index;
    this.id = id;
    this.state = state;
  }
}

/**
 * All aspects of the current work session (state, history, saved states, etc.) bundled for travel
 */
export class SavedFile {
  constructor(cards, states, self) {
    this.cards = cards;
    this.states = states;
    this.self = self;
  }
}

/**
 * Cards and appropriate scenario information for export to StorySequences.json
 */
export class ExportItem {
  constructor(scenario, cards) {
    this.scenario = scenario;
    this.cards = cards;
  }
}

/**
 * StorySequences.json contains two objects, intros and outros
 */
export class StorySequenceJSON {
  constructor(intros, outros) {
    this.intros = intros;
    this.outros = outros;
  }
}

/**
 * An intro/outro is a sequence of steps (cards) and music
 */
export class StorySequence {
  constructor(music, steps) {
    this.music = music;
    this.steps = steps;
  }
}

/**
 * Each sequence contains steps, each with a left and right event
 */
export class StorySequenceStep {
  constructor(lftEvent, rgtEvent) {
    this.lftEvent = lftEvent;
    this.rgtEvent = rgtEvent;
  }
}

/**
 * A left/right event defines the text, image, image position, and image animation to be used
 */
export class StorySequenceEvent {
  constructor(txt, img, pos, ani) {
    this.txt = txt;
    this.img = img;
    this.pos = pos;
    this.ani = ani;
  }
}
