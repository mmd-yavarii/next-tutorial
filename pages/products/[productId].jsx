import { useRouter } from 'next/router';

export default function ProductDetails({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}

// make dynamic routes
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  };
}

// get product
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
  const json = await response.json();

  return {
    props: {
      product: json,
    },
  };
}
