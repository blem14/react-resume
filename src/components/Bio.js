import '../assets/css/Bio.css';
import Logo from './Logo.js';
import ParalaxElement from './ParalaxElement.js';

class Bio extends ParalaxElement{
  render() {
    return (
      <div className="Bio">
          <div className="Bio-container">
            <Logo className="Bio-logo"/>
            <div className="Bio-about">
              <span>Name Surname</span>
              <span>Position</span>
              <span></span>
            </div>
        </div>
      </div>
    );
  }
}

export default Bio;