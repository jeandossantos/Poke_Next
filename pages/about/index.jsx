import Image from 'next/image';

import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        suscipit illo eveniet consectetur assumenda, explicabo iusto obcaecati
        dolores, voluptas ex dignissimos nulla sequi doloribus laudantium? Quo
        molestiae tempore ipsa molestias!
      </p>
      <Image
        src={'/images/charizard.png'}
        alt="Charizard"
        height={'300'}
        width={'300'}
      />
    </div>
  );
}
