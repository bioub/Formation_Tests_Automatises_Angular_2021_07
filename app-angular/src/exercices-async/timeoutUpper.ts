export function timeoutUpper(val, cb) {
  setTimeout(() => {
    cb(val);
  }, 1000);
}
