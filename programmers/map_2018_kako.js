const solution = (n, arr1, arr2) => {
  const realMap = Array(n);

  for (let i = 0; i < n; i++) {
    let realMapLine = '';
    let [map1, map2] = [arr1[i].toString(2).padStart(n, '0').split(''), arr2[i].toString(2).padStart(n, '0').split('')];

    map1.map((mapInfo, index) => (realMapLine += mapInfo === '0' && map2[index] === '0' ? ' ' : '#'));
    realMap[i] = realMapLine;
  }
  return realMap;
};

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
