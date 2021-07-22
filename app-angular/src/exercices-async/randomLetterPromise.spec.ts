import { randomLetterPromise } from "./randomLetterPromise";

describe('randomLetter function', () => {
  // it('should call my callback', () => {
  //   randomLetter('A', (letter) => {
  //     expect(letter).toBe('B'); // PAS D'ERREUR ????
  //   });
  // });
  it('should resolve my promise', () => {
    return randomLetterPromise('A').then((letter) => {
      expect(letter).toBe('A'); // PAS D'ERREUR ????
    });
  });
  it('should resolve my promise', async () => {
    const letter = await randomLetterPromise('A');
    expect(letter).toBe('A'); // PAS D'ERREUR ????
  });
});
