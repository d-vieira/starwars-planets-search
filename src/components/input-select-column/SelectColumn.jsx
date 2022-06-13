import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function SelectColumn() {
  const { setColumn, options } = useContext(PlanetsContext);

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  return (
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
  );
}

export default SelectColumn;
