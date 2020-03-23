import React from 'react';
import '../index.css';

import Tab from "./Tab";

// ========================================

class Menu extends React.Component {
  tabs = ["General", "Alphabet", "Greek Letters", "Symbols", "Formatting"];
  render() {
    return (
      <div className="menu">
        {
          this.tabs.map(title => 
            <Tab 
              title={title} 
              selected={title === this.props.selectedTab ? true : false}
              changeTab={this.props.changeTab}
            />
          )
        }
      </div>
    );
  }
}

// ========================================

export default Menu;
