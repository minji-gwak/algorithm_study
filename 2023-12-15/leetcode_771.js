const numJewelsInStones = (jewels, stones) => {
  const jewelSet = new Set(jewels.split(''));
  let count = 0;

  stones.split('').forEach((s) => {
    count = jewelSet.has(s) ? count + 1 : count;
  });
  return count;
};

numJewelsInStones('aA', 'aAAbbbb');
