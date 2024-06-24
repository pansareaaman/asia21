import './App.css';
import Home from './components/Home';
// import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Classes from './components/Classes';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup'
import Gallery from './components/Gallery';
import ContactUs from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/classes" element={<Classes />} /> 
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
