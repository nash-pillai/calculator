import React from 'react';
import '../../index.css';


// ========================================

class GreekLetters_Display extends React.Component {
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
    var lower_letters = "αβγδεζηθικλμνξπρςστυφχψω".split("");
    var upper_letters = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
    return (
      <div className="greekLetters_display">
        {
          this.state.shift ?
          upper_letters.map(letter =>
            <button className="toolbar_button greekLetter_button">{letter}</button>
          ):
          lower_letters.map(letter => 
            <button className="toolbar_button greekLetter_button"><>{letter}</></button>
          )
        }
        <button 
        className="toolbar_button shift_button" 
        onClick={this.shift} 
        style={{gridColumn: "7/10"}}
        >
          Shift
        </button>
      </div>
    );
  }
}

// ========================================

export default GreekLetters_Display;