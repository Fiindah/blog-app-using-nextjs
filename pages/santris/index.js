import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { santris: data }
  }
}

const Santris = ({ santris }) => {
  console.log(santris)

  return (
    <div>
      <h1>Semua Santri</h1>
      {santris.map(santri => (
        <div key={santri.id}>
          <a className={styles.single}>
            <h3>{ santri.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Santris;