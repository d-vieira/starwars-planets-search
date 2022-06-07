import React, { useState } from 'react';
import propTypes from 'prop-types';
// import fetchPlanets from '../services/api';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const contextState = {
    data,
    setData,
  };

  return (
    <PlanetsContext.Provider value={ contextState }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
