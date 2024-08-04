import { useContext, useEffect, useState } from 'react';
import { savesContext } from './saves-context';
import {
  getTotalCO2Impact,
  getTotalHumidityImpact,
  getTotalOxygenImpact,
  getTotalTemperatureImpact,
} from '@/utils/calculate-impact';
import { TbPlant } from 'react-icons/tb';

export function UserSaves() {
  const { storedPlants, removePlant } = useContext(savesContext);
  const [impactData, setImpactData] = useState({
    temperature: '',
    cO2: '',
    oxygen: '',
    humidity: '',
  });

  useEffect(() => {
    const temperatureValues: number[] = [];
    const cO2Values: number[] = [];
    const oxygenValues: number[] = [];
    const humidityValues: number[] = [];

    storedPlants.forEach(({ temperature, cO2absorption, oxygen, humidity }) => {
      temperatureValues.push(temperature || 0);
      cO2Values.push(cO2absorption);
      oxygenValues.push(oxygen || 0);
      humidityValues.push(humidity || 0);
    });

    setImpactData({
      temperature: getTotalTemperatureImpact(temperatureValues).toFixed(2),
      cO2: getTotalCO2Impact(cO2Values).toFixed(2),
      oxygen: getTotalOxygenImpact(oxygenValues).toFixed(2),
      humidity: getTotalHumidityImpact(humidityValues).toFixed(2),
    });
  }, [storedPlants]);

  if (!storedPlants.length)
    return (
      <aside className="text-center">
        <h2 className="mx-4 my-32 text-2xl">
          Selecione as suas plantas para descobrir qual está sendo o seu impacto
          no meio ambiente
        </h2>
        <TbPlant className="inline size-40 opacity-20" />
      </aside>
    );

  return (
    <aside className="text-end">
      <h2 className="py-10 pl-10 text-2xl font-medium">
        Acompanhe o seu impacto no meio ambiente
      </h2>
      <section className="mb-10 flex flex-col gap-8 bg-pink-500">
        <div>
          <h4 className="font-bold">Gás carbônico absorvido</h4>
          <p className="flex items-end justify-between">
            <span className="text-sm">
              {Number(impactData.cO2) > 0 ? 'Aproximadamente' : ''}
            </span>
            <span className="text-4xl font-light">
              {impactData.cO2}Kg / ano
            </span>
          </p>
        </div>
        <div>
          <h4 className="font-bold">Oxigênio produzido</h4>
          <p className="flex items-end justify-between">
            <span className="text-sm">
              {Number(impactData.oxygen) > 0 ? 'Aproximadamente' : ''}
            </span>
            <span className="text-4xl font-light">
              {impactData.oxygen}Kg / ano
            </span>
          </p>
        </div>
        <div>
          <h4 className="font-bold">Temperatura ambiente</h4>
          <p className="flex items-end justify-between">
            <span className="text-sm">
              {Number(impactData.temperature) > 0 ? 'Aproximadamente' : ''}
            </span>
            <span className="text-4xl font-light">
              {impactData.temperature}ºC
            </span>
          </p>
        </div>
        <div>
          <h4 className="font-bold">Umidade local</h4>
          <p className="flex items-end justify-between">
            <span className="text-sm">
              {Number(impactData.humidity) > 0 ? 'Aproximadamente' : ''}
            </span>
            <span className="text-4xl font-light">{impactData.humidity}% </span>
          </p>
        </div>
      </section>
      <section className="text-center">
        <h3 className="text-lg font-bold">Plantas selecionadas</h3>
        <p className="text-sm">Clique para remover</p>
        <ul className="flex flex-col gap-4 p-2">
          {storedPlants.map((plant) => {
            const { id, name, description } = plant;
            return (
              <li className="text-sm" key={id}>
                <button
                  className="bg-blue-500 text-start"
                  onClick={() => removePlant(plant)}
                >
                  <h4 className="font-bold">{name}</h4>
                  <p>{description}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
