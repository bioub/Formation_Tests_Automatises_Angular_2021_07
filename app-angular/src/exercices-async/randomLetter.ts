export function randomLetter(letter: string, cb: (letter: string) => void) {
  setTimeout(() => {
    cb(letter);
  }, Math.random() * 1000);
}
