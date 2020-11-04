<template>
<div class="fixed-center text-center">
    <div class="main_container">
        <div class="taxi_container">
            <div class="taxi_lab">
                KDJ
            </div>
        </div>
        <div class="glass_container">
            <div class="glass">
                <div class="left_glass_edge">
                </div>
                <div class="right_glass_edge">
                </div>
            </div>
            <div class="sub_glass">
                <div class="error">404</div>
            </div>
        </div>
        <div class="front_container">
            <div class="left_glass"></div>
            <div class="left_stick"></div>
            <div class="right_glass"></div>
            <div class="right_stick"></div>
            <div class="left_light">
                <div class="flash_light">
                </div>
            </div>
            <div class="right_light">
                <div class="flash_light">
                </div>
            </div>
            <div class="left_small_light"></div>
            <div class="right_small_light"></div>
            <div class="left_indicator"></div>
            <div class="right_indicator"></div>
            <div class="left_engine">
            </div>
        </div>
        <div class="number_plate">
            <div class="number_lab">TN</div>
        </div>
        <div class="lower_banner">
        </div>
        <div class="tyre_container">
            <div class="left_tyre"></div>
            <div class="right_tyre"></div>
        </div>
    </div>
    <q-btn color="secondary" style="width:200px; margin-top:100px" to="/" label="Go back" />
</div>
</template>

<script>
export default {
    name: 'Error404'
}
</script>

<style>
.main_container {
    margin: auto;
    width: 330px;
}

.main_container .glass_container {
    float: left;
    width: 100%;
    position: relative;
}

.main_container .glass_container .left_glass_edge {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background: #373635;
    position: absolute;
    left: 12px;
    top: -1px;
}

.main_container .glass_container .right_glass_edge {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background: #373635;
    position: absolute;
    right: 12px;
    top: -1px;
}

.main_container .glass_container .glass {
    border-bottom: 132px solid #373635;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    height: 0;
    width: 320px;
    margin-left: 5px;
}

.main_container .glass_container .sub_glass {
    width: 272px;
    height: 108px;
    background: #898F99;
    border-radius: 10px;
    position: absolute;
    left: 30px;
    right: 0;
    top: 15px;
    bottom: 0;
}

.main_container .glass_container .sub_glass .error {
    color: #FFF;
    font-size: 72px;
    text-align: center;
    padding: 15px;
    letter-spacing: 15px;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
}

.main_container .front_container {
    float: left;
    width: 330px;
    background: #373635;
    height: 160px;
    position: relative;
}

.main_container .front_container .left_glass {
    width: 56px;
    height: 30px;
    background: #373635;
    position: absolute;
    left: -68px;
    top: -46px;
}

.main_container .front_container .left_stick {
    width: 8px;
    height: 39px;
    background: #373635;
    position: absolute;
    left: -7px;
    top: -25px;
    -webkit-transform: rotate(140deg);
    transform: rotate(140deg);
}

.main_container .front_container .right_stick {
    width: 8px;
    height: 39px;
    background: #373635;
    position: absolute;
    right: -7px;
    top: -25px;
    -webkit-transform: rotate(223deg);
    transform: rotate(223deg);
}

.main_container .front_container .right_glass {
    width: 56px;
    height: 30px;
    background: #373635;
    position: absolute;
    right: -68px;
    top: -46px;
}

.main_container .front_container .left_light {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: #E6EDEF;
    border: 15px solid #373635;
    position: absolute;
    left: -53px;
    top: 0;
}

.main_container .front_container .left_indicator {
    width: 13px;
    height: 13px;
    border-radius: 10px;
    background: #E97B40;
    position: absolute;
    top: 85px;
    left: -12px;
}

.main_container .front_container .right_indicator {
    width: 13px;
    height: 13px;
    border-radius: 10px;
    background: #E97B40;
    position: absolute;
    top: 85px;
    right: -12px;
}

.main_container .front_container .right_light {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: #E6EDEF;
    border: 15px solid #373635;
    position: absolute;
    right: -53px;
    top: 0;
}

.main_container .front_container .left_small_light {
    width: 60px;
    height: 48px;
    border-radius: 40px;
    background: #373635;
    position: absolute;
    left: -24px;
    top: 70px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 57px;
}

.main_container .front_container .right_small_light {
    width: 60px;
    height: 48px;
    border-radius: 40px;
    background: #373635;
    position: absolute;
    right: -24px;
    top: 70px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 57px;
}

.main_container .lower_banner {
    width: 380px;
    height: 45px;
    border-radius: 45px;
    background: #373635;
    float: left;
    margin-left: -25px;
    margin-top: -39px;
}

.main_container .tyre_container {
    float: left;
    width: 100%;
    position: relative;
}

.main_container .left_tyre {
    width: 70px;
    height: 65px;
    background: #373635;
    position: absolute;
    left: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.main_container .right_tyre {
    width: 70px;
    height: 65px;
    background: #373635;
    position: absolute;
    right: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.main_container .left_engine {
    float: left;
    width: 100%;
    position: absolute;
    left: 100px;
    top: 40px;
}

.main_container .left_engine .left_rw1 {
    display: inline-block;
    width: 100%;
}

.main_container .left_engine .left_rw1 p {
    width: 6px;
    height: 6px;
    margin: 1.5px;
    background: #ABC1C6;
    display: inline-block;
}

.main_container .right_engine {
    float: left;
    width: 100%;
    position: absolute;
    right: -175px;
    top: 40px;
}

.main_container .right_engine .right_rw1 {
    float: left;
    display: inline-block;
    width: 100%;
}

.main_container .right_engine .right_rw1 p {
    width: 6px;
    height: 6px;
    margin: 1.5px;
    background: #ABC1C6;
    display: inline-block;
}

.main_container .taxi_container {
    width: 81px;
    height: 35px;
    margin: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    color: #FFF;
    background: #373635;
}

.main_container .taxi_lab {
    background: #E97B40;
    margin: 10px;
    border-radius: 7px;
    padding: 4px;
    position: relative;
    top: 7px;
    font-family: 'Comfortaa', cursive;
    font-weight: 300;
    letter-spacing: 2px;
}

.main_container .number_plate {
    height: 32px;
    width: 110px;
    border-radius: 20px;
    background: #E6EDEF;
    margin: auto;
    position: relative;
    top: 287px;
    left: 0;
    right: 0;
    text-align: center;
}

.main_container .number_plate .number_lab {
    font-size: 16px;
    color: #000;
    padding-top: 5px;
    position: absolute;
    left: 0;
    right: 0;
    font-family: 'Comfortaa', cursive;
    font-weight: 400;
    letter-spacing: 4px;
}

@-webkit-keyframes blink {
    0% {
        opacity: 0.1;
    }

    100% {
        opacity: 1;
    }
}

.main_container .flash_light {
    width: 50px;
    height: 50px;
    border-radius: 45px;
    background: #F9E381;
    -webkit-animation: blink 0.7s alternate infinite;
}
</style>
