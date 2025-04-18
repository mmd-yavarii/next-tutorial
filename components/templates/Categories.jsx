import Link from 'next/link';
import Hatchback from '../icons/Hatchback';
import Sedan from '../icons/Sedan';
import Sport from '../icons/Sport';
import Suv from '../icons/Suv';
import styles from './Categories.module.css';

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/cars/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>

      <Link href="/cars/categories/suv">
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>

      <Link href="/cars/categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>

      <Link href="/cars/categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
