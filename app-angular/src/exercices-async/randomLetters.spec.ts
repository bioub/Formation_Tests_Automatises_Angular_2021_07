import { waitForAsync } from "@angular/core/testing";
import { randomLetters } from "./randomLetters";

describe('randomLetters function', () => {
  it('should call my callbacks (done)', waitForAsync(() => {
    randomLetters('A', (letter) => {
      expect(letter).toBe('A');
    }, (letter) => {
      expect(letter).toBe('A');
    });
  }));
});
