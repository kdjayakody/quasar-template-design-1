<template>
<q-page style="margin-top:-30px">
    <img src="~assets/bg/lines_1.svg" style="position:absolute; right:0; top:-60px;">
    <img src="~assets/bg/lines_2.svg" style="position:absolute; left:0; top:10%; width:80px">
    <div class="row justify-center ">
        <kinesis-container>
            <div class="col-12 col-md-10">
                <kinesis-element :strength="7" type="depth">
                    <h1 class="text-center" style="font-weight:bold;"><span>About Us</span>
                    </h1>
                </kinesis-element>
                <kinesis-element :strength="7">
                    <h5 class="text-center" style="font-weight:500; margin-top:-40px">Who we are, what we do</h5>
                </kinesis-element>
            </div>
        </kinesis-container>

    </div>
    <div class="row justify-center q-my-xl">
        <div class="col-12 col-md-10">
            <p class="text-justify" style="font-weight:300;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p class="text-justify" style="font-weight:300;">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <p class="text-justify" style="font-weight:300;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p class="text-justify" style="font-weight:300;">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <br>
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
