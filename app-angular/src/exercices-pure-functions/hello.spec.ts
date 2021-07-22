import { hello } from "./hello";

describe('hello function', () => {
  it('should return Hello followed by name', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });
});
