import { ReactNode, useContext, useEffect, useState } from 'react';
import { savesContext } from './saves-context';
import {
  getTotalCO2Impact,
  getTotalHumidityImpact,
  getTotalOxygenImpact,
  getTotalTemperatureImpact,
} from '@/utils/calculate-impact';
import { TbPlant } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import { useMouseTracker } from '@/components/MouseTracker';

export function UserImpact() {
  const { storedPlants, removePlant } = useContext(savesContext);
  const [impactData, setImpactData] = useState({
    temperature: 0,
    cO2: 0,
    oxygen: 0,
    humidity: 0,
  });
  const { increase, decrease } = useMouseTracker();

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
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="text-center"
      >
        <h2 className="mx-4 py-32 text-xl">
          Selecione as suas plantas para descobrir qual está sendo o seu impacto
          no meio ambiente
        </h2>
        <TbPlant className="inline size-40 opacity-10" />
      </motion.div>
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
        <h4 className="mb-2 text-sm font-bold text-dark-grass3">{title}</h4>
        <p className="flex items-end justify-between">
          <span className="text-sm opacity-60">Aproximadamente</span>
          <span className="text-4xl font-light">{children}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 text-end">
      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        className="mb-12 text-2xl font-medium lg:py-6"
      >
        <span className="bg-amber-800/5">
          Acompanhe o seu impacto no meio ambiente
        </span>
      </motion.h2>
      <motion.section
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        className="mb-16 flex flex-col gap-8"
      >
        <DisplayInfo title="Gás carbônico absorvido">
          {impactData.cO2.toFixed(2)}Kg<span className="text-xl">/ ano</span>
        </DisplayInfo>
        <DisplayInfo title="Oxigênio produzido">
          {impactData.oxygen.toFixed(2)}Kg
          <span className="text-xl">/ ano</span>
        </DisplayInfo>
        <DisplayInfo title="Temperatura ambiente">
          {impactData.temperature > 0 ? '-' : ''}
          {impactData.temperature.toFixed(2)}
          <span className="text-2xl">ºC</span>
        </DisplayInfo>
        <DisplayInfo title="Umidade do ar">
          {impactData.humidity > 0 ? '+' : ''}
          {impactData.humidity.toFixed(2)}
          <span className="text-2xl">%</span>
        </DisplayInfo>
      </motion.section>
      <motion.section
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            duration: 0.5,
          },
        }}
        className="text-center"
      >
        <h3 className="text-lg font-bold">Plantas selecionadas</h3>
        <p className="mb-6 text-xs opacity-80">(Clique nela para remover)</p>
        <ul className="flex flex-col gap-4">
          <AnimatePresence>
            {storedPlants.map((plant) => {
              const { id, name, description } = plant;
              return (
                <motion.li
                  initial={{
                    opacity: 0,
                    x: -20,
                    margin: 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.75,
                      type: 'spring',
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -22,
                    height: 0,
                    marginTop: -16,
                    transition: {
                      duration: 0.75,
                      type: 'spring',
                      height: {
                        delay: 0.15,
                      },
                    },
                  }}
                  className="text-sm"
                  key={id}
                >
                  <button
                    onMouseEnter={increase}
                    onMouseLeave={decrease}
                    onClick={() => {
                      removePlant(plant);
                      decrease();
                    }}
                    className="w-full rounded-xl border border-amber-900/20 bg-green-800/10 p-3 text-start shadow-md shadow-green-900/10 duration-200 hover:shadow-green-900/20"
                  >
                    <h4 className="font-bold">{name}</h4>
                    <p>{description}</p>
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </motion.section>
    </div>
  );
}
