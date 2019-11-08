import cnpj from '../cnpj';

describe('CNPJ', () => {
  it('normalizes a CNPJ', () => {
    expect(cnpj.normalizeCNPJ('12')).toEqual('12');
    expect(cnpj.normalizeCNPJ('123')).toEqual('12.3');
    expect(cnpj.normalizeCNPJ('12345')).toEqual('12.345');
    expect(cnpj.normalizeCNPJ('123456')).toEqual('12.345.6');
    expect(cnpj.normalizeCNPJ('12345678')).toEqual('12.345.678');
    expect(cnpj.normalizeCNPJ('123456789')).toEqual('12.345.678/9');
    expect(cnpj.normalizeCNPJ('123456789012')).toEqual('12.345.678/9012');
    expect(cnpj.normalizeCNPJ('12345678901234')).toEqual('12.345.678/9012-34');
    expect(cnpj.normalizeCNPJ('123456789012345')).toEqual('12.345.678/9012-34');
  });
});
