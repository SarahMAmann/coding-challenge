import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './components/Bar';
import PieChart from './components/Pie';
import ProductionToggle from './components/ProductionToggle';
import CycleToggle from './components/CycleToggle';


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
            <table>
              <tr>
                <td className="table-label">Average Cycle Time:</td>
                <td className="table-data">
                  <CycleToggle 
                    averageCycleTime={averageCycleTime}
                  />
                </td>
                <td className="table-label">Part Count:</td>
                <td className="table-data">{partCount}</td>
              </tr>
              <tr>
                <td className="table-label">Production Time:</td>
                <td className="table-data">
                  <ProductionToggle 
                    productionTime={productionTime}
                  />
                </td>
                <td className="table-label">Scrap Count:</td>
                <td className="table-data">{scrapCount}</td>
              </tr>
            </table>
          </div>
          <div className="pie-column">
            <PieChart 
            scrapPercentage={scrapPercentage}
            utilization={utilization}
            />
          </div>
      </div>
      <div className="third-row">
        <p className="bar-chart-title">Parts Produced By Hour:</p>
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
