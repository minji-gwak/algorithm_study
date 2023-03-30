const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(saveSiteNum, list) {
  const saveSiteList = list.splice(0, saveSiteNum).map((x) => x.split(' '));
  const findSiteList = list;
  const sitePasswordMap = new Map();
  const passwordList = new Array();

  saveSiteList.forEach((info) => {
    sitePasswordMap.set(...info);
  });

  findSiteList.forEach((findUrl) => {
    passwordList.push(sitePasswordMap.get(findUrl));
  });
  console.log(passwordList.join('\n'));
}

solution(Number(L.split(' ')[0]), datas);
