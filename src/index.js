import "./styles.css";
import { getCityName, form} from "./locationFinder.js"
import { getData } from "./getWeather.js";
import { displayWeatherInfo,displayWeatherGIF } from "./displayWeather.js";
import { getWeatherGIF } from "./getWeatherGIF.js";


console.log("Webpack checked for boilerPlate");


form.addEventListener(`submit`,async (e)=>{
    e.preventDefault();
    const cityName=getCityName();
    const weatherData= await getData(cityName);
    console.log(weatherData);
    displayWeatherInfo(weatherData);
    const weatherGIFurl=await getWeatherGIF(weatherData.gifTitle);
    console.log(weatherGIFurl.url);
    displayWeatherGIF(weatherGIFurl.url);
    
    
})

// can be document
// Invalid city error message
// Loading spinner/text
// Press Enter to search (might already work because of the form)
// Hide placeholder weather values initially (done)
// Responsive/mobile layout
// Unit toggle (°C / °F)
