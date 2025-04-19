import SearchBar from '@/components/module/SearchBar';
import CarsPage from '@/components/templates/CarsPage';
import Categories from '@/components/templates/Categories';
import carsData from '@/data/carsData';

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
