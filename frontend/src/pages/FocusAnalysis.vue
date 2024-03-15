<script setup>
import { ref } from "vue"

const lineSeries = [
    {
        name: "Focus",
        data: [null, null, null, 0.76, 0.84, 0.9, 0.6, null, null, null, null, null, null, null, 0.6, 0.8, 0.95, 0.95, 0.90, null, null, null, null],
    },
    {
        name: "Unfocus",
        data: [0.23, 0.33, 0.5, null, null, null, 0.6, 0.5, null, null, null, null, 0.2, 0.4, 0.6, null, null, null, null, null, null, null, null, null],
    }]


const buildGraphOptions = (type, title, xTitle, yTitle) => {
    return {
        colors: ['#4663e7', '#eb4034'],
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
                columnWidth: "5%"
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
            show: true,
            position: "right"
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
        name: "Focus",
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
        name: "Unfocus",
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
                    <div class="stat-name">Profile</div>
                    <div class="stat-value">John Doe</div>
                </div>
                <div class="row">
                    <div class="stat">
                        <div class="stat-value">75%</div>
                        <div class="stat-name">Focus score</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">42m</div>
                        <div class="stat-name">Average Focus Duration</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">48s</div>
                        <div class="stat-name">Shift Time</div>
                    </div>
                </div>
            </div>
            <div class="graph-container" style="width:53%;height:85%">
                <apexchart width="100%" height="100%" :options="buildGraphOptions('rangeBar', 'Week Overview', 'Day', 'Time')"
                    :series="rangeSeries"></apexchart>
            </div>
        </div>
        <br>
        <div class="graph-container" style="width:96%;">
            <apexchart width="100%" height="190%" :options="buildGraphOptions('area', 'Focus Statistics', 'Time', 'Focus')"
                :series="lineSeries"></apexchart>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: white;
}

.container {
    width: 85%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
}

.row {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.stat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #4663e7;
    border-radius: 10px;
    padding: 1%;
    color: white;
    width: 40%;
    height: 85%;
    margin-right: 1%;
}

.stat {
    margin-left: 2%;
    margin-right: 8%;
}

.stat-icon {
    display: flex;
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
    background-color: #1a1c1e;
    border-radius: 10px;
    padding: 1%;
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