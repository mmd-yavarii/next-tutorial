import carsData from '@/data/carsData';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function CarDetails() {
  const router = useRouter();
  const carId = router.query.carId || '';
  const [car, setCar] = useState({});

  useEffect(() => {
    setCar(carsData.find((i) => i.id == carId));
  }, [carId]);

  if (router.isReady)
    return (
      <div>
        <img src={car.image} alt={car.name} />

        <br />
        <h3>
          {car.name} {car.model}
        </h3>
      </div>
    );
}

export default CarDetails;
