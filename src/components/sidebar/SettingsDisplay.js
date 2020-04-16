import React from 'react';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import '../../index.css';


// ========================================

class SettingsDisplay extends React.Component {
  render() {
    var style = {
      fontSize: "15px"
    }
    return (
      <div className="settings_display">
        <input type="radio" id="Editor" name="mode" checked value="Editor" />
        <label for="Editor">Editor</label><br />
        <input type="radio" id="Compute" name="mode" value="Compute" />
        <label for="Compute">Compute</label><br />
        <input type="radio" id="Simplify" name="mode" value="Simplify" />
        <label for="Simplify">Simplify</label><br />
        <input type="radio" id="Graph" name="mode" value="Graph" />
        <label for="Graph">Graph</label><br />
        <br /><button>
          <BrightnessMediumIcon className="icon" style={style}/>
          Dark Mode
        </button>
      </div>
    );
  }
}

// ========================================

export default SettingsDisplay;
