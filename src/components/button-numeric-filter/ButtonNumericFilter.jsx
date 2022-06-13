import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function ButtonNumericFilter() {
  const {
    column,
    operator,
    value,
    setValue,
    filterByNumericValues,
    setNumericFilter,
    options,
    setOptions,
  } = useContext(PlanetsContext);

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

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleNumericFilter }
    >
      Filter
    </button>
  );
}

export default ButtonNumericFilter;
