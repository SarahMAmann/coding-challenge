import React from 'react';
import PropTypes from 'prop-types';

const amperLogo = require('../amper-logomark.svg');

const AppWrapper = ({ children }) => {
  return (
    <div className="flex">
        <div className="left-bar">
          <div className="flex f-al-center logo">
            <img src={amperLogo} style={{ height: '30px' }} alt="amper logo" />
            <h3>AMPER</h3>
          </div>
        </div>
        <div className="main-app f-grow">
            <div className="top-bar flex f-al-center f-just-end">
              <div>Demo</div>
            </div>
            {children}
        </div>
    </div>
  );
};

AppWrapper.defaultProps = {};
AppWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(Object),
        PropTypes.shape({}),
    ]).isRequired,
};

export default AppWrapper;
