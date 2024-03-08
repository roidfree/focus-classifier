<script setup>
import { ref } from "vue"

let focus = ref(0)
let statusColor = ref("grey")

let timer = ref(25 * 60)
let countdown = ref(false)

const calculateFocus = async () => {
    if (!countdown.value) return;

    let data = await fetch("http://localhost:3000/get-focus")
    let n = await data.text()
    focus.value = Number(n).toFixed(2)

    if (focus.value < 0.7) {
        statusColor.value = "#ff311f"
    } else {
        statusColor.value = "#03fc4e"
    }
}

const decTimer = () => {
    if (timer.value == 0) return;
    if (!countdown.value) return;

    timer.value -= 1
}

const formatTime = (sec) => {
    let mins = Math.floor(sec / 60)
    let secs = sec - (mins * 60)

    mins = mins < 10 ? `0${mins}` : mins
    secs = secs < 10 ? `0${secs}` : secs

    return `${mins}:${secs}`
}


let focusInterval = null
let timerInterval = setInterval(decTimer, 1000)

const toggleCountdown = async () => {
    countdown.value = !countdown.value
    if (!countdown.value) {
        statusColor.value = "grey"
        clearInterval(focusInterval)
    }else {
        await calculateFocus()
        focusInterval = setInterval(calculateFocus, 500)
    }
}

</script>

<template>
    <div class="container">
        <div class="pulse-container">
            <div class='ring' :style="'border-color:' + statusColor">
                <div class="start" @click="toggleCountdown()" v-if="!countdown">▷</div>
                <div class="ring-value" v-if="countdown">{{ Math.floor(focus * 100) }}</div>
            </div>
            <div class="pulse" :style="'border-color:' + statusColor"></div>
            <div class="pulse2" :style="'border-color:' + statusColor"></div>
            <div class="pulse3" :style="'border-color:' + statusColor"></div>
        </div>
        <div class="timer-container" v-if="countdown">
            <div class="timer">{{ formatTime(timer) }}</div>
            <button class="btn" @click="toggleCountdown()"> | |</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    color: white;
    width: 85%;
    height: 100%;
}

.start {
    font-size: 2rem;
    color: rgb(155, 155, 156);
    z-index: 99;
    transition: all 0.1s linear;
    cursor: pointer
}

.start:hover {
    color: white;
}

.btn {
    border: none;
    color: white;
    background-color: transparent;
    padding: 10%;
    font-size: 0.6rem;
    border-radius: 5px;
    margin-top: 5%;
    transition: all 0.2s ease-in-out;
    z-index:1000;
}

.btn:hover {
    color: black;
    background-color: white;
}

.pulse-container {
    display: flex;
    justify-content: center;
    margin-top: 18%;
    width: 80%;
}

.timer-container {
    position: fixed;
    right: 5%;
    top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
   font-size: 1.2rem;
}

.ring {
    display: flex;
    position: absolute;
    height: 25vh;
    width: 25vh;
    border: 5px solid white;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
}

.ring-value {
    font-size: 2.5rem;
}

.pulse {
    position: absolute;
    height: 25vh;
    width: 25vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    transition: all 0.2s ease-in-out;
}

.pulse2 {
    position: absolute;
    height: 25vh;
    width: 25vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate2 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 0.25s;
    transition: all 0.2s ease-in-out;
}

.pulse3 {
    position: absolute;
    height: 25vh;
    width: 25vh;
    opacity: 0;
    border: 1px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate3 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 0.75s;
    transition: all 0.2s ease-in-out;
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