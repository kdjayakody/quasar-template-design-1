<template>
<q-page>
    <vue-splash style="z-index:1000000" :show="showSplash" :logo="logo" background-color="#ffffff" title="Beyond Your Imagination" color="red" :size="300" :fixed="true" />
    <img src="~assets/bg/lines_1.svg" style="position:absolute; right:0; top:-60px;">
    <img src="~assets/bg/lines_2.svg" style="position:absolute; left:0; top:10%; width:80px">
    <div class="container-inside">
        <div class="row q-py-lg">
            <div class="col-12 col-md-6">
                <kinesis-container>
                    <kinesis-element :strength="7" type="depth">
                        <h1 style="font-weight:bold; font-size:4em"><span v-html="$t('beyond_your')"></span>
                        </h1>
                    </kinesis-element>
                    <kinesis-element :strength="7">
                        <h5 style="font-weight:500; margin-top:-40px" v-html="$t('home_subtitle')"></h5>
                    </kinesis-element>
                    <kinesis-element :strength="5" type="depth" :distance="100">
                        <q-btn :label="$t('know_the_company')" to="about" class="q-mr-md kdj_btn" />
                    </kinesis-element>
                </kinesis-container>
            </div>
            <div class="col-12 col-md-6">
                <kinesis-container>
                    <kinesis-element :strength="10" type="depth">
                        <img src="~assets/home_img.svg" width="90%%">
                    </kinesis-element>
                </kinesis-container>
            </div>

        </div>
    </div>
    <br>

    <div class="row q-pt-xl qualities_bar" style="margin-top:-50px">
        <div class="col-12 col-md-12">
            <div class="container-inside">
                <div class="row">
                    <div class="col-12 col q-pt-md">
                        <carousel :paginationEnabled="false" :loop="true" :autoplay="true" :perPageCustom="[[768, 2], [1024, 5]]">
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Innovation</span>
                            </slide>
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Creativity</span>
                            </slide>
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Quality</span>
                            </slide>
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Flexibility</span>
                            </slide>
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Stability</span>
                            </slide>
                            <slide>
                                <span><img src="~assets/icons/right_icon.svg"> &nbsp;Reliability</span>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="container-inside">
        <div class="row q-pt-xl qualities_bar">
            <div class="col-12 col-md-6">
                <h3>Who We Are</h3>
                <p class="text-justify" style="font-weight:300; margin-top:-30px;">>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br>
                    <br>
                    Contact me to get a help <span style="color:red;">--kdjayakodypro@gmail.com--</span>
                </p>
            </div>
            <div class="col-12 col-md-6 text-center">
                <kinesis-container>
                    <kinesis-element :strength="8" type="depth">
                        <img src="~assets/home/who_we_are.svg" width="80%%">
                    </kinesis-element>
                </kinesis-container>
            </div>
        </div>
    </div>

    <div class="container-inside">
        <div class="row q-pb-xl brands_bar">
            <div class="col-12 col-md-12">
                <center>
                    <h3>Our Brands</h3>
                </center>
                <carousel :loop="true" :paginationEnabled="false" :scrollPerPage="false" :autoplay="true" :autoplayHoverPause="true" :centerMode="true" :perPageCustom="[[768, 2], [1024, 4]]">
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>
                    <slide>
                        <h4>Brand 01</h4>
                        <p>It is a long established fact that a reader</p>
                        <q-btn label="Read More" to="newpage" class=" kdj_btn" />

                    </slide>

                </carousel>
            </div>
        </div>
    </div>

    <div class="container-inside">
        <div class=" row q-py-xl qualities_bar">
            <div class="col-12 col-md-6 text-center q-pa-xl">
                <kinesis-container>
                    <kinesis-element :strength="8" type="depth">
                        <img src="~assets/edu_bg.svg" width="90%%">
                    </kinesis-element>
                </kinesis-container>
            </div>
            <div class="col-12 col-md-6">
                <h3>Brand 01</h3>
                <p class="text-justify" style="font-weight:300; margin-top:-30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
    <div class="container-inside" style="margin-top:-10vh">
        <div class=" row q-py-xl qualities_bar">

            <div class="col-12 col-md-6">
                <h3>Brand 02</h3>
                <p class="text-justify" style="font-weight:300; margin-top:-30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="col-12 col-md-6 text-center q-pa-xl ">
                <kinesis-container>
                    <kinesis-element :strength="8" type="depth">
                        <img src="~assets/edu_bg.svg" width="90%%">
                    </kinesis-element>
                </kinesis-container>
            </div>
        </div>
    </div>

</q-page>
</template>

<script>
export default {
    name: 'PageIndex',

    data() {
        return {
            logo: 'statics/kdj_logo.svg',
            showSplash: true
        }
    },

    methods: {

    },

    mounted() {
        setTimeout(() => {
            this.showSplash = false
            this.$refs.videoRef.src = "statics/trans3.webm";
            this.$refs.videoRef.play();
        }, 1500)

    }
}
</script>

<style>

</style>
