import { useEffect } from 'react'
import AOS from 'aos';
import Navbar from '../components/organism/Navbar';
import Hero from '../components/organism/Hero';
import TransactionStep from '../components/organism/TransactionStep';
import FeaturedGame from '../components/organism/FeaturedGame';
import Reach from '../components/organism/Reach';
import Story from '../components/organism/Story';
import Footer from '../components/organism/Footer';
import Head from 'next/head';

export default function Home(){
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Head>
    <title>Store GG - Get a New Experience in Gaming</title>
          <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
          <meta property="og:title" content="Store GG - Get a New Experience in Gaming" />
          <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
          <meta property="og:url" content="https://dailyspin.id/wp-content/uploads/2020/08/Logo-Baru-MLBB.jpg" />
    </Head>
    <Navbar />
    <Hero />
    <TransactionStep />
    <FeaturedGame />
    <Reach />
    <Story />
    <Footer />
    </>
  )
}

