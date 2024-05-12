import './App.css';
import Home from './components/Home';
// import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MoreDetails from './components/MoreDetails';
// import CourseCard from './components/CourseCard';
// import Academic from './components/Academic';
// import Professional from './components/Professional';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup'
import ContactUs from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path="/courses" element={<CourseCard data={data} head={head} />} />
          <Route path='/moredetails/:id' element={<MoreDetails data={data} />} />
          <Route path="/academic" element={<Academic data={data} />} />
          <Route path="/professional" element={<Professional data={data} />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
