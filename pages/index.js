import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div className={styles.container}>
      <Head>
        <title>Zort Arena</title>
        <meta name="description" content="Zort Arena" />

      </Head>

      <main className={styles.main}>
      </main>
      <footer></footer>
    </div>
  );
}