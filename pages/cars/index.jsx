import CarsPage from '@/components/templates/CarsPage';
import Categories from '@/components/templates/Categories';
import carsData from '@/data/carsData';

function Details() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
