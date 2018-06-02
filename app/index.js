import clock from "clock";
import document from "document";

const separator = document.getElementById("separator"),
    hours1 = document.getElementById("hours1"),
    hours2 = document.getElementById("hours2"),
    mins1 = document.getElementById("mins1"),
    mins2 = document.getElementById("mins2");

clock.granularity = "seconds";

clock.ontick = evt => {
  setHours(evt.date.getHours());
  setMins(evt.date.getMinutes());
  separator.style.display = (evt.date.getSeconds() % 2 === 0 ? "inline" : "none");
}

function setHours(val) {
  drawDigit(Math.floor(val / 10), hours1);
  drawDigit(Math.floor(val % 10), hours2);
}

function setMins(val) {
  drawDigit(Math.floor(val / 10), mins1);
  drawDigit(Math.floor(val % 10), mins2);
}

function setDate(val) {
  drawDigit(Math.floor(val / 10), date1);
  drawDigit(Math.floor(val % 10), date2);
}

function drawDigit(val, place) {
  place.image = `${val+48}.png`;
}
