<template>
  <q-dialog v-model="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">KDJ Singlish - Mobile Download</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>KDJ Singlish supports you everywhere you need to have. Specially we have developed a browser extension. In future, we will develop more.</p>
        <div class="row">
          <div class="col q-ma-xs q-pa-md shadow-3">
            <a
              href="https://chrome.google.com/webstore/detail/kdj-singlish/ecoofennebdojehcgmclnjdmillihhhm?hl=en"
              target="_blank"
              class="btn q-link text-primary "
            >Google Chrome Extension</a>
          </div>
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
    this.$root.$on("otherd", text => {
      this.modal = text;
    });
  }
};
</script>

<style></style>
