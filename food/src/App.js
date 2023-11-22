import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Salad from './pages/Salad';
import Pizza from './pages/Pizza';
import Sushi from './pages/Sushi';
import Hamburger from './pages/Hamburger';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/salad' element={<Salad />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/sushi' element={<Sushi />} />
          <Route path='/hamburgers' element={<Hamburger />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;