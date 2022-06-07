import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const contextState = {
    data,
    getPlanets: (planets) => {
      setData([
        ...data,
        planets,
      ]);
    },
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
