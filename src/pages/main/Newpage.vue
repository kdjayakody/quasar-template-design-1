<template>
<q-page style="margin-top:-30px">
    <img src="~assets/bg/lines_1.svg" style="position:absolute; right:0; top:-60px;">
    <img src="~assets/bg/lines_2.svg" style="position:absolute; left:0; top:10%; width:80px">
    <div class="row justify-center ">
        <kinesis-container>
            <div class="col-12 col-md-10">
                <kinesis-element :strength="7" type="depth">
                    <h1 class="text-center" style="font-weight:bold;"><span>New Page</span>
                    </h1>
                </kinesis-element>
                <kinesis-element :strength="7">
                    <h5 class="text-center" style="font-weight:500; margin-top:-40px">Start Your Project</h5>
                </kinesis-element>
            </div>
        </kinesis-container>

    </div>
    <div class="row justify-center q-my-xl">
        <div class="col-12 col-md-10">

        </div>
    </div>

</q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
