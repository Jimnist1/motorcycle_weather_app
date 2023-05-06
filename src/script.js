//import


//inputs
const travelInitialInput = document.getElementById("travelInitialInput");
const travelDestinationInput = document.getElementById("travelDestinationInput"); // store input variables
travelInitialInput.addEventListener("change", () => {
  console.log(travelInitialInput.value); 
}); 
travelDestinationInput.addEventListener("change", () => {
  console.log(travelDestinationInput.value);
}); // take user input once finished "unfocused"

//button to get info

//weather API algorithm


async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://api.openweathermap.org/data/2.5/weather?lat=${-36.8509}&lon=${174.7645}&units=metric&appid=${process.env.WEATHER_API_KEY}', {}).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});


//const btnGet = document.querySelector("#btnGet") //Click event listener - destination to use for weather api
//btnGet.addEventListener("click", e => {
//console.log(travelDestinationInput, travelInitialInput)
//});

