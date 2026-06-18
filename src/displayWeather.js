const dataTable=document.querySelector(`#dataTable`);
dataTable.style.display=`none`; 

function displayWeatherInfo(weatherData) {


dataTable.style.display=`block`; 
  const addressInfoData = document.querySelector(`#addressInfo`);
  const temperatureData = document.querySelector(`#temperature`);
  const feelsLikeData = document.querySelector(`#feelsLike`);
  const conditionsData = document.querySelector(`#conditions`);
  const windSpeedData = document.querySelector(`#windSpeed`);
  const descriptionData=document.querySelector(`#description`)
  temperatureData.textContent = `${weatherData.temp}°C`;
  feelsLikeData.textContent = `${weatherData.feelsLike}°C`;
  conditionsData.textContent = `${weatherData.conditions}`;
  windSpeedData.textContent = `${weatherData.windSpeed} kM/h`;
  addressInfoData.textContent = `City: ${weatherData.resolvedAddress}`;
  descriptionData.textContent=`Description: ${weatherData.description}`
}


function displayWeatherGIF(GIFurl){
    const weatherGIF=document.querySelector(`#weatherGIF`);
    const gifHolder=document.createElement(`img`);
    gifHolder.style.width=`600px`;
    gifHolder.style.height=`300px`;
    gifHolder.src=`${GIFurl}`
    gifHolder.alt=`GIF for the weather`
    weatherGIF.replaceChildren();
    weatherGIF.appendChild(gifHolder)
}
export { displayWeatherInfo,displayWeatherGIF };
