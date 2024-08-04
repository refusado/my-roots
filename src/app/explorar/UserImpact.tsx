import { ReactNode, useContext, useEffect, useState } from 'react';
import { savesContext } from './saves-context';
import {
  getTotalCO2Impact,
  getTotalHumidityImpact,
  getTotalOxygenImpact,
  getTotalTemperatureImpact,
} from '@/utils/calculate-impact';
import { TbPlant } from 'react-icons/tb';

export function UserImpact() {
  const { storedPlants, removePlant } = useContext(savesContext);
  const [impactData, setImpactData] = useState({
    temperature: 0,
    cO2: 0,
    oxygen: 0,
    humidity: 0,
  });

  useEffect(() => {
    const temperatureValues: number[] = [];
    const cO2Values: number[] = [];
    const oxygenValues: number[] = [];
    const humidityValues: number[] = [];

    storedPlants.forEach(({ temperature, cO2absorption, oxygen, humidity }) => {
      temperatureValues.push(temperature);
      cO2Values.push(cO2absorption);
      oxygenValues.push(oxygen);
      humidityValues.push(humidity);
    });

    setImpactData({
      temperature: getTotalTemperatureImpact(temperatureValues),
      cO2: getTotalCO2Impact(cO2Values),
      oxygen: getTotalOxygenImpact(oxygenValues),
      humidity: getTotalHumidityImpact(humidityValues),
    });
  }, [storedPlants]);

  if (!storedPlants.length)
    return (
      <div className="text-center">
        <h2 className="mx-4 py-32 text-2xl">
          Selecione as suas plantas para descobrir qual está sendo o seu impacto
          no meio ambiente
        </h2>
        <TbPlant className="inline size-40 opacity-10" />
      </div>
    );

  function DisplayInfo({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) {
    return (
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="flex items-end justify-between">
          <span className="text-sm">Aproximadamente</span>
          <span className="text-4xl font-light">{children}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="text-end">
      <h2 className="py-10 pl-10 text-2xl font-medium">
        Acompanhe o seu impacto no meio ambiente
      </h2>
      <section className="mb-10 flex flex-col gap-8 bg-pink-500">
        <DisplayInfo title="Gás carbônico absorvido">
          {impactData.cO2.toFixed(2)}Kg / ano
        </DisplayInfo>
        <DisplayInfo title="Oxigênio produzido">
          {impactData.oxygen.toFixed(2)}Kg / ano
        </DisplayInfo>
        <DisplayInfo title="Temperatura ambiente">
          {impactData.temperature.toFixed(2)}ºC
        </DisplayInfo>
        <DisplayInfo title="Umidade">
          {impactData.humidity.toFixed(2)}%
        </DisplayInfo>
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
    </div>
  );
}
