import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useRouter } from 'next/router';

function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  function searchHandler() {
    if (max && min) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert('Please enter min and max');
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input type="text" value={min} onChange={(e) => setMin(e.target.value)} placeholder="enter min price" />
        <input type="text" value={max} onChange={(e) => setMax(e.target.value)} placeholder="enter max price" />
      </div>

      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
