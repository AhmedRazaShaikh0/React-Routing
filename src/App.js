import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Review from './pages/Review'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Navbar title="React.JS" /> 
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/About' element={ <About />}/>
        <Route path='/Services' element={ <Services />}/>
        <Route path='/Review' element={ <Review />}/>
        <Route path='/Contact' element={ <Contact />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>

  );
}

export default App;
