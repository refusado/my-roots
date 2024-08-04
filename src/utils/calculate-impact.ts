export function getTotalTemperatureImpact(temperatureValues: number[]): number {
  const totalImpact = temperatureValues.reduce((total, value, i) => {
    return total + value * Math.exp(-0.7315 * i);
  }, 0);

  return totalImpact;
}

export function getTotalCO2Impact(cO2Values: number[]): number {
  return cO2Values.reduce((sum, value) => sum + value, 0);
}

export function getTotalOxygenImpact(oxygenValues: number[]): number {
  return oxygenValues.reduce((sum, value) => sum + value, 0);
}

export function getTotalHumidityImpact(humidityValues: number[]): number {
  const totalImpact = humidityValues.reduce((total, value, i) => {
    return total + value * Math.exp(-0.5892 * i);
  }, 0);

  return totalImpact;
}
