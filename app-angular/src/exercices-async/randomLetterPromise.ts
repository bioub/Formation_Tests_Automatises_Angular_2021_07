export function randomLetterPromise(letter: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(letter);
    }, Math.random() * 1000);
  });
}

// randomLetter('A').then((letter) => { console.log(letter); })
