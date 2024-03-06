<script setup>
import { ref } from "vue"

const lineSeries = [
    {
        data: [null, null, null, 0.76, 0.84, 0.9, 0.6, null],
    },
    {
        data: [0.23, 0.33, 0.5, null, null, null, 0.6, 0.5],
    }]


const buildGraphOptions = (type) => {
    return {
        colors: ['#2E93fA', '#eb4034'],
        chart: {
            type: type,
            toolbar: false,
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                rangeBarGroupRows: true,
            }
        },
        tooltip: {
            enabled: false,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        },
        xaxis: {
            show: true,
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: true,
            axisTicks: {
                show: false
            }
        },
        markers: 0
    }
}

const rangeSeries = [
    {
        name: "a",
        data: [
            {
                x: "Mon",
                y: [10, 12]
            },
            {
                x: "Mon",
                y: [15, 16],
            },
            {
                x: "Tue",
                y: [13, 18]
            },
            {
                x: "Wed",
                y: [10, 12]
            },
            {
                x: "Thu",
                y: [9, 12]
            },
            {
                x: "Fri",
                y: [10, 12]
            },
            {
                x: "Sat",
                y: [4, 8]
            },
            {
                x: "Sun",
                y: [10, 12]
            }
        ]
    },
    {
        name: "b",
        data: [
            {
                x: "Mon",
                y: [12, 15]
            },
            {
                x: "Tue",
                y: [20, 21]
            },
            {
                x: "Wed",
                y: [13, 15]
            }
        ]
    }
]


const graphView = ref(0)
</script>


<template>
    <div class="container">
        <div class="view-menu">
            <div class="view-item" :class = "graphView == 0 ? 'active' : ''" @click="graphView = 0">Day</div>
            <div class="view-item" :class = "graphView == 1 ? 'active' : ''" @click="graphView = 1">Week</div>
            <div class="view-item" :class = "graphView == 2 ? 'active' : ''" @click="graphView = 2">Month</div>
        </div>
        <div class="graph-container">
            <center>
                <apexchart v-if="graphView == 0" width="45%" height="210%" :options="buildGraphOptions('line')" :series="lineSeries"></apexchart>
                <apexchart v-if="graphView == 1" width="45%" height="210%" :options="buildGraphOptions('rangeBar')" :series="rangeSeries"></apexchart>
                <apexchart v-if="graphView == 2" width="45%" height="210%" :options="buildGraphOptions('rangeBar')" :series="rangeSeries"></apexchart>
            </center>
        </div>
        <div class="stats-container">
            <div class="stat-card">
                <div class="stat-icon"></div>
                <div class="stat">45m</div>
                <div class="stat-name">Average focus time</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"></div>
                <div class="stat">0.72</div>
                <div class="stat-name">Average focus score</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"></div>
                <div class="stat">2h</div>
                <div class="stat-name">Total hours in focus</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: white;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8% 0 0 0;
} 

.graph-container {
    width: 100%;
    padding: 2% 0 0 0;
}

.view-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.view-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: rgb(155, 155, 156);
    transition: all linear 0.1s;
    padding: 1% 2% 0 0;
}

.view-item:hover {
    color: white;
}

.view-item.active {
    color: white;
}

.stats-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
}

.stat-card {
    padding: 3%;
    border-radius: 10px;
    background-color: rgb(29, 30, 35);
    margin-right: 2%;
    margin-bottom: 2%;
    width: 25%;
}

.stat {
    font-size: 1.4rem;
    font-weight: 600;
}

.stat-name {
    color: rgb(155, 155, 156);
}
</style>