import { promiseRandomTimeout } from './promiseRandomTimeout';

describe('promiseRandomTimeout function', () => {
  it('should resolve my promise', () => {
    jasmine.clock().install();
    const promise = promiseRandomTimeout('A');

    jasmine.clock().tick(1000);

    return promise.then((val) => {
      expect(val).toBe('A'); // PAS D'ERREUR ????
      jasmine.clock().uninstall();
    });
  });
  it('should resolve my promise', () => {
    return promiseRandomTimeout('A').then((val) => {
      expect(val).toBe('A'); // PAS D'ERREUR ????
    });
  });
  it('should resolve my promise', async () => {
    const letter = await promiseRandomTimeout('A');
    expect(letter).toBe('A'); // PAS D'ERREUR ????
  });
});
