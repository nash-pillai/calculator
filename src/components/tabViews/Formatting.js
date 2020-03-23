import React from 'react';
import '../../index.css';


// ========================================

class Formatting_Display extends React.Component {
  render() {
    var handleFont = () => {
      this.props.changeFont(document.getElementsByClassName("font_selection")[0].value);
    }
    var handleSize = () => {
      this.props.changeSize(document.getElementsByClassName("size_selection")[0].value);
    }
    var handleColor = () => {
      this.props.changeColor(document.getElementsByClassName("color_picker")[0].value);
    }
    var fonts = ["Arial", "Times New Roman"]
    var sizes = ["6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px", "16px"]
    return (
      <div className="formatting_display">
        <div className="textStyle_block">
          <button className="toolbar_button overline_button">Overline</button>
          <button className="toolbar_button underline_button">Underline</button>
          <button className="toolbar_button bold_button">Bold</button>
          <button className="toolbar_button italic_button">Italic</button>
        </div>
        <div className="alignment_block">
          <button className="toolbar_button superscript_button">Superscript</button>
          <button className="toolbar_button subscript_button">Subscript</button>
          <button className="toolbar_button supersubscript_button">Superscript and Subscript</button>
          <button className="toolbar_button leftSuperscript_button">Left Superscript</button>
          <button className="toolbar_button leftSubscript_button">Left Subscript</button>
          <button className="toolbar_button leftSupersubscript_button">Left Superscript and Subscript</button>
        </div>
        <div className="textStyle2_block">
          <select 
            className="toolbar_selection font_selection" 
            value={this.props.selectedFont} 
            onChange={handleFont}
          >
            {
              fonts.map(font =>
                <option value={font} style={{fontFamily: font}}>{font}</option>
              )
            }
          </select>
          <select 
            className="toolbar_selection size_selection" 
            value={this.props.fontSize} 
            onChange={handleSize}
          >
            {
              sizes.map(size =>
                <option value={size} style={{fontSize: size}}>{size}</option>
              )
            }
          </select>
          <input 
            type="color" 
            className="toolbar_color color_picker" 
            value={this.props.selectedColor}
            onChange={handleColor}
          ></input>
        </div>
      </div>
    );
  }
}

// ========================================

export default Formatting_Display;