import { getScale } from '../src/screens/downloadImg/downloadImg';

const canvas = {width:512, height:512};

describe('get scale', () => {
  test('get Scale', () => {
    expect(getScale(512, 512, canvas)).toEqual(1);
  });
});
