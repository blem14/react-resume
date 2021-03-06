import '../assets/css/App.css';
import Footer from './Footer.js';
import Bio from './Bio.js';
import Content from './Content.js';
import { Component } from 'react';

function paralax_scroll(params) {
  
}


class App extends Component{
  render() {
    return (
      <div className="App">
        <Bio />
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
