const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const locationgot = event.queryStringParameters;
  const API_KEY = process.env.API_KEY; // Access the environment variable
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationgot}&aqi=yes`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
