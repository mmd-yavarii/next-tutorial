import Card from '../module/Card';
import styles from '@/styles/CarsList.module.css';

function CarsList({ cars }) {
  return (
    <div className={styles.container}>
      {cars.map((i) => (
        <Card key={i.id} {...i} />
      ))}
    </div>
  );
}

export default CarsList;
