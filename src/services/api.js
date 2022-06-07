// Não consegui usar diretamente a função, falta aprender a aplicar o fetch através de custom Hooks.
const fetchPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  return data.results;
};

export default fetchPlanets;
