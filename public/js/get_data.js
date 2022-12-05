const el = document.querySelector("body");

// x=time, y=altitude
let datasets1 = [];

// x=temperature, y=altitude
let datasets2 = [];

// x=temperature, y=pressure
let datasets3 = [];

// x=pressure, y=altitude
let datasets4 = [];

function updateDataList(data) {
    for (i in data) {
        updateData(
            [data[i].timestamp],
            [data[i].altitude],
            [data[i].temperature],
            [data[i].pressure]
        );
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
let i = 0;
function getData() {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let z = Math.random() * 100;
    // i altal gange trykt på knappen
    i++;
    console.log(i);
    updateData(i, x, y, z);
}
