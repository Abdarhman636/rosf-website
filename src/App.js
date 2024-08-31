import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs/ContactUs.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
