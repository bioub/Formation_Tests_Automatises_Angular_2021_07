import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should return total even elements', () => {
    expect(totalPairs([1, 2, 3, 4])).toBe(2);
  });
});
