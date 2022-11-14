const el = document.querySelector("body");

// fetch("/api/get")
//     .then((response) => response.json())
//     .then((data) => {
//         for (row of data.results) {
//             el.innerHTML += "<br> " + row.value;
//         }
//     });

// x=time, y=altitude
let datasets1 = [];

// x=temperature, y=altitude
let datasets2 = [];

// x=temperature, y=pressure
let datasets3 = [];

// x=pressure, y=altitude
let datasets4 = [];

// Opsætning de forskellige målte værdier
let time = [];
let altitude = [];
let temperature = [];
let pressure = [];

function updateDataList(data) {
    console.log(data);
    console.log(data.length);

    for (i in data) {
        updateData([data[i].timestamp], [i], [data[i].temperature], [i]);
    }
}

// Opdatere graferne med nye værdier
function updateData(time, altitude, temperature, pressure) {
    datasets1.push({ x: time, y: altitude });
    datasets2.push({ x: temperature, y: altitude });
    datasets3.push({ x: temperature, y: pressure });
    datasets4.push({ x: pressure, y: altitude });

    pressure_altitude.update();
    temp_altitude.update();
    temp_pressure.update();
    time_altitude.update();
}

const btn = document.querySelector("button");

btn.addEventListener("click", getData);
// Få random tal til afprøvning af graf - og simulering af hentning af data
function getData() {
    let i = 0;
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let z = Math.random() * 100;
    // i altal gange trykt på knappen
    i++;
    console.log(x);
    updateData(i, x, y, z);
}
