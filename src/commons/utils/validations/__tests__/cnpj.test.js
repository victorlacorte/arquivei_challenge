import * as cnpj from '../cnpj'

describe('CNPJ', () => {
  it('blacklists common numbers', () => {
    expect(cnpj.isValidCnpj('00000000000000')).toBe(false)
    expect(cnpj.isValidCnpj('11111111111111')).toBe(false)
    expect(cnpj.isValidCnpj('22222222222222')).toBe(false)
    expect(cnpj.isValidCnpj('33333333333333')).toBe(false)
    expect(cnpj.isValidCnpj('44444444444444')).toBe(false)
    expect(cnpj.isValidCnpj('55555555555555')).toBe(false)
    expect(cnpj.isValidCnpj('66666666666666')).toBe(false)
    expect(cnpj.isValidCnpj('77777777777777')).toBe(false)
    expect(cnpj.isValidCnpj('88888888888888')).toBe(false)
    expect(cnpj.isValidCnpj('99999999999999')).toBe(false)
  });

  it('rejects falsy values', () => {
    expect(cnpj.isValidCnpj('')).toBe(false)
    expect(cnpj.isValidCnpj(null)).toBe(false)
    expect(cnpj.isValidCnpj(undefined)).toBe(false)
  });

  it('validates formatted strings', () => {
    expect(cnpj.isValidCnpj('54.550.752/0001-55')).toBe(true)
  });

  it('validates unformatted strings', () => {
    expect(cnpj.isValidCnpj('54550752000155')).toBe(true)
  });

  it('validates messed strings', () => {
    expect(cnpj.isValidCnpj('54550[752#0001..$55')).toBe(true)
  });

  it('strictly validates strings', () => {
    expect(cnpj.isValidCnpj('54550[752#0001..$55', true)).toBe(false)
    expect(cnpj.isValidCnpj('54.550.752/0001-55', true)).toBe(true)
    expect(cnpj.isValidCnpj('54550752000155', true)).toBe(true)
  });

  it('returns stripped number', () => {
    var number = cnpj.strip('54550[752#0001..$55')

    expect(number).toBe('54550752000155')
  });

  it('returns formatted number', () => {
    var number = cnpj.format('54550752000155')
    expect(number).toBe('54.550.752/0001-55')
  })
})
