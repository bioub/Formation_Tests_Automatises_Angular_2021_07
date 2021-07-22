import { racineCarre } from "./racineCarre";

describe('racineCarre function', () => {
  it('should return sqrt from param', () => {
    expect(racineCarre(4)).toBe(2);
  });
  it('should throw an error when param is negative', () => {
    expect(() => racineCarre(-1)).toThrowError(`nb must be positive`)
  });
});
