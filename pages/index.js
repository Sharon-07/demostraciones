import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          +<a href="https://hammingolay.vercel.app/">Demostraciones</a>
        </h1>
      <div className={video}>

      </div>
      <div className={presentacion}>
        
        </div>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-apputm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
