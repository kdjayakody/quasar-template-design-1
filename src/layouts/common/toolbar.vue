<template>
<div class="row justify-center">
    <div class="col-12 col-md-10">
        <q-toolbar class="bg-white main_nav kdj-nav-1">
            <q-btn to="/"> <img src="~assets/kdj_logo.svg" width="100px"></q-btn>

            <q-space />
            <q-btn to="about" style="background:#FADBDB; color: #C8242A; padding:2px 10px; border-radius:0;" :label="$t('know_the_company')" class="q-mr-md" />
            <q-select filled v-model="lang" bg-color="black" label-color="white" style="" :options="langOptions" dense emit-value options-dense />
            <!--iframe src="statics/2.mp3" type="audio/mp3" allow="autoplay" id="audio" style="display:none"></!--iframe>
            <audio autoplay="true">
                <source src="statics/2.mp3" type="audio/mp3">
            </audio-->
        </q-toolbar>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            lang: this.$i18n.locale,
            langOptions: [{
                    value: 'En',
                    label: 'En'
                },
                {
                    value: 'සිං',
                    label: 'සිං'
                }
            ]
        }
    },
    watch: {
        lang(lang) {
            this.$i18n.locale = lang
        }
    }
}
</script>

<style>

</style>
