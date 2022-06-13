import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function SelectOperator() {
  const { setOperator } = useContext(PlanetsContext);

  const handleOperator = ({ target }) => {
    setOperator(target.value);
  };

  return (
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
  );
}

export default SelectOperator;
