import '../assets/css/Bio.css';
import logo from '../assets/logo.svg';
import { FaRegSmileWink } from 'react-icons/fa';
import { Component } from 'react';

class Bio extends Component{
  render() {
    return (
      <div className="Bio">
        <img src={logo} className="Bio-logo" alt="logo" />
        <p className="Bio-phrase">I'm Commander Shepard, and this is my favourite page on the internet! <FaRegSmileWink /></p>
      </div>
    );
  }
}

export default Bio;