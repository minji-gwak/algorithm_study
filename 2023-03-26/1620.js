const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(pokemonNum, inputList) {
  const pokedex = inputList.splice(0, pokemonNum); // 포켓몬 도감 배열
  const questionList = inputList; // 문제 목록
  const pokedexForName = new Map(); // 이름을 key 값으로 갖고 번호를 value 값으로 갖는 Map
  const pokedexForNumber = new Map(); // 번호를 key 값으로 갖고 이름을 value 값으로 갖는 Map
  const answerList = new Array();

  pokedex.forEach((pokemonName, index) => {
    pokedexForName.set(pokemonName, index + 1);
    pokedexForNumber.set(index + 1, pokemonName);
  });

  questionList.forEach((pokemonInfo) => {
    if (!!Number(pokemonInfo) === true) {
      // 문제가 번호로 주어졌을 때
      pokemonInfo = Number(pokemonInfo);
      answerList.push(pokedexForNumber.get(pokemonInfo));
    } else {
      // 문제가 이름으로 주어졌을 때
      answerList.push(pokedexForName.get(pokemonInfo));
    }
  });
  console.log(answerList.join('\n'));
}

solution(L.split(' ')[0], datas);
