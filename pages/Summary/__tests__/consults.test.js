import price from '../consults';

describe('Working', () => {
  it('passes a dummy test', () => {
    expect(1 + 1).toEqual(2);
  });

  it('correctly calculates a purchase price', () => {
    expect(price(0)).toEqual(0);
    expect(price(2)).toEqual(0.18);
    expect(price(1000)).toEqual(90);
    expect(price(1024)).toEqual(93.84);
    expect(price(2500)).toEqual(370);
    expect(price(10000)).toEqual(2170);
  });
});
