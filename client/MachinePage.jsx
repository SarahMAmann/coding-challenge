import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './components/Bar';


const MachinePage = ({
  averageCycleTime,
  machine,
  partCount,
  partsByHour,
  productionTime,
  scrapCount,
  scrapPercentage,
  utilization,
}) => {
  return (
    <div>
      <div className="title-area">
        <div className="column">
          <div className="machine-name">{machine.name}</div>
        </div>
        <div className="column">
          <div className="id-number">{machine.id}</div>
        </div>
      </div>
      <div className="second-row">
          <div className="table-column">
            table
          </div>
          <div className="pie-column">
            pie chart
          </div>
          <div className="pie-column">
            pie chart
          </div>
      </div>
      <div className="third-row">
        parts produced by hour:
        <BarChart 
        partsByHour={partsByHour}
        />
      </div>
    </div>
  );
};

MachinePage.defaultProps = {};
MachinePage.propTypes = {
  averageCycleTime: PropTypes.number.isRequired,
  machine: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  partCount: PropTypes.number.isRequired,
  partsByHour: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })),
  productionTime: PropTypes.number.isRequired,
  scrapCount: PropTypes.number.isRequired,
  scrapPercentage: PropTypes.number.isRequired,
  utilization: PropTypes.number.isRequired,
};

export default MachinePage;
