import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Differentiator from './components/Differentiator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import VideoSection from './components/VideoSection';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main style={{ flex: '1 1 auto' }}>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <VideoSection />
        <Differentiator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
