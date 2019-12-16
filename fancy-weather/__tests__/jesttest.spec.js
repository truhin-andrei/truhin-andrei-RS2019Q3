import {convertKtoF, convertFtoC, convertKtoC, convertCtoF, getDeg, getMinutes} from '../src/js/func';

describe('temp converter', () => {
  test('K deg to C deg', () => {
    expect(convertKtoC(273.15)).toEqual(0);
  });
});

describe('temp converter', () => {
  test('K deg to F deg', () => {
    expect(convertKtoF(273.15)).toEqual(32);
  });
});

describe('temp converter', () => {
  test('K deg to F deg', () => {
    expect(convertFtoC(32)).toEqual(0);
  });
});

describe('temp converter', () => {
  test('K deg to F deg', () => {
    expect(convertCtoF(0)).toEqual(32);
  });
});

describe('degree extractor', () => {
  test('degree extractor', () => {
    expect(getDeg(3.97)).toEqual(3);
  });
});

describe('temp extractor', () => {
  test('K extractor', () => {
    expect(getMinutes(3.97)).toEqual(58);
  });
});