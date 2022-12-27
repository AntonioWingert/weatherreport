export const getDatesApi = async (city) => {
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no&alerts=no&lang=pt`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
};