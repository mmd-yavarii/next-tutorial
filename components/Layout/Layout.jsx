import Link from 'next/link';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Cars</h2>
        </Link>
        <p>Choose and buy your car </p>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>Next.js course / car</footer>
    </>
  );
}

export default Layout;
