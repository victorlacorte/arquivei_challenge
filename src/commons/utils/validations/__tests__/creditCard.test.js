import creditCard from '../creditCard';

describe('creditCard', () => {
  it('normalizes a CVV', () => {
    expect(creditCard.normalizeExpirationDate('01')).toEqual('01');
    expect(creditCard.normalizeExpirationDate('012')).toEqual('01/2');
    expect(creditCard.normalizeExpirationDate('0123')).toEqual('01/23');
    expect(creditCard.normalizeExpirationDate('01234')).toEqual('01/23');
  });
});
