import React from 'react';
import '../index.css';


// ========================================

class Tab extends React.Component {
  render() {
    var a = this.props.selected ? {"backgroundColor": "lightGray"} : {"backgroundColor": "gray"};
    return (
      <div className="tab" style={a} onClick={event => {this.props.changeTab(this.props.title)}}>
        <span>{ this.props.title }</span>
      </div>
    );
  }
}

// ========================================

export default Tab;
