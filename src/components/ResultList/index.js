'use client';

import { useEffect, useState } from 'react';
import { generateStaticParams } from '@/utils/fetchData';
import styles from '@/styles/ResultList.module.scss'

export default function ResultList({ makeId, year }) {
  const [vehicles, setVehilces] = useState([]);

  useEffect(() => {
    async function getData() {
      const { Results } = await generateStaticParams(makeId, year);
      setVehilces(Results);
    }

    getData();
  }, [makeId, year]);

  return (
    <>
      {vehicles.length > 0 && (
        <main className={styles.result}>
          <h1 className={styles.result__title}>
            {vehicles[0]?.Make_Name} models in {year} year
          </h1>
          <section className={styles.result__list}>
            {vehicles.map((car) => {
              const name =
                car.Make_Name[0] + car.Make_Name.slice(1).toLowerCase();

              return (
                <article
                  key={car.Model_ID}
                  className={styles.result__element}>
                  <h4>{`${name} ${car.Model_Name}`}</h4>
                </article>
              );
            })}
          </section>
        </main>
      )}
    </>
  );
}
