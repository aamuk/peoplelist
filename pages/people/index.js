import styles from '../../styles/People.module.css';
import Head from 'next/head';
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
        <>
            <Head>
            <title>People Listing | People</title>
            <meta name="keywords" content="people" />
            </Head>
            <div>
                <h1>All People</h1>
                {people.map(people => (
                    <Link href={ '/people/' + people.id } key={ people.id }>
                        <a className={ styles.single }>
                            <h3>{ people.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default People;