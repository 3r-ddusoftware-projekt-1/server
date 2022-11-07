Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.defaultFontStyle = 550;


// setup block
const data1 = {
    datasets: [
        {
            label: "Tid vs. Højde",
            // x=time, y=altitude
            data: datasets1,
            showLine: true,
            fill: false,

            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
        },
    ],
};

const data2 = {
    datasets: [
        {
            label: "Temperatur vs. Højde",
            // x=temperature, y=altitude
            data: datasets2,
            showLine: true,
            fill: false,

            backgroundColor: "rgb(0, 102, 255)",
            borderColor: "rgb(0, 102, 255)",
        },
    ],
};

const data3 = {
    datasets: [
        {
            label: "Temperatur vs. Tryk",
            // x=temperature, y=pressure
            data: datasets3,
            showLine: true,
            fill: false,

            backgroundColor: "rgb(51, 204, 51)",
            borderColor: "rgb(51, 204, 51)",
        },
    ],
};

const data4 = {
    datasets: [
        {
            label: "Tryk vs. Højde",
            // x=pressure, y=altitude
            data: datasets4,

            showLine: true,
            fill: false,

            backgroundColor: "rgb(153, 51, 255)",
            borderColor: "rgb(153, 51, 255)",
        },
    ],
};

// config block
const config1 = {
    // The type of chart we want to create
    type: "scatter",
    // The data for our dataset
    data: data1,
    // Configuration options go here
    options: {
        responsive: true,
        title: {
            display: true,
            text: "Tiden i forhold til Højden",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Tid [s]",
                    },
                },
            ],
            yAxes: [
                {
                    type: "linear",
                    scaleLabel: {
                        display: true,
                        labelString: "Højde [m]",
                    },
                },
            ],
        },
        elements: {
            line: {
                tension: 0,
            },
        },
    },
};

const config2 = {
    // The type of chart we want to create
    type: "scatter",
    // The data for our dataset
    data: data2,
    // Configuration options go here
    options: {
        responsive: true,

        title: {
            display: true,
            text: "Temperaturen i forhold til Højden",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Temperatur [℃]",
                    },
                },
            ],
            yAxes: [
                {
                    type: "linear",
                    scaleLabel: {
                        display: true,
                        labelString: "Højde [m]",
                    },
                },
            ],
        },

        elements: {
            line: {
                tension: 0,
            },
        },
    },
};
const config3 = {
    // The type of chart we want to create
    type: "scatter",
    // The data for our dataset
    data: data3,
    // Configuration options go here
    options: {
        responsive: true,

        title: {
            display: true,
            text: "Temperaturen i forhold til Trykket",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Temperatur [℃]",
                    },
                },
            ],
            yAxes: [
                {
                    type: "linear",
                    scaleLabel: {
                        display: true,
                        labelString: "Tryk",
                    },
                },
            ],
        },

        elements: {
            line: {
                tension: 0,
            },
        },
    },
};
const config4 = {
    // The type of chart we want to create
    type: "scatter",
    // The data for our dataset
    data: data4,
    // Configuration options go here
    options: {
        responsive: true,

        title: {
            display: true,
            text: "Trykket i forhold til højden",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Tryk",
                    },
                },
            ],
            yAxes: [
                {
                    type: "linear",
                    scaleLabel: {
                        display: true,
                        labelString: "Højde [m]",
                    },
                },
            ],
        },

        elements: {
            line: {
                tension: 0,
            },
        },
    },
};
// render init block
const time_altitude = new Chart(
    document.getElementById("time_altitude"),
    config1
);
const temp_altitude = new Chart(
    document.getElementById("temp_altitude"),
    config2
);
const temp_pressure = new Chart(
    document.getElementById("temp_pressure"),
    config3
);
const pressure_altitude = new Chart(
    document.getElementById("pressure_altitude"),
    config4
);
