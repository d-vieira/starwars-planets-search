import React, { useEffect, useState } from 'react';

// ORIGINAL FILE
// APP MADE AS A SINGLE COMPONENT

function Table() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setNumericFilter] = useState([]);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
  }, [filterByName, filterByNumericValues, data]);

  const handleFilter = ({ target }) => {
    setFilterByName(target.value.toLowerCase());
  };

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleOperator = ({ target }) => {
    setOperator(target.value);
  };

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  const handleNumericFilter = () => {
    const numericValues = {
      column,
      operator,
      value,
    };
    setNumericFilter([...filterByNumericValues, numericValues]);
    setValue(0);
    const filterOpt = options.filter((option) => !option.includes(numericValues.column));
    setOptions(filterOpt);
  };

  const handleRemoveFilter = (index) => {
    const removeFilter = filterByNumericValues.filter((
      _filter, filterIndex,
    ) => filterIndex !== index);

    setNumericFilter(removeFilter);
  };

  const handleRemoveAll = () => {
    setNumericFilter([]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search a planet..."
          data-testid="name-filter"
          onChange={ handleFilter }
        />

        <label htmlFor="column">
          Choose a column
          <select
            id="column"
            data-testid="column-filter"
            onChange={ handleColumn }
          >
            {
              options.map((option) => (
                <option
                  key={ option }
                >
                  { option }
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="operator">
          Operator
          <select
            id="operator"
            data-testid="comparison-filter"
            onChange={ handleOperator }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <input
          type="number"
          value={ value }
          placeholder="0"
          data-testid="value-filter"
          onChange={ handleValue }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
        >
          Filter
        </button>

        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ handleRemoveAll }
        >
          Remove all Filters
        </button>
      </form>

      {
        filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            <p>
              {`${filter.column} ${filter.operator} ${filter.value}`}
            </p>
            <button
              type="button"
              onClick={ () => handleRemoveFilter(index) }
            >
              X
            </button>
          </div>
        ))
      }

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            planets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
