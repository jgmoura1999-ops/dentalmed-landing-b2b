import Header from './components/Header';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import Challenges from './components/Challenges';
import AboutUs from './components/AboutUs';
import Coverage from './components/Coverage';
import Advantages from './components/Advantages';
import Plans from './components/Plans';
import Network from './components/Network';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}>
      <Header />
      <Hero />
      <StatsBand />
      <Challenges />
      <AboutUs />
      <Coverage />
      <Advantages />
      <Plans />
      <Network />
      <CtaSection />
      <Footer />
    </div>
  );
}
