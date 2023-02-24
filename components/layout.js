import styles from "./layout.module.css";
// import Header from "./header";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}