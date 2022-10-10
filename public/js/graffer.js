//import Chart from "chart.js/auto";

let graf1 = document.getElementById("time_altitude").getContext("2d");
let graf2 = document.getElementById("temp_altitude").getContext("2d");
let graf3 = document.getElementById("temp_pressure").getContext("2d");

const labels = [];
for (let i = 0; i < 12; ++i) {
  labels.push(i.toString());
}

let time_altitude = new Chart(graf1, {
  // The type of chart we want to create
  type: "line",
  // The data for our dataset
  data: {
    //labels: labels,
    datasets: [
      {
        label: "Tid vs. Højde",
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 15 },
          { x: 20, y: 10 },
          { x: 25, y: 5 },
          { x: 30, y: -5 },
          { x: 40, y: 30 },
        ],

        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  },
  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Højde",
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            stepSize: 1,
          },
          scaleLabel: {
            display: true,
            labelString: "Tid",
          },
        },
      ],
    },
  },
});

let temp_altitude = new Chart(graf2, {
  // The type of chart we want to create
  type: "",
  // The data for our dataset
  data: {},
  // Configuration options go here
  options: {},
});

let temp_pressure = new Chart(graf3, {
  // The type of chart we want to create
  type: "",
  // The data for our dataset
  data: {},
  // Configuration options go here
  options: {},
});

/*
https://stackoverflow.com/questions/39399264/in-chartjs-is-it-possible-to-change-the-line-style-between-different-points

const labels = [1, 2, 3, 4, 5, 6];
const values = [12, 19, 3, 5, 2, 3];
const data = labels.map((label, index) => ({ x: label, y: values[index]}));


https://wpdatatables.com/chart-js-examples/
*/
