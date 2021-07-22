import { convertToNumber } from "./convertToNumber";



describe('convertToNumber function with double', () => {
  it('should return param converted to number (fake)', () => {
    const backupParseInt = globalThis.parseInt;
    globalThis.parseInt = (val: string, radix: number): number => { return 123 };
    expect(convertToNumber('123')).toBe(123);
    globalThis.parseInt = backupParseInt;
  });
  it('should return param converted to number (spy)', () => {
    const backupParseInt = globalThis.parseInt;
    globalThis.parseInt = jasmine.createSpy().and.returnValue(123);
    expect(convertToNumber('123')).toBe(123);
    expect(globalThis.parseInt).toHaveBeenCalledWith('123', 10);
    globalThis.parseInt = backupParseInt;
  });
  it('should return param converted to number (spyOn)', () => {
    spyOn(globalThis, 'parseInt').and.returnValue(123);
    expect(convertToNumber('123')).toBe(123);
    expect(globalThis.parseInt).toHaveBeenCalledWith('123', 10);
  });
  it('should throw an error when param is not convertible to number', () => {
    expect(() => convertToNumber('ABC')).toThrowError(`Erreur : "ABC" n'est pas un nombre`)
  });
});
