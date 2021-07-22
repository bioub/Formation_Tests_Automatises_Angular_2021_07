import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return Trop Petit when first param is lower than the second', () => {
    expect(comparer(1, 2)).toBe('Trop petit');
  });
  it('should return Trop Grand when first param is greater than the second', () => {
    expect(comparer(2, 1)).toBe('Trop Grand');
  });
  it('should return Gagné when first param is equal to the second', () => {
    expect(comparer(1, 1)).toBe('Gagné');
  });
});
