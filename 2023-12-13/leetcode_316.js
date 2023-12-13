let removeDuplicateLetters = (s) => {
  const charCounter = {}; // 각 문자가 등장하는 개수를 저장하는 객체

  for (let i = 0; i < s.length; i++) {
    if (!charCounter[s[i]]) {
      charCounter[s[i]] = 1;
    } else {
      charCounter[s[i]]++;
    }
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    charCounter[s[i]]--;

    if (stack.includes(s[i])) {
      continue;
    }
    while (stack && stack[stack.length - 1] > s[i] && charCounter[stack[stack.length - 1]] > 0) {
      stack.pop();
    }
    stack.push(s[i]);
  }

  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));
