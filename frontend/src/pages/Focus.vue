<script setup>
import { ref } from "vue"
import Pulse from "@/components/Pulse.vue";

let focus = ref(0)
let statusColor = ref("red")

const calculateFocus = async () => {
    let data = await fetch("http://localhost:3000/get-focus")
    let n = await data.text()
    focus.value = Number(n).toFixed(2)

    if (focus.value < 0.5) {
        statusColor.value = "red"
    }else {
        statusColor.value = "green"
    }
}
setInterval(calculateFocus, 500)

</script>

<template>
    <div class="container">
        <div class="pulse-container">
                <div class='ring' :style="'border-color:' + statusColor">
                    <h1 :style="'color:' + statusColor">{{ Math.floor(focus * 100) }}</h1>
                </div>
                <div class="pulse" :style="'border-color:' + statusColor"></div>
                <div class="pulse2" :style="'border-color:' + statusColor"></div>
                <div class="pulse3" :style="'border-color:' + statusColor"></div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 85%;
    height: 100%;
}

.pulse-container {
    display: flex;
    justify-content: center;
    margin-top: 18%;
    width: 80%;
}

.ring {
    display: flex;
    position: absolute;
    height: 20vh;
    width: 20vh;
    border: 5px solid white;
    border-radius: 50%; 
    justify-content: center;
    align-items: center;
}

.pulse {
    position: absolute;
    height: 20vh;
    width: 20vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
}

.pulse2 {
    position: absolute;
    height: 20vh;
    width: 20vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate2 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 0.25s;
}

.pulse3 {
    position: absolute;
    height: 20vh;
    width: 20vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate3 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 0.75s
}


@-webkit-keyframes pulsate {
    0% {
        transform: scale(1, 1);
        border-radius: 50%;
        opacity: 0.0;
        rotate: 0deg;
    }

    50% {
        opacity: 1.0;
        border-radius: 40%;
        rotate: 100deg;
    }

    100% {
        transform: scale(2.5, 2.5);
        opacity: 0.0;
        border-radius: 35%;
        rotate: 60deg;
    }
}

@-webkit-keyframes pulsate2 {
    0% {
        transform: scale(1, 1);
        border-radius: 50%;
        opacity: 0.0;
        rotate: 0deg;
    }

    50% {
        opacity: 1.0;
        border-radius: 40%;
        rotate: 60deg;
    }

    100% {
        transform: scale(2.5, 2.5);
        opacity: 0.0;
        border-radius: 30%;
        rotate: 100deg;
    }
}

@-webkit-keyframes pulsate3 {
    0% {
        transform: scale(1, 1);
        border-radius: 50%;
        opacity: 0.0;
        rotate: 0deg;
    }

    50% {
        opacity: 1.0;
        border-radius: 40%;
        rotate: 60deg;
    }

    100% {
        transform: scale(2.5, 2.5);
        opacity: 0.0;
        border-radius: 30%;
        rotate: 100deg;
    }
}
</style>