import '../assets/css/App.css';
import Footer from './Footer.js';
import Bio from './Bio.js';
import { Component } from 'react';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Bio />
        <Footer />
      </div>
    );
  }
}

export default App;
