import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {

  it('should call my callback (done)', (done) => {
    timeoutUpper('A', (val) => {
      expect(val).toBe('A'); // PAS D'ERREUR ????
      done();
    });
  });
  it('should call my callback (createSpy)', () => {
    jasmine.clock().install();
    const spy = jasmine.createSpy();
    timeoutUpper('A', spy);
    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledWith('A');
    jasmine.clock().uninstall();
  });
});
