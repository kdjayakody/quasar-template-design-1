<template>
  <q-drawer
    :width="250"
    @input="updateLeftDrawer({ updates: { leftDrawer: !leftDrawer } })"
    :value="leftDrawer"
  >
    <q-scroll-area class="fit text-dark">
      <q-list padding>
        <q-item
          clickable
          v-ripple
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="about"
        >
          <q-item-section avatar>
            <q-icon name="keyboard" />
          </q-item-section>

          <q-item-section>
            About
          </q-item-section>
        </q-item>

        <q-separator />

        <q-expansion-item
          icon="touch_app"
          label="Tools"
        >
          <q-item
            clickable
            to="singlish"
            v-ripple
            class="text-center"
          >
            <q-item-section>KDJ Singlish</q-item-section>
          </q-item>
          <a
            href="https://kdj.lk/gchords"
            target="_blank"
          >
            <q-item
              clickable
              v-ripple
              class="text-center"
            >
              <q-item-section>KDJ GChords</q-item-section>
            </q-item>
          </a>

        </q-expansion-item>
        <q-expansion-item
          icon="touch_app"
          label="Biz"
        >
          <a
            href="https://kdjhosting.com"
            target="_blank"
          >
            <q-item
              clickable
              v-ripple
              class="text-center"
            >
              <q-item-section>KDJ Hosting</q-item-section>
            </q-item>
          </a>

        </q-expansion-item>
        <q-expansion-item
          icon="touch_app"
          label="Brands"
        >
          <a
            href="https://kdjguru.com"
            target="_blank"
          >
            <q-item
              clickable
              v-ripple
              class="text-center"
            >
              <q-item-section>KDJ Guru</q-item-section>
            </q-item>
          </a>

        </q-expansion-item>
        <q-expansion-item
          icon="touch_app"
          label="Support"
        >
          <a
            href="https://discord.gg/EJwndW"
            target="_blank"
          >
            <q-item
              clickable
              v-ripple
              class="text-center"
            >
              <q-item-section>Discord Chat</q-item-section>
            </q-item>
          </a>

          <q-item
            disabled
            clickable
            v-ripple
            class="text-center"
          >
            <q-item-section>KDJ Forum</q-item-section>
          </q-item>

          <a
            href="https://facebook.com/kdjlanka"
            target="_blank"
          >
            <q-item
              clickable
              v-ripple
              class="text-center"
            >
              <q-item-section>Facebook</q-item-section>
            </q-item>
          </a>

        </q-expansion-item>

      </q-list>
    </q-scroll-area>

  </q-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  data () {
    return {
      miniState: true,
    };
  },
  components: {

  },
  computed: {
    ...mapGetters({
      leftDrawer: "options/leftDrawerOpen"
    })
  },
  methods: {
    ...mapActions("options", ["updateLeftDrawer"]),

  },

};
</script>

<style></style>
