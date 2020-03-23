import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Output from "./components/Output";
import Input from "./components/Input";

// ========================================

class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calculator">
          <Input />
          <Output />
        </div>
      </>
    );
  }
}

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
