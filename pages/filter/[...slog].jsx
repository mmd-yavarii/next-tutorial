import CarsPage from '@/components/templates/CarsPage';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router';
import React from 'react';

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slog || [];

  const filteredCars = carsData.filter((car) => car.price < max && car.price > min);

  if (!filteredCars.length) {
    return <h3>Not Found</h3>;
  } else {
    return <CarsPage data={filteredCars} />;
  }
}

export default FilteredCars;
