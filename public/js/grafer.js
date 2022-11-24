// Til at gøre alt skriften sort og tykkere
Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.defaultFontStyle = 550;

// Sørger for at grafen ikke bliver udfyldt under stregen
Chart.defaults.global.elements.line.fill = false;
// Sørger for at stregen ikke buer
Chart.defaults.global.elements.line.tension = 0;

Chart.defaults.global.title.padding = 2;
Chart.defaults.global.animation = false;

// setup block
const data1 = {
    datasets: [
        {
            label: "Tid vs. Højde",
            // x=time, y=altitude
            data: datasets1,

            //Sørger for at den laver en streg mellem punkterne
            showLine: true,

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

            //Sørger for at den laver en streg mellem punkterne
            showLine: true,

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

            //Sørger for at den laver en streg mellem punkterne
            showLine: true,

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

            //Sørger for at den laver en streg mellem punkterne
            showLine: true,

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
        title: {
            //viser overskriften
            display: true,
            text: "Tiden i forhold til Højden",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        // viser navnet for x-aksen
                        display: true,
                        labelString: "Tid [s]",
                        padding: 1,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        //viser navnet for y-aksen
                        display: true,
                        labelString: "Højde [m]",
                        padding: 2,
                    },
                },
            ],
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
                        padding: 1,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Højde [m]",
                        padding: 2,
                    },
                },
            ],
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
                        padding: 1,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Tryk",
                        padding: 2,
                    },
                },
            ],
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
                        padding: 1,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Højde [m]",
                        padding: 2,
                    },
                },
            ],
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
