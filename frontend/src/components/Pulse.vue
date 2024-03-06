<template>
    <div class="pulse"></div>
    <div class="pulse2"></div>
</template>

<style scoped>
.pulse {
    position: absolute;
    height: 20vh;
    width: 20vh;
    opacity: 0;
    border: 5px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
}

.pulse2 {
    position: absolute;
    height: 20vh;
    width: 20vh;
    opacity: 0;
    border: 5px solid white;
    border-radius: 50%;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 3s;
}

@-webkit-keyframes pulsate {
    0% {
        transform: scale(1, 1);
        border-radius: 50%;
        opacity: 0.0;
        rotate: 0deg;
        border: 5px solid white;
    }

    50% {
        opacity: 1.0;
        border-radius: 40%;
        rotate: 100deg;
        border: 1px solid white;
    }

    100% {
        transform: scale(2, 2);
        opacity: 0.0;
        border-radius: 35%;
        rotate: 60deg;
        border: 1px solid white;
    }
}
</style>