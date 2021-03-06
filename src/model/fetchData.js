import Planets from './Planets';
import Vehicles from './Vehicles';
import People from './People';
import fetchFilmData from './Film';

const fetchData = (type, component) => {
  switch (type) {
    case 'people':
      return new People().fetchPeople(component);
    case 'planets':
      return new Planets().fetchPlanets(component);
    case 'vehicles':
      return new Vehicles().fetchVehicles(component);
    case '/':
      return fetchFilmData(component)
    default:
      return [];
  }
}

export default fetchData;
