
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/Landingpage';
import LoginPage from './components/landingpage/Loginpage';
import AddUserPage from './components/landingpage/Adduserpage';
// import Navbar from './components/landingpage/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/landingpage/Footer';



const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
