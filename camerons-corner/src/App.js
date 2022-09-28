import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import BottomNav from './components/BottomNav';


function App() {
  return (
    <div className='root'>
      <Navbar />
      <MainPage /> 

      <BottomNav /> 
    </div>
  );
}

export default App;