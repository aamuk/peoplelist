import styles from '../../styles/People.module.css';
import Link from 'next/link';

// Fetch data runs before page is loaded, on the server
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { people: data }
    }

}

const People = ({ people }) => {
  
    return (
      <div>
        <h1>All People</h1>
        {people.map(person => (
          <Link href={'/people/' + person.id} key={person.id}>
            <a className={styles.single}>
              <h3>{ person.name }</h3>
            </a>
          </Link>
        ))}
      </div>
    );
  }
 
export default People;