import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [operator, setOperator] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setNumericFilter] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const dataAPI = await response.json();
      setData(dataAPI.results);
      setPlanets(dataAPI.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const planetsFiltered = data.filter((planet) => planet.name
      .toLowerCase().includes(filterByName));

    const reduced = filterByNumericValues.reduce((acc, cur) => acc.filter((planet) => {
      switch (cur.operator) {
      case 'maior que':
        return planet[cur.column] > Number(cur.value);
      case 'menor que':
        return planet[cur.column] < Number(cur.value);
      case 'igual a':
        return Number(planet[cur.column]) === Number(cur.value);
      default:
        return planetsFiltered;
      }
    }), planetsFiltered);

    setPlanets(reduced);
  }, [data, filterByName, filterByNumericValues]);

  const contextState = {
    planets,
    setFilterByName,
    column,
    setColumn,
    options,
    setOptions,
    operator,
    setOperator,
    value,
    setValue,
    filterByNumericValues,
    setNumericFilter,
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
