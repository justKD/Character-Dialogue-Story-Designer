# Character Diaglogue Story Designer

by [@justKD](https://github.com/justKD)

## This project is currently undergoing a major overhaul. It is unlikely it will be usable in its current state.

<!-- [![vue](https://img.shields.io/badge/made%20with-vue-blue)]()
[![vue](https://img.shields.io/badge/made%20with-vue-blue)]() -->

<!-- [https://scenario-builder.justkd.app/](https://scenario-builder.justkd.app/) -->

<!-- [mirror](https://zpiiu.csb.app/) -->

---

Character Diaglogue Story Designer is a web app for designing dialogue sequences similar to those found in the visual novel game genre.

Created with VueJS.

<!-- ![Text Adventure Scenario Builder](https://uploads.codesandbox.io/uploads/user/372c6cb3-29f1-4300-8d4e-120330b42973/X3A5-example.png) -->

This app was originally created for [AnitaB.org Open Source](https://github.com/anitab-org) to be used with their mobile game, PowerUp ([iOS](https://github.com/anitab-org/powerup-iOS), [Android](https://github.com/anitab-org/powerup-android)). The PowerUp project has since been [archived](https://github.com/anitab-org/powerup-story-designer), and updates to this app will now be found here.

---

Features include:

- Undo/Redo History
- Multiple Saved States
- Export work session file in JSON format.
- Export StorySequences.json, a file that can be dropped into PowerUp.

![PowerUp Story Designer](https://github.com/systers/powerup-story-designer/blob/master/powerup-story-designer-example-image.jpg?raw=true "PowerUp Story Designer Example Image")

---

<!-- ## Current State (July 25, 2018)

Best in Chrome. Works in Safari and Firefox. May work in Opera.

**Media assets between this project and the main PowerUp repos will need to be manually kept in sync.**

**Names for the assets need to be identical.** -->

---

<!-- - dependencies

  - [VueJS](https://vuejs.org/) - for data-reactive front-end
  - [less](http://lesscss.org/) - for cleaner css
  - [jQuery 3](https://api.jquery.com/) - for simplifying dom interactions during development - potentially unnecessary as more management is given to Vue

  - [Animate.css](https://daneden.github.io/animate.css/) - animations
  - [Noty](https://ned.im/noty/#/) - notifications
  - [SimpleBar](http://grsmto.github.io/simplebar/) - cross-browser customizable scroll bars -->

---

- hotkeys
  - `ctrl + n` - add a new card
  - `ctrl + z` - undo action
  - `ctrl + y` - redo action
  - `ctrl + s` - save over last saved state
  - `ctrl + d` - prompt download work session file
  - `ctrl + u` - prompt upload work session file
  - `delete` - delete the currently focused card (currently the only way to delete a card)

---

## Basic Functionality

- click the add button to add new cards
- click a card or thumbnail to focus
- new cards default to the `'no change'` setting for image and position fields
  - this means a new card will automatically visualize the image and position from the previous card
  - changing a prior card will auto-update any cards that would be affected due to a `no change` setting

---

## Saved States

- clicking an empty slot and selecting save will prompt you to name the slot, return to save
- after saving, you can save over the same slot without being prompted for confirmation
- if you select a differe but previously filled slot, you will be prompted to confirm your selection
- renaming a slot will not affect the saved state
- loading a slot will load the saved state and close the menu
- select a slot and clicking delete will prompt you for confirmation

---

## Export Menu

- Download
  - this will prompt you to name your work session for download
  - this json file is different from StorySequences.json
    - it stores your current open work and saved states
  - it will download to your normal web downloads folder
- Upload
  - this will open a file dialog where you can select a previously downloaded work session json
  - it will restore your complete session, including current work, current history, and saved states
- Export
  - before selecting this option, fill out the grid in the lower section of the popup
  - you should select saved states that are properly labeled for each intro and outro
  - then, clicking export will export will download StorySequences.json to your normal web downloads folder
    - StorySequences.json is formatted for use in PowerUp, just replace the same file in the project folder
    - it's ok to leave empty fields before exporting, especially for development and testing
