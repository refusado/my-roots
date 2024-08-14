export function getTotalTemperatureImpact(temperatureValues: number[]): number {
  let result = 0;

  temperatureValues.sort((a, b) => a - b);
  temperatureValues.forEach(
    (value, i) => (result += value * Math.pow(0.793, i)),
  );

  return result;
}

export function getTotalHumidityImpact(humidityValues: number[]): number {
  let result = 0;

  humidityValues.sort((a, b) => a - b);
  humidityValues.forEach((value, i) => (result += value * Math.pow(0.903, i)));

  return result;
}

export function getTotalCO2Impact(cO2Values: number[]): number {
  return cO2Values.reduce((sum, value) => sum + value, 0);
}

export function getTotalOxygenImpact(oxygenValues: number[]): number {
  return oxygenValues.reduce((sum, value) => sum + value, 0);
}
