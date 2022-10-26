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
        <h2 className='text no-margin'>Projects!</h2>
        <p className='text medium-margin'>Here are some of the projects I've worked on! 
        click on them to check them out</p>
        <GameBuddy />
        <Turbine />
        <IndustryIdle />
      </div>

      <BottomNav /> 
    </div>
  );
}

export default App;