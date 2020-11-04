<template>
<q-layout view="hHh Lpr lff">
    <q-header reveal elevated>
        <toolbar></toolbar>
    </q-header>
    <drawer></drawer>
    <q-page-container>
        <transition name="transitions" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutDown" mode="out-in">
            <router-view />
        </transition>
    </q-page-container>
    <q-footer class="bg-dark">
        <footerbar></footerbar>
    </q-footer>
</q-layout>
</template>

<script>
import toolbar from './common/toolbar'
import footerbar from './common/footer'
import drawer from './common/drawer'

export default {
    data() {
        return {

        }
    },
    components: {
        'toolbar': toolbar,
        'footerbar': footerbar,
        'drawer': drawer
    }
}
</script>

<style>
</style>
