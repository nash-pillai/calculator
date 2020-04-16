import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import '../index.css';

import Menu from "./Menu";
import Toolbar from "./input/Toolbar";
import Preview from "./input/Preview";

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
    var changeFont = (newFont) => {
      this.setState(prevState => ({selectedFont: newFont}));
    }
    var changeSize = (newSize) => {
      this.setState(prevState => ({fontSize: newSize}));
    }
    var changeColor = (newColor) => {
      this.setState(prevState => ({selectedColor: newColor}));
    }
    var style = {
      fontSize: "15px"
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
          tabs={
            {
              "General": "123", 
              "Alphabet": "Abc", 
              "Greek Letters": "π Ω", 
              "Symbols": "4", 
              "Formatting": <FormatAlignLeftIcon className="icon" style={style}/>
            }
          }
          useIcons={this.props.useIcons}
          changeTab={(newTab) => {
            this.setState(prevState => ({selectedTab: newTab}));
          }} 
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
