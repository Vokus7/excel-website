import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Services from './components/Services';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Gallery />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
