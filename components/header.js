import Link from 'next/link'
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.appBar}>
     <div className={styles.appBrand}>
      <h1>Stories Bar</h1>
      </div>
    <nav id="navigationDrawer" className={styles.appNavigation}>
    <ul>
        <li>
          <Link href="/" className={styles.navItem}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={styles.navItem}>About Us</Link>
        </li>
      </ul>
    </nav>
  </header>


  )
}
/*
     <header className={styles.appBar}>
    <div className={styles.appBrand}>
      <h1>Stories Bar</h1>
    </div>
    <nav id="navigationDrawer" className={styles.appNavigation}>
//
<header>
      <h1 className={styles.headerInner}>Stories Bar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>*/