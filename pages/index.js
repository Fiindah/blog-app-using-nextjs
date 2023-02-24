import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "@/components/header";

export default function Homepage() {
  return (
    <div className={styles.container}>
        <Head>
        <title>Stories Bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Stay Reading Today!</h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/blogs/first-post">
              <h3>Vulgivagus minima creo sunt vis animadverto degenero inflammatio campana vinco qui defendo territo aqua perferendis voluptas.</h3>
            </Link>
            <p>
            Sum triumphus ager. Illum absorbeo ante. Accendo ventosus cedo. Aranea vobis admitto. Baiulus possimus deleo. Solum ultio cimentarius. Excepturi sit cena. Bis tamdiu animi....
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/second-post">
              <h3>Aperio deficio sum illum eum defleo summopere error totus.</h3>
            </Link>
            <p>
            Molestiae denuo cuppedia. Certo cetera ambitus. Vilis vae utique. Apparatus curriculum viscus. Architecto currus triduana...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/three-post">
              <h3>Dedecor vitiosus utilis commodo sursum officia quo decor non vesper.</h3>
            </Link>
            <p>
            Recusandae sint canonicus. Decimus speciosus contego. Civis vesper cultellus. Vulpes cursim corporis. Vestigium substantia spero...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/four-post">
              <h3>Casso vester harum vesica stillicidium cupressus cognatus cubo aer vel constans id audio chirographum.</h3>
            </Link>
            <p>
            Dolores acquiro alo. Texo absum tempora. Cerno victus tolero. Crepusculum comedo infit. Blandior consequatur cavus. Crepusculum velit accipio...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/five-post">
              <h3>Aggredior spiritus tenax aut quod thermae consequatur vobis ager censura apparatus adduco alias solio.</h3>
            </Link>
            <p>
            Comptus aut deputo. Subito demum texo. Balbus cibo tamen. Ut admoveo attonbitus. Centum modi basium. Vulticulus degenero canto. Est congregatio...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/six-post">
              <h3>Recusandae absconditus conforto eum incidunt consectetur caveo trans aliqua perspiciatis vultuosus subvenio et peccatus causa vos suppellex.</h3>
            </Link>
            <p>
            Cruciamentum explicabo voluptas. Canis tutamen tergo. Aureus studio anser. Cursus sed ustilo. Amet vetus alius. Currus voluptate adimpleo. Sunt...
            </p>
          </div>
        </div>
        </main>

      <footer className={styles.footer}>
        <p>Copyright 2023 Stories Bar by Endah FN</p>
      </footer>
    </div>
  );
}
