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
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
              In arcu cursus euismod quis. Vitae et leo duis ut diam. Ipsum nunc aliquet bibendum enim facilisis gravida. Donec et odio pellentesque diam volutpat commodo sed. Aliquet risus feugiat in ante metus dictum at tempor. Quam lacus suspendisse faucibus interdum posuere. Scelerisque eleifend donec pretium vulputate sapien. Quis ipsum suspendisse ultrices gravida dictum. Facilisis mauris sit amet massa vitae tortor condimentum. Ac ut consequat semper viverra nam libero justo. Fermentum leo vel orci porta non pulvinar neque...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/second-post">
              <h3>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
            Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nec sagittis aliquam malesuada bibendum. Nibh cras pulvinar mattis nunc sed. Sodales ut eu sem integer vitae. Orci phasellus egestas tellus rutrum tellus pellentesque. Velit euismod in pellentesque massa. Varius morbi enim nunc faucibus a pellentesque sit amet. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Diam quis enim lobortis scelerisque fermentum dui faucibus. Euismod nisi porta lorem mollis aliquam ut...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/three-post">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum. Sit amet porttitor eget dolor morbi non. Sed sed risus pretium quam vulputate dignissim. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Elit pellentesque habitant morbi tristique senectus et. ..
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/four-post">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
            Dignissim convallis aenean et tortor at risus. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Amet est placerat in egestas erat imperdiet sed. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed felis eget velit aliquet sagittis. Aliquet lectus proin nibh nisl condimentum id venenatis a. Odio euismod lacinia at quis risus sed vulputate. Amet volutpat consequat mauris nunc. Ut tristique et egestas quis. Ante metus dictum at tempor commodo ullamc...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/five-post">
              <h3>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
            Nunc congue nisi vitae suscipit tellus mauris a. Nibh tortor id aliquet lectus proin nibh. Rutrum quisque non tellus orci ac....
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/blogs/six-post">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </Link>
            <p>
            Quisque id diam vel quam elementum pulvinar etiam non quam. Dui sapien eget mi proin sed libero enim sed faucibus....
            </p>
          </div>
        </div>
        </main>

      <footer className={styles.footer}>
        <p>Copyright 2024 Stories Bar by Endah FN</p>
      </footer>
    </div>
  );
}
