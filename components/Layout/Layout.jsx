import Link from 'next/link';
import styles from './Layout.module.css';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const min = useRef();
  const max = useRef();
  const router = useRouter();

  function filterPriceHandler() {
    if (max.current && min.current) {
      router.push(`/filter/${min.current}/${max.current}`);
    } else {
      alert('Enter min and max price ');
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>
          <Link style={{ backgroundColor: 'transparent' }} href="/">
            Logo
          </Link>
        </h1>
        <Link href={`/category/sedan`}>Sedan</Link>
        <Link href={`/category/suv`}>SUV</Link>
        <Link href={`/category/sport`}>Sport</Link>
        <Link href={`/category/hatchback`}>Hatchback</Link>
      </header>

      <div className={styles.filter}>
        <input type="text" placeholder="Min price" onChange={(e) => (min.current = e.target.value)} />
        <input type="text" placeholder="Max price" onChange={(e) => (max.current = e.target.value)} />
        <button onClick={filterPriceHandler}>Search</button>
      </div>

      {children}
    </div>
  );
}

export default Layout;
