import { convertToNumber } from "./convertToNumber";

describe('convertToNumber function', () => {
  it('should return param converted to number', () => {
    expect(convertToNumber('123')).toBe(123);
  });
  it('should throw an error when param is not convertible to number', () => {
    expect(() => convertToNumber('ABC')).toThrowError(`Erreur : "ABC" n'est pas un nombre`)
  });
});
