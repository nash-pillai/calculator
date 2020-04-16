import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings'; 
import '../index.css';

import Menu from "./Menu"
import SettingsDisplay from "./sidebar/SettingsDisplay"

// ========================================

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "Settings"
    }
  }
  render() {
    var style = {
      fontSize: "15px"
    }
    return (
      <div className="settings">
        <Menu 
          tabs={
            {
              "Settings": <SettingsIcon className="icon" style={style}/>, 
              "Help": <HelpOutlineIcon className="icon" style={style}/>
            }
          }
          useIcons={this.props.useIcons}
          changeTab={(newTab) => {
            this.setState(prevState => ({selectedTab: newTab}));
          }}
          selectedTab={this.state.selectedTab}
        />
        <SettingsDisplay />
      </div>
    );
  }
}

// ========================================

export default Sidebar;