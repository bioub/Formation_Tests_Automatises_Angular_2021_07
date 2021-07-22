import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should return a statement with values from param', () => {
    expect(dejaSaisis([1, 2, 3])).toBe('Vous avez déjà saisi : 1 | 2 | 3');
  });
  it('should return undefined when array is empty', () => {
    expect(dejaSaisis([])).toBeUndefined();
  });
});
