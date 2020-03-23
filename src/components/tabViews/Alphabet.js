import React from 'react';
import '../../index.css';


// ========================================

class Alphabet_Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: false
    }
  }
  shift = (event) => {
    this.setState(prevState => ({
      shift: !this.state.shift
    }));
  }
  render() {
    var lower_letters = "abcdefghijklmnopqrstuvwxyz".split("");
    var upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
      <div className="alphabet_display">
        {
          this.state.shift ?
          upper_letters.map(letter =>
            <button className="toolbar_button upperAlphabet_button">{letter}</button>
          ):
          lower_letters.map(letter => 
            <button className="toolbar_button lowerAlphabet_button">{letter}</button>
          )
        }
        <button 
        className="toolbar_button shift_button" 
        onClick={this.shift} 
        style={{gridColumn: "6/8"}}
        >
          Shift
        </button>
      </div>
    );
  }
}

// ========================================

export default Alphabet_Display;
