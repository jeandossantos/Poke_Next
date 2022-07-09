import styles from '../styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={'/images/pokeball.png'}
          height="30"
          width="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
