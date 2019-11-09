import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import config from './BarConfig';
import PropTypes from 'prop-types';
import { machineData } from '..';


const BarChart = () => {
    return (
      <div className="chart">
        <ResponsiveBar
            data={machineData.partsByHour}
            keys={config.keys}
            indexBy="time"
            margin={config.margin}
            padding={0.3}
            colors="#003366"
            colorBy="id"
            defs={config.defs}
            fill={config.fill}
            borderColor="inherit:darker(1.6)"
            axisTop={null}
            axisRight={null}
            axisBottom={config.axisBottom}
            axisLeft={config.axisLeft}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={config.legends}
            labelTextColor={{ theme: 'grid.line.stroke' }}
        />           
      </div>
    );
  };

  BarChart.defaultProps = {};
  BarChart.propTypes = {
  partsByHour: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })),
};
    
export default BarChart;