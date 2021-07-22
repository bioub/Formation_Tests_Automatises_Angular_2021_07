export function dejaSaisis(nbs: number[]) {
  if (!nbs.length) {
    throw new Error('nbs must be filled');
  }

  return 'Vous avez déjà saisi : ' + nbs.join(' | ');
}
