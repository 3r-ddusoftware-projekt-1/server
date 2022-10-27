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

let time = [1,2,3,4,5,6,7,8,9];

let altitude = [11,12,13,14,15,16,17,18,19];

let temperature = [21,22,23,24,25,26,27,28,29];

let pressure = [31,32,33,34,35,36,37,38,39];

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    for(i=0; i<time.length; i++){
        
        datasets1.push({ x: time[i], y: altitude[i] });
        datasets2.push({ x: temperature[i], y: altitude[i] });
        datasets3.push({ x: temperature[i], y: pressure[i] });
        datasets4.push({ x: pressure[i], y: altitude[i] });
    }
    pressure_altitude.update();
    temp_altitude.update();
    temp_pressure.update();
    time_altitude.update();
    console.log(datasets4);
});
