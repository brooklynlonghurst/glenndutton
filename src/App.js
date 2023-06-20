import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './client/screens/Home';
import Testimonials from './client/screens/Testimonials';
import Clients from './client/screens/Clients';
import Contact from './client/screens/Contact';
import Header from './client/components/Header';
import Footer from './client/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
