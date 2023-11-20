import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Salad from './pages/Salad';
import Pizza from './pages/Pizza';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;