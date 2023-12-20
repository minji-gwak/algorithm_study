const invertTree = (root) => {
  if (!root) {
    return root;
  }
  let [left, right] = [invertTree(root.left), invertTree(root.right)];
  [root.left, root.right] = [right, left];
  return root;
};
