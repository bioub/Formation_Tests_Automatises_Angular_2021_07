import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should return random value depending on Math.random', () => {
    spyOn(Math, 'random').and.returnValue(0.42);
    expect(genererAlea(0, 100)).toBe(42);
    expect(Math.random).toHaveBeenCalledTimes(1);
  });
});
