import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
          <title>People Listing | Home</title>
          <meta name="keywords" content="people" />
      </Head>
      
      <div>
        
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam perspiciatis unde fugiat laborum laudantium, reprehenderit, consectetur, minus exercitationem recusandae incidunt ut deleniti soluta dicta veritatis. Excepturi veritatis ipsa optio!
          Placeat tempora aut architecto optio! Beatae error placeat delectus, rerum dolorum quod eaque eos reprehenderit ratione consectetur commodi asperiores dolores explicabo cum fugit eligendi, iste voluptas? At a veniam quidem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam perspiciatis unde fugiat laborum laudantium, reprehenderit, consectetur, minus exercitationem recusandae incidunt ut deleniti soluta dicta veritatis. Excepturi veritatis ipsa optio!
          Placeat tempora aut architecto optio! Beatae error placeat delectus, rerum dolorum quod eaque eos reprehenderit ratione consectetur commodi asperiores dolores explicabo cum fugit eligendi, iste voluptas? At a veniam quidem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam perspiciatis unde fugiat laborum laudantium, reprehenderit, consectetur, minus exercitationem recusandae incidunt ut deleniti soluta dicta veritatis. Excepturi veritatis ipsa optio!
          Placeat tempora aut architecto optio! Beatae error placeat delectus, rerum dolorum quod eaque eos reprehenderit ratione consectetur commodi asperiores dolores explicabo cum fugit eligendi, iste voluptas? At a veniam quidem?
        </p>
        <Link href="/people">
          <a className={styles.btn}>People listing</a>
        </Link>
        
      </div>

    </>
  )
}
