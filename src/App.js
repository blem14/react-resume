import logo from './assets/logo.svg';
import './App.css';
import Footer from './Footer.js';
import { FaRegSmileWink } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-phrase">I'm Commander Shepard, and this is my favourite page on the internet! <FaRegSmileWink /></p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
