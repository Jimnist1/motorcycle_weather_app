const app = {
init: () => {

    document
    .getElementById("btnGet")
    .addEventListener("click", app.fetchWeather);
}
fetchWeather: (ev) => {...
},
};



const departInput = document.getElementById("travelInitialInput");
const arriveInput = document.getElementById("travelDestinationInput");

departInputString = departInput.toString();
arriveInputString = arriveInput.toString();



const button = document.querySelector("button");






// https://api.open-meteo.com/v1/forecast?latitude=-36.85&longitude=174.76&hourly=temperature_2m