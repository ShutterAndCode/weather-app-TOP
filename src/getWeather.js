
async function getData(cityName) {
  try {
    const encodedCity=encodeURIComponent(cityName);
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedCity}?unitGroup=metric&key=${process.env.VISUAL_CROSSING_KEY}&contentType=json`,
    );
    if (!response.ok) {
      throw new Error("Could not find city");
    }
    const dataJSON = await response.json();

    const temp = dataJSON.currentConditions.temp;
    const gifTitle = dataJSON.currentConditions.icon;
    const feelsLike = dataJSON.currentConditions.feelslike;
    const conditions = dataJSON.currentConditions.conditions;
    const windSpeed = dataJSON.currentConditions.windspeed;
    const resolvedAddress=dataJSON.resolvedAddress;
    const description=dataJSON.description;
    console.log(`here is all the data:`,dataJSON);
    
    //useful data for us
    return {temp,gifTitle,feelsLike,conditions,windSpeed,resolvedAddress,description};

  } catch (error) {
    console.error("couldnt fetch properly visshi", error);
  }
}

export {getData}