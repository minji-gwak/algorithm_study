const diameterOfBinaryTree = (root) => {
  let edgeCnt = 0; // 가장 긴 리프 - 리프 경로 길이

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    let [leftHeight, rightHeight] = [dfs(node.left), dfs(node.right)];
    edgeCnt = Math.max(edgeCnt, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  };
  dfs(root);
  return edgeCnt;
};
