const searchBST = (root, val) => {
  if (!root || root.val === val) {
    return root;
  }
  return searchBST(root.val < val ? root.right : root.left, val);
};
