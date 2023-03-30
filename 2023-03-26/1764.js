const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(neverHeardNum, peopleList) {
  const neverHeardList = new Set(peopleList.splice(0, neverHeardNum)); // 듣도 못한 사람 명단
  const neverSeenList = new Set(peopleList); // 보도 못한 사람 명단
  const neverHeardSeenList = new Array(); // 듣도 보도 못한 사람 명단

  if (neverHeardList.size < neverSeenList.size) {
    // 보도 못한 사람이 많을 때
    for (let nsPerson of neverSeenList) {
      if (neverHeardList.has(nsPerson)) {
        // 듣도 못한 사람 명단과 중복체크
        neverHeardSeenList.push(nsPerson);
      }
    }
  } else {
    for (let nhPerson of neverHeardList) {
      if (neverSeenList.has(nhPerson)) {
        // 보도 못한 사람 명단과 중복체크
        neverHeardSeenList.push(nhPerson);
      }
    }
  }
  neverHeardSeenList.sort((a, b) => (a > b ? 1 : -1)); // 사전순 정렬

  console.log([neverHeardSeenList.length, ...neverHeardSeenList].join('\n'));
}

solution(L.split(' ').map(Number)[0], datas);
