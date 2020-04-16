import React from 'react';
import '../index.css';

import Tab from "./Tab";

// ========================================

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        {
          this.props.useIcons ?
          Object.entries(this.props.tabs).map(title => 
            <Tab 
              title={title[1]} 
              selected={title[0] === this.props.selectedTab}
              changeTab={this.props.changeTab}
              tabName={title[0]}
            />
          ):
          Object.entries(this.props.tabs).map(title => 
            <Tab 
              title={title[0]} 
              selected={title[0] === this.props.selectedTab}
              changeTab={this.props.changeTab}
              tabName={title[0]}
            />
          )
        }
      </div>
    );
  }
}

// ========================================

export default Menu;
