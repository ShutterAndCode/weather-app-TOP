async function getWeatherGIF(string) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_KEY}&s=${string}&weirdness=10`,
    );
    if (!response.ok) {
      throw new Error("Could not find gif");
    }
    const responseJSON = await response.json();
    console.log(responseJSON);

    //const url = responseJSON.data.images.preview_gif.url;
    const url = responseJSON.data.images.original.url;
    return {url};
    
  } catch (error) {
    console.error("couldnt fetch properly visshi", error);
  }
}
export { getWeatherGIF };
