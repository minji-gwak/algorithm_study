const longestUnivaluePath = (root) => {
  let longest = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    let [leftCnt, rightCnt] = [dfs(node.left), dfs(node.right)];
    if (!!node.left && node.val === node.left.val) {
      leftCnt++;
    } else {
      leftCnt = 0;
    }
    if (!!node.right && node.val === node.right.val) {
      rightCnt++;
    } else {
      rightCnt = 0;
    }
    longest = Math.max(longest, leftCnt + rightCnt);
    return Math.max(leftCnt, rightCnt);
  };
  dfs(root);
  return longest;
};
