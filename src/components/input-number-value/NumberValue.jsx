import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function NumberValue() {
  const { value, setValue } = useContext(PlanetsContext);

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  return (
    <input
      type="number"
      value={ value }
      placeholder="0"
      data-testid="value-filter"
      onChange={ handleValue }
    />
  );
}

export default NumberValue;
