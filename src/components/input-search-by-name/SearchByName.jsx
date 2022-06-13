import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function SearchByName() {
  const { setFilterByName } = useContext(PlanetsContext);

  const handleFilter = ({ target }) => {
    setFilterByName(target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="search a planet..."
      data-testid="name-filter"
      onChange={ handleFilter }
    />
  );
}

export default SearchByName;
