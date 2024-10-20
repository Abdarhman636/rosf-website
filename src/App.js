import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs/ContactUs.js';
import TermsConditions from './pages/TermsConditions/TermsConditions.js';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/termsconditions' element={<TermsConditions />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;        
