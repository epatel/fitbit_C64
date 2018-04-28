import { me } from "appbit";
import clock from "clock";
import document from "document";
import * as util from "./utils";

// TIME
let separator = document.getElementById("separator");
let hours1 = document.getElementById("hours1");
let hours2 = document.getElementById("hours2");
let mins1 = document.getElementById("mins1");
let mins2 = document.getElementById("mins2");

clock.granularity = "seconds";

clock.ontick = evt => {
  let d = evt.date;

  // HOURS
  let hours = d.getHours();
  hours = util.zeroPad(hours);

  setHours(hours);

  // MINUTES
  let minute = ("0" + d.getMinutes()).slice(-2);
  setMins(minute);

  // BLINK SEPARATOR
  setSeparator(d.getSeconds());
}

// Blink time separator
function setSeparator(val) {
  separator.style.display = (val % 2 === 0 ? "inline" : "none");
}

function setHours(val) {
  if (val > 9) {
    drawDigit(Math.floor(val / 10), hours1);
  } else {
    drawDigit("", hours1);
  }
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
