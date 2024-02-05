const letterCombinations = (digits) => {
  const digitList = digits.split('').map(Number);
  const graph = [[], []];
  const answer = [];
  let cnt = 0;

  for (let i = 2; i < 10; i++) {
    let plus = i === 7 || i === 9 ? 4 : 3;
    let alpha = '';
    for (let j = 97 + cnt; j < 97 + cnt + plus; j++) {
      alpha += String.fromCharCode(j);
    }
    graph.push(alpha.split(''));
    cnt += plus;
  }

  const combi = (index, str = '') => {
    if (!digits) {
      return;
    }
    if (str.length == digitList.length) {
      answer.push(str);
      return;
    }
    graph[digitList[index]].forEach((char) => {
      combi(index + 1, str + char);
    });
  };

  combi(0);
  return answer;
};
