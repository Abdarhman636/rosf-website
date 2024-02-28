import Header from './components/Header/Header'
import Hero from './components/HeorSection/Hero'
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
