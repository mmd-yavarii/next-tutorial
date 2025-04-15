import Link from 'next/link';

import { MdHomeFilled } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { PiUsersThreeFill } from 'react-icons/pi';

import styles from './styles.module.scss';

export default function Layout({ children }) {
  return (
    <>
      {children}

      <footer className={styles.footer}>
        <Link href="/" replace={true}>
          <MdHomeFilled />
          <span>Home</span>
        </Link>

        <Link href="/explore" replace={true}>
          <FaSearch />
          <span>Explore</span>
        </Link>

        <Link href="/friends" replace={true}>
          <PiUsersThreeFill />
          <span>Friends</span>
        </Link>
      </footer>
    </>
  );
}
