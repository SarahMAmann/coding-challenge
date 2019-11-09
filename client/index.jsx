import React from 'react';
import { render } from 'react-dom';

import '../stylesheets/main.scss';
import AppWrapper from './AppWrapper';
import MachinePage from './MachinePage';

export const machineData = {
  averageCycleTime: 45, // in seconds ---- table
  machine: {
    id: 29012,
    name: 'Haas #1',
  }, // ---- title
  partCount: 1002, // count value ----- table
  partsByHour: [
    { time: '01:00 AM', count: 91 },
    { time: '02:00 AM', count: 78 },
    { time: '03:00 AM', count: 58 },
    { time: '04:00 AM', count: 0 },
    { time: '05:00 AM', count: 0 },
    { time: '06:00 AM', count: 89 },
    { time: '07:00 AM', count: 93 },
    { time: '08:00 AM', count: 104 },
    { time: '09:00 AM', count: 74 },
    { time: '10:00 AM', count: 68 },
    { time: '11:00 AM', count: 88 },
    { time: '12:00 PM', count: 43 },
    { time: '01:00 PM', count: 67 },
    { time: '02:00 PM', count: 128 },
    { time: '03:00 PM', count: 21 },
  ], // ---- bar chart
  productionTime: 12.43, // in hours ---- table
  scrapCount: 74, // count value ---- table
  scrapPercentage: .0739, // % out of 1.0 ---- pie chart
  utilization: .869, // % out of 1.0 ---- pie chart
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppWrapper>
          <MachinePage
            averageCycleTime={machineData.averageCycleTime}
            machine={machineData.machine}
            partCount={machineData.partCount}
            partsByHour={machineData.partsByHour}
            productionTime={machineData.productionTime}
            scrapCount={machineData.scrapCount}
            scrapPercentage={machineData.scrapPercentage}
            utilization={machineData.utilization}
          />
        </AppWrapper>
      </div>
    );
  }
}

render((
  <App />
), document.getElementById('content'))
