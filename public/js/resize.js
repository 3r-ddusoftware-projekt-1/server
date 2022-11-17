const grafBoth = document.querySelectorAll(".chart1, .chart2");
const graf = document.querySelectorAll(".chart");

// sørger for at funktionen bliver kaldt i det siden loader, og ikke først når man ændre vinuets størrelse
resize();

window.addEventListener("resize", resize);
// Ændre forholdene på graferne når vinduet bliver en hvis størrelse
function resize() {
    var lenght1 = grafBoth.length;
    var lenght2 = graf.length;

    if (window.matchMedia("(max-width: 600px)").matches) {
        for (i = 0; i < lenght1; i++) {
            // Sørger for at graferne ligger under hinanden
            grafBoth[i].style.flexWrap = "wrap";
        }
        for (i = 0; i < lenght2; i++) {
            graf[i].style.width = "95%";
        }
    } else {
        for (i = 0; i < lenght1; i++) {
            grafBoth[i].style.flexWrap = "nowrap";
        }
        for (i = 0; i < lenght2; i++) {
            graf[i].style.width = "46%";
        }
    }
}
