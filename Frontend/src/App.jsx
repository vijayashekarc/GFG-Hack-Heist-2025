import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Closed from './components/Closed';
import Success from './components/Success';

const api = "https://register-nine-nu.vercel.app";

const App = () => {
  const [teamCount, setTeamCount] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || api}/api/register/count`)
      .then(res => res.json())
      .then(data => setTeamCount(data.count))
      .catch(() => setTeamCount(0)); // default to 0 if error
  }, []);

  const ProtectedRegister = () => {
    if (teamCount === null) return null; // loading
    return teamCount >= 40 ? <Navigate to="/closed" replace /> : <Register />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home teamCount={teamCount} />} />
      <Route path="/register" element={<ProtectedRegister />} />
      <Route path="/closed" element={<Closed />} />
      <Route path="/successfull" element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
