<template>
  <q-dialog v-model="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">KDJ Singlish - Mobile Download</div>
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
                  name="android"
                  icon="fab fa-android"
                  label="Android"
                />
                <q-tab
                  name="apple"
                  icon="fab fa-apple"
                  label="Apple"
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
                <q-tab-panel name="android">
                  <div class="text-h5 q-mb-xs">Android</div>
                  <p>KDJ Singlish Android Version is now released to the playstore. You can download it securely using the following link.</p>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=lk.kdj.singlish&hl=en"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Go to Store</a>
                    </div>
                  </div>

                </q-tab-panel>

                <q-tab-panel name="apple">
                  <div class="text-h5 q-mb-xs">Apple</div>
                  <p>Sorry, we couldn't release the Apple version yet. But as soon as possible we will release it official to the store.</p>
                  <p>But fortunately, our web application is now 100% compatible with any platform you use. It's called PWA (Progressive Web Application). So, you can use it like a naive application on your Iphone.</p>
                  <div class="row">
                    <div class="col q-ma-xs q-pa-md shadow-3">
                      <a
                        href="https://singlish.kdj.lk"
                        target="_blank"
                        class="btn q-link text-primary "
                      >Go to App</a>
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
      tab: 'android',
      splitterModel: 20
    };
  },

  mounted () {
    this.$root.$on("mobiled", text => {
      this.modal = text;
    });
  }
};
</script>

<style></style>
