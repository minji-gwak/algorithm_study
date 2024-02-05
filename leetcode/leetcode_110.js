const isBalanced = (root) => {
  let isHeightBalanced = true;

  const dfs = (node, height = 0) => {
    if (!node) {
      return height;
    }
    height++;
    let [left, right] = [dfs(node.left, height), dfs(node.right, height)];
    if (Math.abs(left - right) > 1) {
      isHeightBalanced = false;
    }
    return Math.max(left, right);
  };
  dfs(root);
  return isHeightBalanced;
};
