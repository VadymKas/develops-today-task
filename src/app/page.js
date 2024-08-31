'use client';
import NextButton from '@/components/NextButton';
import { getVehicleTypes } from '@/utils/fetchData';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [vehicleType, setVehicleType] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    async function getData() {
      const { Results } = await getVehicleTypes();
      setVehiclesData(Results);
    }

    getData();
  }, []);

  const vehicleTypeHandler = (e) => setVehicleType(e.target.value);
  const modelYearHandler = (e) => setModelYear(e.target.value);

  const yearOptions = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, i) => 2015 + i,
  );

  return (
    <main className={styles.main}>
      <div className={styles.main__wrapper}>
        <h1 className={styles.main__title}>Car Dealer App</h1>
        <section className={styles.form}>
          <label className={styles.form__label}>Vehicle Type:</label>
          <select
            className={styles.form__select}
            value={vehicleType}
            onChange={vehicleTypeHandler}>
            <option
              disabled
              value=''>
              Select a vehicle type
            </option>
            {vehiclesData.map(({ MakeId, MakeName }) => (
              <option
                key={MakeId}
                value={MakeId}>
                {MakeName}
              </option>
            ))}
          </select>
          <label className={styles.form__label}>Model Year:</label>
          <select
            className={styles.form__select}
            value={modelYear}
            onChange={modelYearHandler}>
            <option
              disabled
              value=''>
              Select a model year
            </option>
            {yearOptions.map((year) => (
              <option
                key={year}
                value={year}>
                {year}
              </option>
            ))}
          </select>
          <NextButton
            href={`${vehicleType}/${modelYear}`}
            disabled={!vehicleType || !modelYear}
          />
        </section>
      </div>
    </main>
  );
}
