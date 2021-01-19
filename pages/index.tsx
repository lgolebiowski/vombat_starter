import Head from 'next/head'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 7.2rem;
  }
`

const title: string = "Vombat";



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <MainWrapper>
        <h1>Vombat.io</h1>
      </MainWrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {title}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
