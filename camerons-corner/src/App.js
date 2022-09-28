import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="root">
      <Navbar />
      <MainPage /> 

      <BottomNav /> 
    </div>
  );
}

export default App;