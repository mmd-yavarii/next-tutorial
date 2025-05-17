export default function ProductDetails({ details }) {
  return (
    <>
      <h1>product name : {details.title}</h1>
      <p>product price : {details.price}</p>
      <p>category : {details.category}</p>
      <hr />

      <p>description : {details.description}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
    const json = await response.json();

    if (!json.title) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        details: json,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
