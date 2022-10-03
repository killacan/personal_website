import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import BottomNav from './components/BottomNav';
import GameBuddy from './components/GameBuddy';
import Turbine from './components/Turbine';
import IndustryIdle from './components/IndustryIdle';


function App() {
  return (
    <div className='root'>
      <Navbar />
      <MainPage /> 
      <div className='games-container'>
        <GameBuddy />
        <Turbine />
        <IndustryIdle />
      </div>

      <BottomNav /> 
    </div>
  );
}

export default App;