import React from 'react';
import PropTypes from 'prop-types';
import { machineData } from '..';

class CycleToggle extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        isHidden: true
      };
      machineData.averageCycleTime
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
        const minutesValue = (machineData.averageCycleTime / 60).toFixed(2)
      return (
        <div>
          <button className="toggle-button" onClick={this.toggleHidden.bind(this)} >{this.state.isHidden ? <div className="button-label">view as minutes</div> : <div className="button-label">view as seconds</div>}</button>
          {this.state.isHidden ? <div>{machineData.averageCycleTime} sec</div> : <div>{minutesValue} min</div>}
        </div>
      )
    }
  }

CycleToggle.defaultProps = {};
CycleToggle.propTypes = {
averageCycleTime: PropTypes.number.isRequired,
};

export default CycleToggle;