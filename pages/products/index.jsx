import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ProductsList({ products, categories, search = '' }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(search);

  // search handler
  function searchHandler() {
    const params = new URLSearchParams(searchParams);
    if (searchValue.length) {
      params.set('search', searchValue);
      router.push(`?${params.toString()}`);
    } else {
      params.delete('search');
      router.push(``);
    }
  }

  // filter handler
  function setFilterHandler(event) {
    const category = event.target.innerText;
    const params = new URLSearchParams(searchParams);
    if (category == 'all') {
      params.delete('category');
      router.push(``);
    } else {
      params.set('category', category);
      router.push(`?${params.toString()}`);
    }
  }

  return (
    <>
      <h1 style={{ padding: '0.5em ' }}>Products List</h1>
      <hr />

      <div style={{ padding: '0em' }}>
        {categories.map((i) => (
          <button onClick={setFilterHandler} key={i} style={{ margin: '0.4em', padding: '0.2em' }}>
            {i}
          </button>
        ))}

        <br />
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search ..."
          style={{ margin: '0.4em', padding: '0.2em', width: '200px' }}
        />
        <button onClick={searchHandler} style={{ padding: '0.2em' }}>
          Search
        </button>
      </div>

      <hr />

      {products.map((i) => (
        <div key={i.id} style={{ padding: '0.5em 1em', borderBottom: '1px solid #ccc', margin: '1em 0' }}>
          <Link href={``}>{i.title}</Link>
          <p>
            $ {i.price} / {i.category}
          </p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('https://fakestoreapi.com/products');
  const json = await response.json();
  const categories = ['all', ...new Set(json.map((i) => i.category))];

  const { category } = context.query;
  const search = context.query.search || '';

  let products = category ? json.filter((product) => product.category === category) : json;
  products = search ? products.filter((i) => i.title.toLowerCase().includes(search.toLowerCase())) : products;

  return {
    props: { products, categories, search },
  };
}
