const el = document.querySelector("body");

fetch("/data/get")
    .then((response) => response.json())
    .then((data) => {
        for (row of data.results) {
            el.innerHTML += "<br> " + row.value;
        }
    });

// x=time, y=altitude
let datasets1 = [
    /*{ x: 5, y: 20 },
  { x: 15, y: 15 },
  { x: 20, y: 10 },
  { x: 25, y: 5 },
  { x: 30, y: -5 },
  { x: 40, y: -30 },
  { x: 50, y: 40 },
  { x: 60, y: 50 },
  { x: 70, y: 70 },*/
];

// x=temperature, y=altitude
let datasets2 = [
    /*{ x: 10, y: 20 },
  { x: 15, y: 15 },
  { x: 20, y: 10 },
  { x: 25, y: 22 },
  { x: 30, y: 25 },
  { x: 40, y: 20 },
  { x: 50, y: 15 },
  { x: 60, y: 20 },
  { x: 70, y: 23 },*/
];

// x=temperature, y=pressure
let datasets3 = [
    /* { x: 10, y: 20 },
  { x: 15, y: 15 },
  { x: 20, y: 10 },
  { x: 25, y: 5 },
  { x: 30, y: -5 },
  { x: 40, y: 30 },
  { x: 50, y: 40 },
  { x: 60, y: 50 },
  { x: 70, y: 70 },*/
];
// x=pressure, y=altitude
let datasets4 = [
    /*{ x: 10, y: 20 },
  { x: 15, y: 15 },
  { x: 20, y: 10 },
  { x: 25, y: 5 },
  { x: 30, y: -5 },
  { x: 40, y: 30 },
  { x: 50, y: 40 },
  { x: 60, y: 50 },
  { x: 70, y: 70 },*/
];


// Opsætning de forskellige målte værdier
let time = [1];

let altitude = [2];

let temperature = [3];

let pressure = [4];

let i = 0;

// Opdatere graferne med nye værdier
function updateData(time, altitude, temperature, pressure) {
    console.log(altitude);
    datasets1.push({ x: time, y: altitude });
    datasets2.push({ x: temperature, y: altitude });
    datasets3.push({ x: temperature, y: pressure });
    datasets4.push({ x: pressure, y: altitude });

    console.log(datasets3);
    pressure_altitude.update();
    temp_altitude.update();
    temp_pressure.update();
    time_altitude.update();
}
const btn = document.querySelector("button");

btn.addEventListener("click", getData);
// Få random tal til afprøvning af graf - og simulering af hentning af data
function getData() {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let z = Math.random() * 100;
    // i altal gange trykt på knappen
    i++;
    console.log(x);
    updateData(i, x, y, z);
}
