let graf1 = document.getElementById("time_altitude").getContext("2d");
let graf2 = document.getElementById("temp_altitude").getContext("2d");
let graf3 = document.getElementById("temp_pressure").getContext("2d");
let graf4 = document.getElementById("pressure_altitude").getContext("2d");

let time_altitude = new Chart(graf1, {
  // The type of chart we want to create
  type: "scatter",
  // The data for our dataset
  data: {
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
  },
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
          ticks: {
            stepSize: 5,
          },
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
});

let temp_altitude = new Chart(graf2, {
  // The type of chart we want to create
  type: "scatter",
  // The data for our dataset
  data: {
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
  },
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
          ticks: {
            stepSize: 5,
          },
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
});

let temp_pressure = new Chart(graf3, {
  // The type of chart we want to create
  type: "scatter",
  // The data for our dataset
  data: {
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
  },
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
          ticks: {
            stepSize: 5,
          },
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
});



let pressure_altitude = new Chart(graf4, {
  // The type of chart we want to create
  type: "scatter",
  // The data for our dataset
  data: {
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
  },
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
          ticks: {
            stepSize: 5,
          },
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
});


