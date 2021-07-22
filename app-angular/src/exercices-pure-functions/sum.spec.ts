import { sum } from "./sum";

describe('sum function', () => {
  it('should add 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('should add positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(10, 3)).toBe(13);
  });
});
