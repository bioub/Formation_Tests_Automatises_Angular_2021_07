import { randomLetter } from "./randomLetter";

describe('randomLetter function', () => {
  // it('should call my callback', () => {
  //   randomLetter('A', (letter) => {
  //     expect(letter).toBe('B'); // PAS D'ERREUR ????
  //   });
  // });
  it('should call my callback (done)', (done) => {
    randomLetter('A', (letter) => {
      expect(letter).toBe('A'); // PAS D'ERREUR ????
      done();
    });
  });
  it('should call my callback (createSpy)', () => {
    jasmine.clock().install();
    const spy = jasmine.createSpy();
    randomLetter('A', spy);
    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledWith('A');
    jasmine.clock().uninstall();
  });
});
