import Link from 'next/link';

export default function Home({ products }) {
  const style = { padding: '10px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #ccc' };

  return (
    <>
      {products.map((i) => (
        <Link href={`/products/${i.id}`} key={i.id}>
          <div style={style}>
            <img src={i.image} width="100px" />

            <div>
              <h4>{i.title}</h4>
              <p>{i.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return {
    props: { products },
  };
}
