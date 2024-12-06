import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './header';
import Best from './bestseling';
import Promo from './reviews';
import Connect from './connect';
import Coach from './coach';
import Footer from './footer';
import Menue from './menue';
import Menuecontain from './menuecontaint';
import About from './aboutus';
import Panier from './Panier';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <>
            <Header />
        
            <Best />
            <Promo />
            <Connect />
            <Coach />
            <Footer />
          </>
        } />
        
        {/* Menu route */}
        <Route path="/menue" element={
          <>
           
            <Menue />
            <Panier/>
            <Menuecontain/>
            <Connect />
            <Coach />

            <Footer />
          </>
        } />
          <Route path="/about" element={
          <>
           
            <About/>

            <Panier/>
            

            <Footer />
          </>
        } />
      
      </Routes>
    </Router>
  );
}

export default App;
