
const travelInitialInput = document.getElementById("travelInitialInput");
const travelDestinationInput = document.getElementById("travelDestinationInput"); // store input variables
travelInitialInput.addEventListener("change", () => {
  console.log(travelInitialInput.value); 
}); 
travelDestinationInput.addEventListener("change", () => {
  console.log(travelDestinationInput.value);
}); // take user input once finished "unfocused"





//const btnGet = document.querySelector("#btnGet") //Click event listener - destination to use for weather api
//btnGet.addEventListener("click", e => {
//console.log(travelDestinationInput, travelInitialInput)
//});

//console.log(WEATHER_API_KEY);
//let button = document.querySelector("button"); // returns first element of specified selector

//
//}

//addEventListener("input", () => {});
//oninput = (event) => {