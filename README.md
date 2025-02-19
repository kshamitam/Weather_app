# Weather_app
This is a simple React-based weather application that allows users to search for the current weather information of any city. The app uses the OpenWeatherMap API to fetch weather data, including temperature, humidity, wind speed, and weather description additionally it show a "feels liuke " temperature to users that provides a more relatable aspect. The app provides a user-friendly interface to input a city name and displays relevant weather information.

Detailed Summary:
1. App.js:
This is the main component that holds the logic for fetching weather data based on user input and displaying the results. It uses React state to store weather data and city input, as well as the axios library for making API requests.

  Weather Information: Displays the fetched weather data:

  ~City Name: Displays the name of the city.
  ~Country: Displays the country code (e.g., "US", "IN").
  ~Temperature: Displays the current temperature in Celsius.
  ~Weather Description: Displays the main weather condition (e.g., "Clear", "Cloudy").
  ~Feels Like: Displays the perceived temperature, which may differ from the actual temperature due to wind or humidity.
  ~Humidity: Displays the current humidity percentage.
  ~Wind Speed: Displays the wind speed in MPH.

2. index.css:
This file contains the styling for the weather app. It includes the layout and design for various sections such as the search bar, weather information, and other elements like temperature, wind speed, and humidity.

































