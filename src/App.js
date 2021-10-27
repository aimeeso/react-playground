import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './auth/AuthProvider';
import Clock from './components/clock/Clock';
import Header from './components/header/Header';
import Login from './components/login/Login';
import './App.css';

function PrivateRoute({ element, path }) {
  const { authed } = useAuth();
  const ele = authed === true
    ? element
    : <Navigate to="/login" replace state={{ path }} />;

  return <Route path={path} element={ele} />;
}

export default function App() {
  const { authed } = useAuth();
  console.log('auth is '+authed);
  console.log('helkp');
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/" element={<Clock />} exact/>
        </Routes>        
    </div>
  );
}

// export default App;
