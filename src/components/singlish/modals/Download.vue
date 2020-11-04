<template>
  <q-dialog v-model="modal">
    <q-card
      style="width: 700px; max-width: 80vw;"
      class="full-height"
    >
      <q-card-section>
        <div class="text-h6">KDJ Singlish - Easy Download</div>
      </q-card-section>

      <q-card-section class="scroll">
        <div>
          <q-splitter v-model="splitterModel">

            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="text-primary"
              >
                <q-tab
                  name="pc"
                  icon="fab fa-quinscape"
                  label="PC Install"
                />
                <q-tab
                  name="mobile"
                  icon="fab fa-accessible-icon"
                  label="Mobile"
                />
                <q-tab
                  name="browser"
                  icon="fa fa-globe"
                  label="Browser"
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
                <q-tab-panel name="pc">
                  <div class="text-h5 q-mb-xs"><b>PC Versions</b></div>
                  <p>KDJ Singlish Desktop version has released in mid of 2019. It's capable of doing more things beyond a normal applciation. Just try it.</p>
                  <br>
                  <h5 style="margin:0"><b>Windows Versions</b></h5>
                  <div class="row">
                    <a
                      href="https://usersdrive.com/i6hgzoayognz.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (Any)</a>
                    <a
                      href="https://usersdrive.com/3kv6fraptocp.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (32 Bit)</a>
                    <a
                      href="https://usersdrive.com/bbqz98yr9gzl.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (64 Bit)</a>
                  </div>

                  <div class="row">
                    <a
                      href="https://usersdrive.com/75y2b8wsj1rg.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (Any) - Portable</a>
                    <a
                      href="https://usersdrive.com/p77j8eogcial.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (32 Bit) - Portable</a>
                    <a
                      href="https://usersdrive.com/2yugc8xsxetr.html"
                      target="_blank"
                      class="btn q-link text-primary "
                    >Windows (64 Bit) - Portable</a>
                  </div>
                  <br>
                  <br>

                </q-tab-panel>

                <q-tab-panel name="mobile">
                  <div class="text-h5 q-mb-xs">Portable</div>
                  <p>KDJ Singlish Android Version has ben now released to the playstore. You can download it securely using the following link. Apple version also will be released soon.</p>
                  <br>
                  <center>
                    <h5 style="margin:0"><b>Android Versions</b></h5>
                    <div class="row">
                      <div class="col-md-12">
                        <a
                          href="https://play.google.com/store/apps/details?id=lk.kdj.singlish&hl=en"
                          target="_blank"
                          class="btn q-link text-primary "
                        >Go to the Play Store</a>
                      </div>
                    </div>
                    <br>
                    <h5 style="margin:0"><b>Apple Versions</b></h5>
                    <div class="row">
                      <div class="col-md-12">
                        Coming Soon
                      </div>
                    </div>
                  </center>
                </q-tab-panel>
                <q-tab-panel name="browser">
                  <div class="text-h5 q-mb-xs">Browser Extensions</div>
                  <p>KDJ Singlish is very compatible with the Google Chrome Browser. Other versions also will be released very soon.</p>
                  <br>
                  <center>
                    <h5 style="margin:0"><b>Google Chrome Extension</b></h5>
                    <div class="row">
                      <div class="col-md-12">
                        <a
                          href="https://chrome.google.com/webstore/detail/kdj-singlish/ecoofennebdojehcgmclnjdmillihhhm?hl=en"
                          target="_blank"
                          class="btn q-link text-primary "
                        >Go to the Chrome Store</a>
                      </div>
                    </div>

                  </center>
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
      tab: 'pc',
      splitterModel: 20
    };
  },

  mounted () {
    this.$root.$on("singlishDownload", text => {
      this.modal = text;
    });
  }
};
</script>


