import React from 'react';
import './App.css';
import ButtonNumericFilter from './components/button-numeric-filter/ButtonNumericFilter';
import ButtonRemoveAll from './components/button-remove-all-filters/ButtonRemoveAll';
import ButtonRemoveFilter from './components/button-remove-filter/ButtonRemoveFilter';
import NumberValue from './components/input-number-value/NumberValue';
import SearchByName from './components/input-search-by-name/SearchByName';
import SelectColumn from './components/input-select-column/SelectColumn';
import SelectOperator from './components/input-select-operator/SelectOperator';
import TableBody from './components/table-body/TableBody';
import TableHead from './components/table-head/TableHead';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <form>
        <SearchByName />
        <SelectColumn />
        <SelectOperator />
        <NumberValue />
        <ButtonNumericFilter />
        <ButtonRemoveAll />
        <ButtonRemoveFilter />
      </form>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </PlanetsProvider>
  );
}

export default App;
