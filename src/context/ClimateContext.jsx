// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useEffect, useState } from "react";

const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temp, setTemp] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [thermoTemp, setThermoTemp] = useState(temp);
  const [thermoHumidity, setThermoHumidity] = useState(humidity);

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          if (thermoTemp === temp) return clearInterval(interval);
          setTemp(temp < thermoTemp ? temp + 1 : temp - 1);
        }
        , 1000)

      return () => clearInterval(interval);
    },
    [temp, thermoTemp]
  );

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          if (thermoHumidity === humidity) return clearInterval(interval);
          setHumidity(humidity < thermoHumidity ? Math.min(humidity + 2, thermoHumidity) : Math.max(humidity - 2, thermoHumidity));
        },
        1000
      );

      return () => clearInterval(interval);
    },
    [humidity, thermoHumidity]
  );

  return (
    <ClimateContext.Provider
      value={{ temp, setTemp, humidity, setHumidity, thermoTemp, setThermoTemp, thermoHumidity, setThermoHumidity }}>
      {children}
    </ClimateContext.Provider>
  );
}
