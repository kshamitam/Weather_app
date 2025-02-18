import React from "react";

const WeatherIcons = (description) => {
  const weather = description();

  if (weather.includes("clear")) return "/assets/sunny.png";
  if (weather.includes("clouds")) return "/assets/cloudys.png";
  if (weather.includes("rain")) return "/assets/rainy.png";
  if (weather.includes("snow")) return "/assets/snow.png";
  if (weather.includes("thunderstorm")) return "/assets/thunderstorm.png";
  if (weather.includes("haze") || weather.includes("mist"))
    return "/assets/haze.png";
};
export default WeatherIcons;
