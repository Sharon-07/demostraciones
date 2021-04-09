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
          <a href="https://hammingolay.vercel.app/">Demostraciones</a>
        </h1>
      <div className={styles.grid}>
      <h2>Video &rarr;</h2>

      </div>
      <div className={styles.grid}>
      <h2>Presentación &rarr;</h2>
      
      <iframe src="https://onedrive.live.com/embed?cid=91F69582752FB659&amp;resid=91F69582752FB659%21115&amp;authkey=AHZiYBNqQO5ngF4&amp;em=2&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
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
