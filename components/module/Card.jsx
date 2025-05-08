import styles from '@/styles/Card.module.css';
import Link from 'next/link';

function Card({ model, image, name, year, distance, location, price, id }) {
  return (
    <Link href={`/cars/${id}`} className={styles.container}>
      <img src={image} alt={name} />

      <div>
        <h4>
          {name} {model}
        </h4>
        <p className={styles.info}>
          <span>{year}</span> / <span>{(+distance).toLocaleString()}Km</span>
        </p>
      </div>

      <div className={styles.priceAndLoacation}>
        <p className={styles.price}>${price.toLocaleString()}</p>
        <p>{location} </p>
      </div>
    </Link>
  );
}

export default Card;
