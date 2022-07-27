import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import Hero from '../components/commons/Hero'
import Features from '../components/commons/Features'
import Card from '../components/commons/Card'
import Highlight from '../components/commons/Highlight'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>RawatAku | Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Highlight />
        <Card />
      </main>
      <footer className='inset-x-0 bottom-0'>
        <Footer />
      </footer>
    </div>
  )
}
