const solution = (n, a, b) => {
  let rnd = 0;

  while (a !== b) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    rnd++;
  }
  return rnd;
};
