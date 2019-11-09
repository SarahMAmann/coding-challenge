import React from 'react';
import PropTypes from 'prop-types';
import { machineData } from '..';

class ProductionToggle extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        isHidden: true
      };
      machineData.productionTime
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
        const daysValue = (machineData.productionTime / 24).toFixed(2)
      return (
        <div>
          <button className="toggle-button" onClick={this.toggleHidden.bind(this)} >{this.state.isHidden ? <div className="button-label">view as days</div> : <div className="button-label">view as hours</div>}</button>
          {this.state.isHidden ? <div>{machineData.productionTime} hrs</div> : <div>{daysValue} days</div>}
        </div>
      )
    }
  }

ProductionToggle.defaultProps = {};
ProductionToggle.propTypes = {

  productionTime: PropTypes.number.isRequired,

};

export default ProductionToggle;