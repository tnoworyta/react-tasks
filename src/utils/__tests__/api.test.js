import { getShops } from '../api';

jest.mock('../request');

it('returns shops', () => {
  expect.assertions(1);
  return getShops().then((data) =>
    expect(data).toEqual([
      { location: 'Brzeszcze', name: 'Lidl' },
      { location: 'Brzeszcze', name: 'Intermarche' },
    ]),
  );
});
