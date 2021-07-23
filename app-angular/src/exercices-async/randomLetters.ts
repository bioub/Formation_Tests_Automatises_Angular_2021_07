export function randomLetters(
  letter: string,
  cb1: (letter: string) => void,
  cb2: (letter: string) => void
) {
  setTimeout(() => {
    cb1(letter);
  }, Math.random() * 1000);
  setTimeout(() => {
    cb2(letter);
  }, Math.random() * 1000);
}
