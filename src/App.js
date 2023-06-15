import './App.css'
import { Routes, Switch, Route } from 'react-router-dom'
import Home from './client/screens/Home';
import Testimonials from './client/screens/Testimonials';
import Clients from './client/screens/Clients';
import Contact from './client/screens/Contact';
import Header from './client/components/Header';

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
    </div>
  );
}

export default App;
