import {getDict} from '../src/js/language';

describe('check', () => {
  test('checkC deg', () => {
    if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'En') {
      expect(getDict()).toEqual(['Feels like', 'Wind', 'Humidity', 'Latitude', 'Longitude', 'Search city', 'Search']);
    }else{
      expect(getDict()).toEqual(['Ощущается', 'Ветер', 'Влажность', 'Широта', 'Долгота', 'Введите город', 'Поиск']);
    }  
  });
});