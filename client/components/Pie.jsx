import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
import { machineData } from '..';
 

// Based on my understanding of the data, it looked like it made
// sense to include both scrap percentage and utilization in the
// same pie chart, as percentages of total parts produced. If utilization
// is referring to something else here, it could be placed in a separate pie chart.

  const PieChart = () => {
      const remainingValue = (1 - (machineData.scrapPercentage + machineData.utilization)).toFixed(4)
    return (
      <div className="pie-chart">
        <ResponsivePie
        data={[
            {
              "id": "scrap",
              "label": (machineData.scrapPercentage * 100) + '%',
              "value": machineData.scrapPercentage,
              "color": "hsl(347, 70%, 50%)"
            },
            {
              "id": "utilization",
              "label": (machineData.utilization * 100) + '%',
              "value": machineData.utilization,
              "color": "hsl(46, 70%, 50%)"
            },
            {
              "id": "other",
              "label": (remainingValue * 100) + '%',
              "value": remainingValue,
              "color": "hsl(290, 70%, 50%)"
            },
        ]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    );
  };

  PieChart.defaultProps = {};
  PieChart.propTypes = {
  partsByHour: PropTypes.arrayOf(PropTypes.shape({
    scrapPercentage: PropTypes.number.isRequired,
    utilization: PropTypes.number.isRequired,
  })),
};
    
export default PieChart;
