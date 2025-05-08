import CarsList from '@/components/template/CarsList';
import carsData from '@/data/carsData';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Category() {
  const router = useRouter();
  const category = router.query.category || '';
  const [display, setDisplaay] = useState([]);

  useEffect(() => {
    const filtered = carsData.filter((i) => i.category == category);
    setDisplaay(filtered);
  }, [category]);

  return <CarsList cars={display} />;
}

export default Category;
