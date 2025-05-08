import CarsList from '@/components/template/CarsList';
import carsData from '@/data/carsData';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Filter() {
  const router = useRouter();
  const min = router.isReady ? router.query.filter[0] : '';
  const max = router.isReady ? router.query.filter[1] : '';
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = carsData.filter((i) => i.price < max && i.price > min);
    setCars(filtered);
  }, [min, max]);

  if (router.isReady) return <CarsList cars={cars} />;
}

export default Filter;
