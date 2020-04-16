import React from 'react';
import '../../../index.css';


// ========================================

class General_Display extends React.Component {
  render() {
    var numbers = "123456789.0=".split("");
    var moveCursor = ["Start", <>&#8593;</>, "End", <>&#8592;</>, <>&#8595;</>, <>&#8594;</>];
    var basicOperations = "+-×÷".split("");
    return (
      <div className="general_display">
        <div className="num_block">
          {
            numbers.map(number => 
              <button className="toolbar_button number_button">
                {number}
              </button>
            )
          }
        </div>
        <div className="moveCursor_block">
          {
            moveCursor.map(direction => 
              <button className="toolbar_button moveCursor_button">
                {direction}
              </button>
            )
          }
        </div>
        <div className="control_block">
          <button className="toolbar_button undo_button">↶</button>
          <button className="toolbar_button redo_button">↷</button>
          <button className="toolbar_button delete_button">del</button>
          <button className="toolbar_button clear_button">cls</button>
        </div>
        <div className="basicOperation_block">
          {
            basicOperations.map(operation => 
              <button className="toolbar_button basicOperation_button">
                {operation}
              </button>
            )
          }
        </div>
        <div className="parentheses_block">
          <button className="toolbar_button openParenthesis_button">(</button>
          <button className="toolbar_button closeParenthesis_button">)</button>
        </div>
      </div>
    );
  }
}

// ========================================

export default General_Display;
