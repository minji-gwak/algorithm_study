const rangeSumBST = (root, low, high) => {
  let sum = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    if (!!node.val && node.val >= low && node.val <= high) {
      sum += node.val;
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return sum;
};
