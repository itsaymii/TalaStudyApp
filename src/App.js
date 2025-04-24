import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar'; 
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard'; 
import About from './components/About';
import Flashcard from './components/Flashcard';
import UploadPage from './components/UploadPage';
import '@fontsource/raleway'; 

function AppContent() {
  const location = useLocation();

  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavBar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;