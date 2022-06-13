import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function ButtonRemoveAll() {
  const { setNumericFilter } = useContext(PlanetsContext);

  const handleRemoveAll = () => {
    const removedFilters = [];
    setNumericFilter(removedFilters);
  };

  return (
    <button
      type="button"
      data-testid="button-remove-filters"
      onClick={ handleRemoveAll }
    >
      Remove all Filters
    </button>
  );
}

export default ButtonRemoveAll;
