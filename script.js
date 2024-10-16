let click = 0

window.onload('load', setInterval(changeColor, 10000)) 

function changeColor() {
    ++click
    console.log(click)
    if (click == 1) {
        document.getElementById("trafficLights").style.background = "#FFDF00"
    } else if (click == 2) {
        document.getElementById("trafficLights").style.background = "#008000"
    } else {
        click = 0
        document.getElementById("trafficLights").style.background = "#ff0000"
    }
}