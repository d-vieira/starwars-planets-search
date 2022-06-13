import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function ButtonRemoveFilter() {
  const {
    filterByNumericValues,
    setNumericFilter,
  } = useContext(PlanetsContext);

  const handleRemoveFilter = (index) => {
    const removeFilter = filterByNumericValues.filter((
      _filter, filterIndex,
    ) => filterIndex !== index);

    setNumericFilter(removeFilter);
  };

  return (
    <div>
      {
        filterByNumericValues.map((filter, index) => (
          <p key={ index } data-testid="filter">
            {`${filter.column} ${filter.operator} ${filter.value}`}
            <button
              type="button"
              onClick={ () => handleRemoveFilter(index) }
            >
              X
            </button>
          </p>
        ))
      }
    </div>
  );
}

export default ButtonRemoveFilter;
