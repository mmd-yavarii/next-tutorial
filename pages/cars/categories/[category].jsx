import CarsPage from '@/components/templates/CarsPage';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router';

function Category() {
  const router = useRouter();
  const { category } = router.query || '';
  const cars = carsData.filter((i) => i.category == category);

  return (
    <>
      <button style={{ marginLeft: '12em' }} onClick={() => router.back()}>
        Back
      </button>
      <CarsPage data={cars} />
    </>
  );
}

export default Category;
