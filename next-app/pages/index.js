import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Netflix</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h1>Unlimited movies, TV shows and more.</h1>
        </section>
        <section className={styles.row}>
          <h2>Popular on Netflix</h2>
          <div className={styles.thumbnails}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <div className={styles.thumbnail} key={idx} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
