import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Output from "./components/Output";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";

// ========================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useIcons: window.innerWidth < 650
    };
  };
  render() {
    window.onresize = () => {
      this.setState(prev => ({
        useIcons: window.innerWidth < 650
      }))
    };
    return (
      <div className="calculator">
        <Input useIcons={this.state.useIcons}/>
        <Sidebar useIcons={this.state.useIcons}/>
        <Output useIcons={this.state.useIcons}/>
        <p className="ad">AD</p>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
