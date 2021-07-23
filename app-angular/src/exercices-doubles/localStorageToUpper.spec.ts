import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  fit('should return random value depending on Math.random', () => {
    spyOn(localStorage, 'getItem').and.returnValue('abc');
    expect(localStorageToUpper('my-key')).toBe('ABC');
    expect(localStorage.getItem).toHaveBeenCalledWith('my-key');
  });
});
