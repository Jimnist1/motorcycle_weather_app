
const travelInitialInput = document.querySelector("travelInitialInput");
const travelDestinationInput = document.querySelector("travelDestinationInput");
const travelInitiallog = document.getElementById("travelInitialInput");
const travelDestinationlog = document.getElementById("travelDestinationInput");
    input.addEventListener("input", updateValue)
    function updateValue(e) {
  log.textContent = e.target.value; //Retrieve typing event
}
const btnGet = document.querySelector("#btnGet") //Click event listener - destination to use for weather api
departInput.addEventListener()
btnGet.addEventListener("click", e => {
  console.log(departInput, arriveInput)
});

console.log(WEATHER_API_KEY);
//let button = document.querySelector("button"); // returns first element of specified selector

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={WEATHER_API_KEY}"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}

//addEventListener("input", () => {});
//oninput = (event) => {