   <template>
  <div class="popup-container" id="help-popup">
    <div class="popup-container-inner" id="help-popup-inner">
      <div class="popup-close-button" id="help-close">
        <div>X</div>
      </div>

      <div v-on:click="focus" class="popup-content-container" id="popup-content-help">
        <div class="popup-content-columns">
          <div class="popup-column left-column">
            <ul>
              <strong>General</strong>
              <br>
              <br>

              <li>
                This is a tool for creating automated step-through story
                sequences in PowerUp.
              </li>
              <li>Each card represents a 'step', with a left and right event.</li>
              <li>It's features include:</li>
              <ul>
                <li>Undo/Redo History</li>
                <li>Multiple Saved States</li>
                <li>Export work session file in JSON format.</li>
                <li>
                  Export StorySequences.json, a file that can be dropped into
                  PowerUp.
                </li>
              </ul>
              <li>
                Media assets between this project and the main PowerUp repos
                will need to be manually kept in sync.
              </li>
              <li>
                <i>Best in Chrome</i>
              </li>
              <li>
                <i>Works in Firefox and Safari</i>
              </li>
            </ul>

            <ul>
              <strong>Basic Functions</strong>
              <br>
              <br>
              <li>click the add button to add new cards</li>
              <li>click a card or thumbnail to focus</li>
              <li>
                new cards default to the `'no change'` setting for image and
                position fields
              </li>
              <ul>
                <li>
                  this means a new card will automatically visualize the image
                  and position from the previous card
                </li>
                <li>
                  changing a prior card will auto-update any cards that would
                  be affected due to a `no change` setting
                </li>
              </ul>
            </ul>

            <ul>
              <strong>Hotkeys</strong>
              <br>
              <br>
              <li>`ctrl + n` - add a new card</li>
              <li>`ctrl + z` - undo action</li>
              <li>`ctrl + y` - redo action</li>
              <li>`ctrl + s` - save over last saved state</li>
              <li>
                `ctrl + d` - prompt to download
                <strong>work session</strong> file
              </li>
              <li>
                `ctrl + u` - prompt to upload
                <strong>work session</strong> file
              </li>
              <li>
                `delete` - delete the currently focused card (currently the
                only way to delete a card)
              </li>
            </ul>
          </div>

          <div class="popup-column right-column">
            <ul>
              <strong>Saved States</strong>
              <br>
              <br>
              <li>
                clicking an empty slot and selecting save will prompt you to
                name the slot, return to save
              </li>
              <li>
                after saving, you can save over the same slot without being
                prompted for confirmation
              </li>
              <li>
                if you select a differe but previously filled slot, you will
                be prompted to confirm your selection
              </li>
              <li>renaming a slot will not affect the saved state</li>
              <li>loading a slot will load the saved state and close the menu</li>
              <li>
                select a slot and clicking delete will prompt you for
                confirmation
              </li>
            </ul>

            <ul>
              <strong>Export</strong>
              <br>
              <br>
              <ul>
                <i>Download</i>
                <li>this will prompt you to name your work session for download</li>
                <ul>this json file is different from StorySequences.json
                  <li>it stores your current open work and saved states</li>
                </ul>
                <li>it will download to your normal web downloads folder</li>
              </ul>
              <br>
              <ul>
                <i>Upload</i>
                <li>
                  this will open a file dialog where you can select a
                  previously downloaded work session json
                </li>
                <li>
                  it will restore your complete session, including current
                  work, current history, and saved states
                </li>
              </ul>
              <br>
              <ul>
                <i>Export</i>
                <li>
                  before selecting this option, fill out the grid in the lower
                  section of the popup
                </li>
                <li>
                  you should select saved states that are properly labeled for
                  each intro and outro
                </li>
                <li>
                  then, clicking export will export will download
                  StorySequences.json to your normal web downloads folder
                  <ul>
                    <li>
                      StorySequences.json is formatted for use in PowerUp,
                      just replace the same file in the project folder
                    </li>
                    <li>
                      it's ok to leave empty fields before exporting,
                      especially for development and testing
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div class="popup-content-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpMenu",
  props: {
    focus: Function
  }
};
</script>

   
 