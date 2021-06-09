"use strict"

window.onload = function() {
  const btn = document.getElementById("theButton");
  btn.onclick = theButtonClicked;
}

function theButtonClicked() {
  const dateSelectionField = document.getElementById("dateSelection");
  let dateStr = dateSelectionField.value;

  //dateStr's current format is yyyy-mm-dd and we need to convert
  //to either yyyy/mm/dd or mm/dd/yyyy so that JS is never off
  //by one day depending on the time we run the code and the timezone we live in.

  //datestr is yyyy-mm-dd
  let mo = dateStr.substr(5,2); //returns mm
  let da = dateStr.substr(8,2) //return 
  let yr = dateStr.substr(0,4) // return yyyy

  let reformattedDateStr = mo + "/" + da + "/" + yr;

  let dateSelected = new Date(reformattedDateStr);
  let dayOfWeek = dateSelected.getDay(); //0 = Sun, 1 = Mon, ...

  const resultsPara = document.getElementById("results");
  resultsPara.innerHTML = dateSelected + "day of the week = " + dayOfWeek;
}