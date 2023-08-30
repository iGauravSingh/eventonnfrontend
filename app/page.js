import Image from 'next/image'
import Hero from './components/hero/Hero'
import Selector from './components/selector/Selector'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <Selector />
      <Footer />
    </div>
  )
}
