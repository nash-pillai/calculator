import React from 'react';
import '../../index.css';

import General from "./inputDisplays/General";
import Alphabet from "./inputDisplays/Alphabet";
import GreekLetters from "./inputDisplays/GreekLetters";
import Formatting from "./inputDisplays/Formatting";

// ========================================

class Toolbar extends React.Component {
  render() {
    var display;
    switch (this.props.selectedTab) {
      case "Alphabet":
        display = <Alphabet />;
        break;
      case "Greek Letters":
        display = <GreekLetters />;
        break;
      case "Symbols":
        display = <p>Coming Soon!</p>;
        break;
      case "Formatting":
        display = <Formatting 
          changeFont={this.props.changeFont} 
          changeSize={this.props.changeSize} 
          changeColor={this.props.changeColor} 
          selectedFont={this.props.selectedFont} 
          fontSize={this.props.fontSize} 
          selectedColor={this.props.selectedColor}
        />;
        break;
      default:
        display = <General />;
        break;
    }
    return (
      <div className="toolbar">
        { display }
      </div>
    );
  }
}

// ========================================

export default Toolbar;
