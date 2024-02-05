const lengthOfLongestSubstring = (s) => {
  let currStr = '';
  let [count, end] = [0, 0];

  for (let start = 0; end < s.length; start++) {
    if (currStr.includes(s[end])) {
      // 중복 문자가 있는 경우
      start = currStr.indexOf(s[end]) + 1; // 중복되지 않는 문자를 start 위치로 변경한다.
      currStr = currStr.slice(start); // 문자열 처음 문자부터 중복되는 문자까지 삭제
    } else {
      // 중복 문자가 없는 경우
      // 현재 문자열의 길이가 count와 같다면 count++ 한다.
      count = count > currStr.length ? count : count + 1;
    }
    // 문자열 뒤에 현재 index가 end인 문자를 추가한다. 추가 후 end 값을 올린다.
    currStr += s[end++];
  }
  return count;
};
