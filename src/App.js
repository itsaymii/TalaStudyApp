import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashBoard';
import About from './components/About';
import Flashcard from './components/Flashcard';
import UploadPage from './components/UploadPage';
import CreateFlashcard from './components/CreateFlashcard';
import '@fontsource/raleway';

function AppContent() {
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavBar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/create-flashcard" element={<CreateFlashcard />} />

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