import CarsList from '@/components/template/CarsList';
import carsData from '@/data/carsData';

function cars() {
  return (
    <div>
      <CarsList cars={carsData} />
    </div>
  );
}

export default cars;
