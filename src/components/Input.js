import React from 'react';
import '../index.css';

import Menu from "./Menu";
import Toolbar from "./Toolbar";
import Preview from "./Preview";

// ========================================

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "General",
      selectedFont: "Arial",
      fontSize: "12px",
      selectedColor: "#000000"
    }
  }
  render() {
    var changeTab = (newTab) => {
      this.setState(prevState => ({selectedTab: newTab}));
    }
    var changeFont = (newFont) => {
      this.setState(prevState => ({selectedFont: newFont}));
    }
    var changeSize = (newSize) => {
      this.setState(prevState => ({fontSize: newSize}));
    }
    var changeColor = (newColor) => {
      this.setState(prevState => ({selectedColor: newColor}));
    }
    return (
      <div 
        className="input" 
        style={
          {
            fontFamily: this.state.selectedFont, 
            fontSize: this.state.fontSize
          }
        }
      >
        <Menu 
          changeTab={changeTab} 
          selectedTab={this.state.selectedTab}
        />
        <Toolbar 
          selectedTab={this.state.selectedTab} 
          changeFont={changeFont} 
          changeSize={changeSize} 
          changeColor={changeColor} 
          selectedFont={this.state.selectedFont} 
          fontSize={this.state.fontSize} 
          selectedColor={this.state.selectedColor}
        />
        <Preview />
      </div>
    );
  }
}

// ========================================

export default Input;
