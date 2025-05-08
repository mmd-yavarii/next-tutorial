import Link from 'next/link';
import carsData from '@/data/carsData';
import CarsList from '@/components/template/CarsList';

export default function Home() {
  return (
    <>
      <Link href="/cars" style={{ display: 'inline-block', marginBottom: '2em', width: '100%', textAlign: 'center' }}>
        See all cars
      </Link>

      <CarsList cars={carsData.slice(0, 3)} />
    </>
  );
}
