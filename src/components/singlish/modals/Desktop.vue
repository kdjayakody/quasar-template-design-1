<template>
  <q-dialog v-model="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">KDJ Singlish - PC Version Download</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div>
          <q-splitter
            v-model="splitterModel"
            style="height: 250px"
          >

            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="text-primary"
              >
                <q-tab
                  name="install"
                  icon="fab fa-quinscape"
                  label="Installable"
                />
                <q-tab
                  name="portable"
                  icon="fab fa-accessible-icon"
                  label="Portable"
                />

              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="install">
                  <div class="text-h5 q-mb-xs">Installable</div>
                  <p>KDJ Singlish Desktop version has released in mid of 2019. It's capable of doing more things beyond a normal applciation. Just try it.</p>
                  <br>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/2Qm2dqo"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (Any)</a>
                    </div>
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/3a1Kug2"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (32 Bit)</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/3daw9Q7"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (64 Bit)</a>
                    </div>
                  </div>
                  <br>
                  <br>
                  <p class="text-primary">We got a good news. If you need to use KDJ Singlish on other platforms such as Linux, Mac etc, you can use our PWA. We will teach your how to get it to others operating systems as soon as possible.</p>

                </q-tab-panel>

                <q-tab-panel name="portable">
                  <div class="text-h5 q-mb-xs">Portable</div>
                  <p>Nowadays, everyone like to have a quick and easy life. So portable apps best method to use if you don't need to install an app on your computer. KDJ Singlish supports it 100%.</p>
                  <br>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/2wijVnU"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (Any) - Portable</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/38Tb2P2"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (32 Bit) - Portable</a>
                    </div>
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="http://bit.ly/2WhF6kO"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Windows (64 Bit) - Portable</a>
                    </div>
                  </div>

                </q-tab-panel>

              </q-tab-panels>
            </template>

          </q-splitter>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="OK"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      modal: false,
      tab: 'install',
      splitterModel: 20
    };
  },

  mounted () {
    this.$root.$on("desktopd", text => {
      this.modal = text;
    });
  }
};
</script>

<style></style>
