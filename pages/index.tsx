import { useEffect } from 'react'
import AOS from 'aos';
import Navbar from '../components/organism/Navbar';
import Hero from '../components/organism/Hero';
import TransactionStep from '../components/organism/TransactionStep';
import FeaturedGame from '../components/organism/FeaturedGame';
import Reach from '../components/organism/Reach';
import Story from '../components/organism/Story';
import Footer from '../components/organism/Footer';

export default function Home(){
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
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

