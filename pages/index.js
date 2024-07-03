import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pondok IT | Home</title>
        <meta name="keywords" content="santris"/>
      </Head>
      <div>
        <div className={styles.hero}>
          <div className={styles.avatar}>
            <Image src="public/img/hero.jpg" alt="gambar komputer" width={300} height={200} />
          </div>
          <div className={styles.intro}>
            <h1 className={styles.text}>Pondok IT & Mengaji</h1>
            <p className={styles.baris}>Mari menjadi muslim yang melek IT.</p>
          </div>
        </div>
        <Link href="/santris/">
          <a className={styles.btn}>Lihat Daftar Peringkat</a>
        </Link>
      </div>
    </>
  )
}
