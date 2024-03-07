<script setup>
import { ref } from "vue"

const lineSeries = [
    {
        data: [null, null, null, 0.76, 0.84, 0.9, 0.6, null],
    },
    {
        data: [0.23, 0.33, 0.5, null, null, null, 0.6, 0.5],
    }]


const buildGraphOptions = (type, xTitle, yTitle) => {
    return {
        colors: ['#119ff7', '#eb4034'],
        chart: {
            type: type,
            fontFamily: "Roboto, sans-serif",
            toolbar: false,
            zoom: {
                enabled: false
            },
            foreColor: "white"
        },
        plotOptions: {
            bar: {
                rangeBarGroupRows: true,
                columnWidth: "20%"
            }
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.3,
                opacityTo: 0
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
            min: 0,
            axisTicks: {
                show: false
            },
            title: {
                text: xTitle,
                style: {
                    fontWeight: 400
                }
            }
        },
        yaxis: {
            show: true,
            min: 0,
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: false
            },
            title: {
                text: yTitle,
                style: {
                    fontWeight: 400
                }
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
        <h1>Focus Analysis</h1>
        <div class="row">
            <div class="stat-container">
                <div class="stat">
                    <div class="stat-icon">
                        <v-icon scale=1.5 name="co-user"></v-icon>
                    </div>
                    <div>
                        <div class="stat-name">Profile</div>
                        <div class="stat-value">John Doe</div>
                    </div>
                </div>
                <div class="stat">
                    <div class="stat-icon">
                        <v-icon scale=1.5 name="md-timer-outlined"></v-icon>
                    </div>
                    <div>
                        <div class="stat-name">Average Focus Duration</div>
                        <div class="stat-value">42m</div>
                    </div>
                </div>
                <div class="stat">
                    <div class="stat-icon">
                        <v-icon scale=1.5 name="ri-focus-line"></v-icon>
                    </div>
                    <div>
                        <div class="stat-name">Focus score</div>
                        <div class="stat-value">75%</div>
                    </div>
                </div>
            </div>
            <div class="graph-container" style="width:70%">
                <apexchart width="100%" height="100%" :options="buildGraphOptions('rangeBar', 'Day', 'Time')"
                    :series="rangeSeries"></apexchart>
            </div>
        </div>
        <br>
        <div class="graph-container" style="width:97%;">
            <apexchart width="100%" height="190%" :options="buildGraphOptions('area', 'Time', 'Focus')"
                :series="lineSeries"></apexchart>
        </div>
    </div>
    <!--
    
        <div class="graph-container">
            <apexchart width="100%" height="100%" :options="buildGraphOptions('line', 'Time', 'Focus')" :series="lineSeries"></apexchart>
        </div>
    -->
</template>

<style scoped>
h1 {
    color: white;
}

.container {
    width: 85%;
    display: flex;
    flex-direction: column;
}

.day-select {
    color: white;
    background-color: #121316;
    padding: 1%;
    border: none;
    border-radius: 10px;
    float: right;
    z-index: 100;
}

.row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.stat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35%;
}

.stat {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(25, 26, 29);
    width: 90%;
    border-radius: 10px;
    padding: 2.5%;
    margin-bottom: 1%;
    color: white
}

.stat-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 2%;
    border-radius: 10px;
    margin-right: 2%;
}

.stat-name {
    font-weight: 400;
}

.stat-value {
    font-weight: 600;
    font-size: 2rem;
    margin-top: 2%;
}


.graph-container {
    background-color: rgb(25, 26, 29);
    border-radius: 10px;
    padding: 1.5%;
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
</style>