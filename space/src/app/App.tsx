import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/App.css';
import "../styles/Home.css";
import { Outlet } from 'react-router-dom';
import Sections from '../components/Sections';

function App() {

  return (
    <div className="catalog">
      <NavBar />
      <Sections />
    </div>
  );
}

export default App;
