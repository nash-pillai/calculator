import React from 'react';
import '../index.css';

import General from "./tabViews/General";
import Alphabet from "./tabViews/Alphabet";
import Greek_Letters from "./tabViews/Greek_Letters";
import Formatting from "./tabViews/Formatting";

// ========================================

class Toolbar extends React.Component {
  render() {
    var display;
    switch (this.props.selectedTab) {
      case "Alphabet":
        display = <Alphabet />;
        break;
      case "Greek Letters":
        display = <Greek_Letters />;
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
